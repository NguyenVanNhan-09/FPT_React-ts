const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "custom-gradient":
               "linear-gradient(to top left, rgba(144, 238, 144, 0.5), rgba(255, 255, 255, 0.5))",
         },
      },
   },
   plugins: [],
});
