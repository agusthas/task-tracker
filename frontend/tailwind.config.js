module.exports = {
  mode: 'jit',
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    safelist: [],
    content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
  },
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '10px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'task-active': 'rgba(230,57,70,1)',
        'task-red': 'rgba(255,0,0,1)',
        'blue-sidebar': 'rgba(69,123,157,1)',
        'blue-main': 'rgba(29,53,87,1)',
        completed: 'rgba(128,128,128,1)',
        input: 'rgba(0,0,0,0.300)',
        'input-focus': 'rgba(0,0,0,0.5)',
        placeholder: 'rgba(255,255,255,0.5)',
        white: 'rgba(255,255,255,1)',
        black: 'rgba(0,0,0,1)',
      },
      spacing: {
        4: '15px',
      },
      fontSize: {
        icon: '17px',
        'icon-lg': '22px',
      },
      boxShadow: {
        custom: '0 5px 20px rgba(0,0,0,0.4)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-15px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down .5s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
