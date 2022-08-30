module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['"Nunito Sans"']
        },
        container: {
            padding: {
              DEFAULT: '3rem',
              sm: '4rem',
              md: '4rem',
              lg: '8rem',
              xl: '12rem',
            //   '2xl': '6rem',
            },
        }, 
        colors: {
            'navy-blue': '#1c354b',
            'gray-blue': '#9db1b8',
            'beige': '#d6c3b5'
        },   
    },
    plugins: [
        // https://www.npmjs.com/package/tailwind-scrollbar
        require('tailwind-scrollbar'),
        require('flowbite/plugin')
    ]
};