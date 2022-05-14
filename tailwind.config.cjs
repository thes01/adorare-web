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
              DEFAULT: '6rem',
              sm: '8rem',
              md: '12rem',
            //   xl: '5rem',
            //   '2xl': '6rem',
            },
        }, 
        colors: {
            'navy-blue': '#1c354b',
        },   
    },
    plugins: [
        // https://www.npmjs.com/package/tailwind-scrollbar
        require('tailwind-scrollbar'),
        require('flowbite/plugin')
    ]
};