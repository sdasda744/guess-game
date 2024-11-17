/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '480px', // Custom "sm" breakpoint starting at 480px
        'md': '768px', // Default Tailwind md breakpoint
        'lg': '1024px', // Default Tailwind lg breakpoint
        'xl': '1280px', // Default Tailwind xl breakpoint
        '2xl': '1536px', // Default Tailwind 2xl breakpoint
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', "serif"],
        notoSansMyanmar :['"Noto Sans Myanmar"', "sans-serif"]
      },

      animation: {
        bounce: "bounce 5s infinite",
        spin: "spin 3s linear infinite",
        pulse: "pulse 2s infinite",
        wobble: "wobble 1s infinite",
        zoom: "zoom 3s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 50, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        wobble: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "75%": { transform: "translateX(-10px)" },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
}