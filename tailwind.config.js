/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
        grayLight: '#F8F8F9',
        grayLight50: '#FAFAFA',
        alertBg: '#FFE8E7',
      },
      backgroundImage: {
        backgroundImage: "url('asset/main/mainBackGround.jpg')",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
      },
      height: {
        content: 'calc(100vh - 2.5rem)',
      },
    },
  },
  plugins: [],
};
