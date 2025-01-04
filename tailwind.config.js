/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure it matches your project's file structure
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#0A192F", // Background color
        primarycolor: "#64FFDA", // Primary accent color
        textColor: "#8892B0", // Text color
      },
      animation: {
        "background-position-spin": "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
    },
    screens: {
      // Minimum width breakpoints (mobile-first approach)
      xsm: "350px", // Extra small screens
      xs: "475px", // Small mobile
      sm: "640px", // Small screens (e.g., tablets)
      md: "768px", // Medium screens
      bs: "900px", // Between medium and large (custom)
      lg: "1024px", // Large screens (e.g., desktops)
      xl: "1280px", // Extra large screens
      "2xl": "1536px", // XXL screens

      // Maximum width breakpoints (responsive adjustments for smaller screens)
      "xsm-mx": { max: "349px" }, // Extra small screens
      "xs-mx": { max: "476px" }, // Small mobile
      "sm-mx": { max: "639px" }, // Small screens
      "md-mx": { max: "767px" }, // Medium screens
      "bs-mx": { max: "899px" }, // Between medium and large
      "lg-mx": { max: "1023px" }, // Large screens
      "xl-mx": { max: "1279px" }, // Extra large screens
      "2xl-mx": { max: "1535px" }, // XXL screens
    },
  },
  plugins: [],
};
