/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkBlue : "#1A5DAB",
        lightBlue : "#4FC3F7",
        
        mainBlue : "#F0F4F8",
        header : "#E6F4F1",
        icons : "#007B7F",
        headings : "#003366",
        buttons : "#48CAE4",
        text : "#333333",

        lightGreen : "#4CAF50",
        mainWhite : "#FFFFFF",
        secondaryGray : "#F5F5F5",
      }
    },
  },
  plugins: [],
})

// #071f47