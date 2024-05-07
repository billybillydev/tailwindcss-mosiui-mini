/** @type {import("tailwindcss/types/config").CSSRuleObject} */
module.exports = (theme) => ({
  ".input": {
    width: "100%",
    padding: `${theme("spacing.1")} ${theme("spacing.2")}`,
    fontSize: theme("fontSize.base"),
    color: theme("textColor.slate.700"),
    border: `1px solid ${theme("borderColor.slate.400")}`,
    borderRadius: theme("borderRadius.DEFAULT"),
    backgroundColor: "#ffff",
  },
  ".input-primary": {
    "&:focus": {
      border: `2px solid ${theme("ringColor.primary.500")}`,
    },
  },
  ".input-secondary": {
    "&:focus": {
      border: `2px solid ${theme("ringColor.secondary.500")}`,
    },
  },
  ".input-success": {
    "&:focus": {
      border: `2px solid ${theme("ringColor.success.500")}`,
    },
  },
  ".input-danger": {
    "&:focus": {
      border: `2px solid ${theme("ringColor.danger.500")}`,
    },
  },
  ".input-warning": {
    "&:focus": {
      border: `2px solid ${theme("ringColor.warning.500")}`,
    },
  },
  ".input-info": {
    "&:focus": {
      border: `2px solid ${theme("ringColor.info.500")}`,
    },
  },
});
