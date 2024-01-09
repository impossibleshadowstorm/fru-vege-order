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
      fontFamily: {
        rajdhani: ["Rajdhani"],
      },
      backgroundColor: {
        homeHeaderBg: "var(--home-header-bg)",
        fullBg: "var(--full-bg)",
        formBg: "var(--form-bg)",
        otherHeaderBg: "var(--other-header-bg)",
        headerCtaButtonBg: "var(--header-cta-button-bg)",
        hoverHeaderCtaButtonBg: "var(--hover-header-cta-button-bg)",
        otherHeaderCtaButtonBg: "var(--other-header-cta-button-bg)",
        landingSecBg: "var(--landing-sec-bg)",
        boxBg: "var(--box-bg)",
        hoverArrowBg: "var(--hover-arrow-bg)",
        activeInputBg: "var(--active-input-field)",
        
      },
      dropdownBackgroundColor: {
        bekarcolor: "var(--dropd-bg)",
      },
      textColor: {
        homeHeaderText: "var(--home-header-text)",
        otherHeaderText: "var(--other-header-text)",
        textColor: "var(--text-color)",
        otherTextColor: "var(--other-text-color)",
        hoverTextColor: "var(--hover-text-color)",
        otherHoverTextColor: "var(--other-hover-text-color)",
        starColor: "var(--star-text-color)",
        textColorBlack : "var(--text-color-white)",
        textColorWhite: "var(--text-color-black)",
        salaceTextColor: "var(--salace-color)",
      },
      borderColor: {
        homeBorder: "var(--border-color)",
        otherBorder: "var(--other-header-bg)",
      },
      outlineColor: {
        greenBorder: "var(--input-outline-color)",
      },
    },
  },
  plugins: [],
};
