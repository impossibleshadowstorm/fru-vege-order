/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      backgroundColor: {
        homeHeaderBg: "var(--home-header-bg)",
        otherHeaderBg: "var(--other-header-bg)",
        headerCtaButtonBg: "var(--header-cta-button-bg)",
        landingSecBg: "var(--landing-sec-bg)",
      },
      textColor: {
        homeHeaderText: "var(--home-header-text)",
        otherHeaderText: "var(--other-header-text)",
      },
      borderColor: {
        homeBorder: "var(--home-header-bg)",
        otherBorder: "var(--other-header-bg)",
      },
    },
  },
  plugins: [],
};
