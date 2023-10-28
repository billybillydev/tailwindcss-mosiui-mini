export const linkClass = (theme) => ({
  ".link": {
    color: theme("textColor.slate.500"),
    fontWeight: theme("fontWeight.medium"),
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: theme("textColor.current"),
      textDecorationThickness: "2px",
      textUnderlineOffset: "4px",
      cursor: "pointer",
    },
  },
  ".link-primary": {
    color: theme("textColor.primary.500"),
  },
  ".link-secondary": {
    color: theme("textColor.secondary"),
  },
  ".link-success": {
    color: theme("textColor.success.500"),
  },
  ".link-danger": {
    color: theme("textColor.danger.500"),
  },
  ".link-info": {
    color: theme("textColor.info.500"),
  },
  ".link-warning": {
    color: theme("textColor.warning.500"),
  },
});
