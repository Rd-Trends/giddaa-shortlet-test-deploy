import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-red-hat-display)"], // red display, our primary default font
        secondary: ["var(--font-millik)"],
      },
      fontSize: {
        "display-xl": ["60px", "60px"],
        "heading-1": ["48px", "48px"],
        "heading-2": ["36px", "44px"],
        "heading-3": ["30px", "30px"],
        "heading-4": ["24px", "24px"],
        "body-xl": ["20px", "28px"],
        "body-lg": ["18px", "26px"],
        "body-md": ["16px", "26px"],
        "body-sm": ["13px", "23px"],
        "body-xs": ["12px", "22px"],
        "body-subtext": ["11px", "21px"],
        "body-tiny": ["10px", "11px"],
      },
      container: {
        center: true,
        padding: {
          "2xl": "40px",
        },
        screens: {
          "2xl": "1536px",
        },
      },
      colors: {
        primary: "#335F32",
        secondary: "#0A7E32",
        "accent-green": "#EAFFEA",
        "off-white": "#FCFCFC",
        "mid-grey": "#D9D9D9",
        "charcoal-grey": "#4B4B4B",
        "dark-grey": "#979797",
        "feint-grey": "#F9FAFB",
        "light-grey": "#F0F0F0",
        warning: "#F7B11C",
        "warning-light": "#FFEDC7",
        info: "#56CCF2",
        "info-light": "#CFF3FF",
        danger: "#F22424",
        "danger-light": "#FFEDED",
        "dark-red": "#C90000",
        cream: "#f9f9f9",
        background: "#FFFEED",
      },
      backgroundImage: {
        "primary-gradient": `linear-gradient(270deg, #335F32 42%, #EAA315 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
        "secondary-gradient": `linear-gradient(90deg, #FFFFFB 0%, #F6FDF4 50%, #FFEDCB 100%)`,
        "secondary-gradient-alt": `linear-gradient(314.28deg, #FFFFFB 28.4%, #F6FDF4 60.34%, #FFEDCB 81.21%)`,
        "tertiary-gradient": `linear-gradient(174.47deg, rgba(255, 255, 246, 0.6) 27.35%, rgba(252, 162, 17, 0.06) 62.37%, rgba(51, 95, 50, 0.12) 88.97%)`,
      },
      animation: {
        slideUp: "slideUp 1.5s cubic-bezier(1, -0.16, 0, 0.94) forwards",
        slideDown: "slideDown 1.5s cubic-bezier(1, -0.16, 0, 0.94) forwards",
        scroll: "scroll 15s linear infinite",
        "bouncing-loader": "bouncing-loader 0.3s infinite alternate",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(0%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(100%)",
            opacity: "100%",
          },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bouncing-loader": {
          to: {
            transform: "translate3d(0, -8px, 0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
