/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      sans: ["Noto Color Emoji","Segoe UI Emoji","Apple Color Emoji", 'system-ui',' sans-serif',   "Segoe UI Symbol", ],
// font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
// font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

    },
  },
  plugins: [],
}

