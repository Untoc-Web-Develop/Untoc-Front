/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slider: {
          '0%': {
            transform: 'translateX(0px)',
          },
          '100%': {
            transform: 'translateX(-1500px)',
          },
        },
      },
      animation: {
        slider: 'slider 15s linear infinite',
      },
      colors: {
        error: '#FF574D',
        yellowPoint: '#FFBD00',
        yellowBackground: '#FFF6E9',
        placeHolder: '#A2A9B0',
        borderColor: '#DDE1E6',
        focusColor: '#F2F5FF',
        bluePoint: '#424F70',
        grayDark: '#5C5F64',
        grayPoint: '#EBEBEB',
        GrayLight: '#F8F8F9',
        GrayLight50: '#FAFAFA',
        AlertBg: '#FFE8E7',
      },
      height: {
        content: 'calc(100vh - 2.5rem)',
      },
      backgroundImage: {
        bgPattern1: "url('asset/Main/bgPattern1.png')",
      },
    },
  },
  plugins: [],
};
