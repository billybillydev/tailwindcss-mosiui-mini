const plugin = require("tailwindcss/plugin");
const typographyClass = require("./base/typography");
const buttonClass = require("./components/button");
const inputClass = require("./components/input");
const checkboxClass = require("./components/checkbox");
const linkClass = require("./components/link");

module.exports = {
  content: [],
  safelist: [{ pattern: /(size|btn)-./ }],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        ...colors,
        primary: colors.indigo,
        secondary: colors.black,
        success: colors.green,
        danger: colors.red,
        info: colors.blue,
        warning: colors.yellow,
      }),
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [
    plugin(function ({
      addComponents,
      addBase,
      addUtilities,
      matchUtilities,
      theme,
    }) {
      addBase(typographyClass(theme));
      addComponents({
        ...buttonClass(theme),
        ...inputClass(theme),
        ...checkboxClass(theme),
        ...linkClass(theme),
      });
      addUtilities({
        ".flex-center-middle": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      });
      matchUtilities(
        {
          size: (value) => ({
            width: value,
            height: value,
          }),
        },
        {
          values: theme("spacing"),
        }
      );
    }),
  ],
};
