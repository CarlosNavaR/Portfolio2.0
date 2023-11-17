module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        body: 'rgb(var(--color-bg))',
        'box-bg': 'rgb(var(--color-box))',
        'box-shadow': 'rgb(var(--box-sd))',
        'box-border': 'rgb(var(--box-border))',
        primary: '#1d4ed8',
        'heading-1': 'rgb(var(--heading-1))',
        'heading-2': 'rgb(var(--heading-2))',
        'heading-3': 'rgb(var(--heading-3))',
        accent: 'rgb(var(--accent))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
