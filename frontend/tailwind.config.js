module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        // class="shadow-red"
        red: "0 1px 3px 0 rgba(30, 0, 0, 0.1), 0 1px 2px 0 rgba(30, 0, 0, 0.06)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp")
  ],
}
