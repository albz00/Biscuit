/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      cursor: {
        /* Match app.css / html — plane “pointer” for Tailwind’s cursor-pointer */
        pointer: "url('/cursor-plane.png') 3 2, auto"
      },
      colors: {
        ink: {
          950: '#070E1C',
          900: '#0C172B',
          800: '#12203A',
          700: '#1A2C4C',
          600: '#233C67',
          500: '#2E4E84'
        },
        bone: {
          50: '#FBFAF7',
          100: '#F5F3EC',
          200: '#EAE6D8',
          300: '#D9D3BD'
        },
        sky: {
          100: '#E4F0FB',
          200: '#C3DDF5',
          300: '#9BC5ED',
          400: '#5FA8E6',
          500: '#2F85CE',
          600: '#1F63A3',
          700: '#154879',
          800: '#0D3055',
          900: '#081F3C'
        },
        signal: {
          orange: '#F6A43A'
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
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.6)',
        'sky-glow': '0 4px 28px -6px rgba(95, 168, 230, 0.5), inset 0 1px 0 rgba(255,255,255,0.25)'
      },
      backgroundImage: {
        'gradient-radial-sky': 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(95, 168, 230, 0.22), transparent 55%)',
        'gradient-radial-cool': 'radial-gradient(ellipse 90% 60% at 80% 10%, rgba(47, 133, 206, 0.32), transparent 50%)',
        'gradient-page': 'linear-gradient(165deg, #0d1a30 0%, #081428 38%, #11213c 72%, #0a1628 100%)',
        'gradient-sky-btn': 'linear-gradient(155deg, #8ec3ee 0%, #5fa8e6 42%, #1f63a3 100%)',
        'gradient-sky-btn-hover': 'linear-gradient(155deg, #a9d3f3 0%, #73b4ea 45%, #2f85ce 100%)',
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
