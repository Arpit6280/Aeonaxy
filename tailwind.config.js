/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://brilliant.org/site_media/version-b3d2991c3f/images/company/testimonials/testimonials-liftoff-2x.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      backgroundPosition: {
        "bottom-40": "40px bottom",
      },
      backgroundSize: {
        "30%": "30%",
      },
    },
  },
  plugins: [],
};
