module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C10104", // Global / Primary
        secondary: "#FFA6D2", // Global / Secondary
        accent: "#FF6666", // Global / Accent
        textPrimary: "#E2EBED", // Text / Primary
        textSecondary: "#B4C0C2", // Text / Secondary
        textTertiary: "#7F8A8C", // Text / Tertiary
        textAccent: "#FF6666", // Text / Accent
        textAccentHover: "#FFC7C7", // Text / Accent Hover
        textOnPrimary: "#FFFFFF", // Text / On Primary
        textOnSecondary: "#FFFFFF", // Text / On Secondary
        textOnAccent: "#000000", // Text / On Accent
        textInverse: "#000D0F", // Text / Inverse
        textError: "#E50102", // Text / Error
        background: "#000D0F", // Surface I Background
        surfaceAccent: "var(--surfaceAccent)", // Surface / Accent
        onBackground: "var(--onBackground)", // Surface / On Background
        // onBackground: "#0E1517", // Surface / On Background
        // surfaceAccent: "#2C3233", // Surface / Accent
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      fontSize: {
        "2xl": ["76px", "80px"], // H1 Heading
        xl: ["48px", "56px"], // H2 Heading
        lg: ["40px", "48px"], // H3 Heading
        md: ["32px", "40px"], // H4 Heading
        sm: ["24px", "32px"], // H5 Heading
        xs: ["20px", "28px"], // H6 Heading
        // For display-3 (H3 Display Heading)
        "display-3": ["56px", "64px"], // Default size for desktops
        "display-3-tablet": ["48px", "56px"], // Adjusted size for tablets
        "display-3-mobile": ["40px", "48px"], // Adjusted size for mobile devices
        "display-3-small-mobile": ["32px", "40px"], // Adjusted size for small mobile devices

        // For display-2 (H2 Display Heading)
        "display-2": ["49px", "100px"], // Default size for desktops
        "display-2-tablet": ["40px", "70px"], // Adjusted size for tablets
        "display-2-mobile": ["32px", "60px"], // Adjusted size for mobile devices
        "display-2-small-mobile": ["28px", "50px"], // Adjusted size for small mobile devices

        // For display-1 (H1 Display Heading)
        "display-1": ["120px", "124px"], // Default size for desktops
        "display-1-tablet": ["100px", "110px"], // Adjusted size for tablets
        "display-1-mobile": ["80px", "90px"], // Adjusted size for mobile devices
        "display-1-small-mobile": ["60px", "70px"], // Adjusted size for small mobile devices
        //
        "p-subheading": ["12px", "12px"], // P Subheading
        "p-xl": ["24px", "32px"], // P Text XL
        "p-lg": ["20px", "28px"], // P Text LG
        "p-md": ["16px", "24px"], // Text MD
        "p-sm": ["14px", "22px"], // Text SM
        "p-xs": ["12px", "20px"], // Text XS
        "code-sm": ["14px", "160px"], // Style Guide
      },
      letterSpacing: {
        wider: "0.15em",
      },
      screens: {
        desktop: { min: "1200px" },
        tablet: { min: "811px", max: "1199px" },
        mobile: { max: "810px" },
        "small-mobile": { max: "480px" },
      },

      keyframes: {
        colorExpand: {
          "0%": {
            background:
              "radial-gradient(circle at center bottom, var(--onBackground) 0%, var(--surfaceAccent) 0%)",
          },
          "100%": {
            background:
              "radial-gradient(circle at center bottom, var(--onBackground) 100%, var(--onBackground) 100%)",
          },
        },
      },
      animation: {
        colorExpand: "colorExpand 1s forwards",
      },
    },
  },
  plugins: [],
};
