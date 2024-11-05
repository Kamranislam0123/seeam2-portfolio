/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['var(--font-poppins)'],
        'solenoidal': ['var(--font-solenoidal)'],
        'franie': ['var(--font-franie)'],
      },
      colors: {
        primary: '#DAC5A7',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
        'franie-light': 300,
      },
      screens: {
        'xs': '480px', // Custom screen size
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add more custom sizes as needed
      },
    },
  },
  plugins: [],
};
