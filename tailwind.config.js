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
        InfinitySlider: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '50%': {
            transform: 'translateX(-100%)',
          },
          '50.1%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        InfinitySlider_copy: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '50%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        InfinitySlider: 'InfinitySlider 10s infinite linear normal none running',
        InfinitySlider_copy: 'InfinitySlider_copy 10s linear infinite',
      },
      height: {
        content: 'calc(100vh - 2.5rem)',
      },
    },
  },
  plugins: [],
};
