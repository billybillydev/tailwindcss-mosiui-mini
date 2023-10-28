import plugin from "tailwindcss/plugin";
import { typographyClass } from "./base/typography";
import { buttonClass } from "./components/button";
import { inputClass } from "./components/input";
import { checkboxClass } from "./components/checkbox";
import { linkClass } from "./components/link";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  pattern: /([a-zA-Z]+)-./,
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
    plugin(function ({ addComponents, addBase, addUtilities, theme }) {
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
    }),
  ],
};
