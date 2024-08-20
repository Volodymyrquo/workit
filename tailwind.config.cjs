const  plugin  = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            fontFamily: {
                fraunces: ['Fraunces', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
            colors: {
                darkPurple: '#24053E',
                eucaplyptus: '#44FFA1',
                davysGrey: '#584D62',
                ghostWhite: '#FCF8FF',
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('hover', [
                '@media (hover: hover) { &:hover }',
                '@media (hover: none) { &:active }',
            ]);
        }),
    ],
};
