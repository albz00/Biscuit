<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import Image from '@tiptap/extension-image';
  import Link from '@tiptap/extension-link';
  import Placeholder from '@tiptap/extension-placeholder';
  import Underline from '@tiptap/extension-underline';
  export let value = '';
  export let placeholder = 'Write your article…';
  /** @type {(file: File) => Promise<string>} */
  export let uploadImage = async () => '';

  const dispatch = createEventDispatcher();

  let editorEl;
  /** @type {Editor | null} */
  let editor = null;
  let uploadingImage = false;
  let imageError = '';
  let toolbarTick = 0;

  /** @type {HTMLInputElement | null} */
  let fileInput = null;

  onMount(() => {
    editor = new Editor({
      element: editorEl,
      extensions: [
        StarterKit.configure({
          heading: { levels: [2, 3] }
        }),
        Underline,
        Link.configure({
          openOnClick: false,
          HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' }
        }),
        Image.configure({
          HTMLAttributes: { class: 'blog-editor-image' }
        }),
        Placeholder.configure({ placeholder })
      ],
      content: value || '',
      editorProps: {
        attributes: {
          class:
            'tiptap-editor focus:outline-none min-h-[280px] px-4 py-4 text-base leading-relaxed text-bone-50'
        },
        handlePaste: (view, event) => {
          const files = event.clipboardData?.files;
          if (files?.length && Array.from(files).some((f) => f.type.startsWith('image/'))) {
            event.preventDefault();
            handleImageFiles(files);
            return true;
          }
          return false;
        },
        handleDrop: (view, event) => {
          const files = event.dataTransfer?.files;
          if (files?.length && Array.from(files).some((f) => f.type.startsWith('image/'))) {
            event.preventDefault();
            handleImageFiles(files);
            return true;
          }
          return false;
        }
      },
      onUpdate: ({ editor: ed }) => {
        const html = ed.getHTML();
        value = html;
        dispatch('change', html);
      }
    });

    const bumpToolbar = () => {
      toolbarTick += 1;
    };
    editor.on('transaction', bumpToolbar);
    editor.on('selectionUpdate', bumpToolbar);

    return () => {
      editor?.off('transaction', bumpToolbar);
      editor?.off('selectionUpdate', bumpToolbar);
      editor?.destroy();
      editor = null;
    };
  });

  onDestroy(() => {
    editor?.destroy();
  });

  /**
   * @param {FileList | File[] | null | undefined} files
   */
  async function handleImageFiles(files) {
    if (!files?.length || !editor) return;
    const images = Array.from(files).filter((f) => f.type.startsWith('image/'));
    for (const file of images) {
      await insertUploadedImage(file);
    }
  }

  /** @param {File} file */
  async function insertUploadedImage(file) {
    if (!editor) return;
    imageError = '';
    uploadingImage = true;
    try {
      const url = await uploadImage(file);
      if (!url) throw new Error('Image upload failed.');
      editor.chain().focus().setImage({ src: url, alt: '' }).run();
    } catch (e) {
      imageError = e?.message || 'Could not upload image.';
    } finally {
      uploadingImage = false;
    }
  }

  function pickImage() {
    fileInput?.click();
  }

  /** @param {Event} event */
  async function onFileSelected(event) {
    const target = /** @type {HTMLInputElement} */ (event.currentTarget);
    const file = target.files?.[0];
    target.value = '';
    if (file) await insertUploadedImage(file);
  }

  function setLink() {
    if (!editor) return;
    const previous = editor.getAttributes('link').href;
    const url = window.prompt('Link URL', previous || 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }

  /** @param {boolean} active */
  function btnClass(active) {
    return active
      ? 'border-sky-400/50 bg-sky-400/15 text-sky-100'
      : 'border-white/10 bg-ink-950/40 text-bone-200/80 hover:border-white/20 hover:text-bone-50';
  }
</script>

<input
  bind:this={fileInput}
  type="file"
  accept="image/*"
  class="hidden"
  on:change={onFileSelected}
/>

<div class="rich-text-editor border border-white/12 bg-ink-950/60 btn-clip-xs">
  {#if editor}
    {@const _toolbar = toolbarTick}
    <div
      class="flex flex-wrap items-center gap-1 border-b border-white/10 bg-ink-900/80 px-2 py-2"
      role="toolbar"
      aria-label="Formatting"
    >
      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('bold'))}"
        title="Bold"
        on:click={() => editor.chain().focus().toggleBold().run()}
      >
        <span class="font-bold">B</span>
      </button>
      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('italic'))}"
        title="Italic"
        on:click={() => editor.chain().focus().toggleItalic().run()}
      >
        <span class="italic">I</span>
      </button>
      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('underline'))}"
        title="Underline"
        on:click={() => editor.chain().focus().toggleUnderline().run()}
      >
        <span class="underline">U</span>
      </button>
      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('strike'))}"
        title="Strikethrough"
        on:click={() => editor.chain().focus().toggleStrike().run()}
      >
        <span class="line-through">S</span>
      </button>

      <span class="mx-1 h-5 w-px bg-white/10" aria-hidden="true"></span>

      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('heading', { level: 2 }))}"
        title="Heading 2"
        on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>
      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('heading', { level: 3 }))}"
        title="Heading 3"
        on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </button>

      <span class="mx-1 h-5 w-px bg-white/10" aria-hidden="true"></span>

      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('bulletList'))}"
        title="Bullet list"
        on:click={() => editor.chain().focus().toggleBulletList().run()}
      >
        •
      </button>
      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('orderedList'))}"
        title="Numbered list"
        on:click={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1.
      </button>
      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('blockquote'))}"
        title="Quote"
        on:click={() => editor.chain().focus().toggleBlockquote().run()}
      >
        “
      </button>

      <span class="mx-1 h-5 w-px bg-white/10" aria-hidden="true"></span>

      <button
        type="button"
        class="rte-btn {btnClass(editor.isActive('link'))}"
        title="Link"
        on:click={setLink}
      >
        Link
      </button>
      <button
        type="button"
        class="rte-btn {btnClass(false)}"
        title="Insert image"
        disabled={uploadingImage}
        on:click={pickImage}
      >
        {uploadingImage ? '…' : 'Image'}
      </button>
    </div>
  {/if}

  <div bind:this={editorEl} class="rich-text-editor__surface"></div>

  {#if imageError}
    <p class="border-t border-red-400/20 bg-red-400/10 px-4 py-2 text-xs text-red-100">{imageError}</p>
  {/if}
</div>
