import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation:{
        'bounce-slow': 'bounce 2s infinite',
        'bounce-r-slow': 'bounce 1.8s infinite'
      },
      keyframes: {
        bounce: {
          '0% 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-20px)'}
      }}
    },
  },
  plugins: [],
};
export default config;
