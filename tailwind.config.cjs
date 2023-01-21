/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                home: "./src/assets/movie-mosaic.jpg",
            },
        },
    },
    plugins: [],
};
