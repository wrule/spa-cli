/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) translateY(0) rotate(0deg)',
          },
          '50%': { 
            transform: 'translate(-50%, -50%) translateY(-20px) rotate(5deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
