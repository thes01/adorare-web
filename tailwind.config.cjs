module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    plugins: [
        // https://www.npmjs.com/package/tailwind-scrollbar
        require('tailwind-scrollbar')
    ]
};