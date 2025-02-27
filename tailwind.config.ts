import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3D5EE1",
          dark: "#3154DF",
          light: "#E7F1FC",
        },
        secondary: {
          DEFAULT: "#EAB300",
          light: "#FEF8EA",
        },
        success: {
          DEFAULT: "#1ABE17",
          light: "#E8F9E8",
        },
        warning: {
          DEFAULT: "#E82646",
          light: "#FDE9ED",
        },
        info: {
          DEFAULT: "#05C3FB",
          light: "#E8FCFF",
        },
        neutral: { DEFAULT: "#E9EDF4", light: "#F3F4F6", dark: "#DFE5EF" },

        text_neutral: {
          DEFAULT: "#6A7287",
          dark: "#515B73",
        },

        text_primary: {
          DEFAULT: "#202C4B",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
