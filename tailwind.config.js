/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      cursor: {
        /* Match app.css / html: plane pointer for Tailwind cursor-pointer */
        pointer: "url('/cursor-plane.png') 9 5, auto"
      },
      colors: {
        ink: {
          950: '#0c1629',
          900: '#142642',
          800: '#1c3558',
          700: '#27456e',
          600: '#335783',
          500: '#4a6f9e'
        },
        bone: {
          50: '#FBFAF7',
          100: '#F5F3EC',
          200: '#EAE6D8',
          300: '#D9D3BD'
        },
        sky: {
          50: '#F4FAFE',
          100: '#ECF5FD',
          200: '#D2E8FA',
          300: '#B0D9F5',
          400: '#6EB8EC',
          500: '#3D93E3',
          600: '#2580C8',
          700: '#1B679F',
          800: '#134E78',
          900: '#0C3554'
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        hair: '0.02em',
        mega: '0.28em'
      },
      borderRadius: {
        hair: '2px'
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.6)'
      },
      backgroundImage: {
        'gradient-radial-sky':
          'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(130, 205, 255, 0.26), transparent 56%)',
        'gradient-radial-cool':
          'radial-gradient(ellipse 90% 60% at 80% 10%, rgba(70, 130, 205, 0.28), transparent 50%)',
        'gradient-page':
          'linear-gradient(165deg, #142642 0%, #0c1629 36%, #244064 70%, #081220 100%)',
        'gradient-sky-btn': 'linear-gradient(155deg, #f0f7ff 0%, #9bcff2 38%, #4a9adb 100%)',
        'gradient-sky-btn-hover': 'linear-gradient(155deg, #f7fbff 0%, #b8dff9 40%, #62afe8 100%)',
        'gradient-ghost': 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-nav-pill': 'linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 100%)'
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        drift: 'drift 18s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-2%, 1%, 0) scale(1.04)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
};
