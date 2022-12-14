/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        light: {
          primary: '#175cf9',
          secondary: '#007eff',
          tertiary: '#0037ff',
          gray: '#fafafa',
          grayDarker: '#e5e5e5',
          text: {
            primary: '#585b63',
          },
          error: {
            main: '#FF4D49',
            background: '#ffe9e9',
            content: '#e64542',
          },
          warning: {
            main: '#FDB528',
          },
        },

        dark: { 90: '#1e1e27' },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
      width: {
        sidebar: '120px',
      },
      padding: {
        sidebar: '120px',
      },
      borderRadius: {
        normal: '6px',
      },
      boxShadow: {
        forfun: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        normal: '4px',
      },
      borderColor: {
        light: { primary: '#63b3ed' },
      },
      fontFamily: {
        table: ['Gelasio', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
