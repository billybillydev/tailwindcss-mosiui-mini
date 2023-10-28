module.exports = (theme) => ({
  ".checkbox": {
    border: `1px solid ${theme("borderColor.DEFAULT")}`,
    borderRadius: theme("borderRadius.sm"),
  },
  ".checkbox-primary": {
    backgroundColor: theme("accentColor.primary.500"),
  },
  ".checkbox-secondary": {
    backgroundColor: theme("accentColor.secondary"),
  },
  ".checkbox-success": {
    backgroundColor: theme("accentColor.success.500"),
  },
  ".checkbox-danger": {
    backgroundColor: theme("accentColor.danger.500"),
  },
  ".checkbox-warning": {
    backgroundColor: theme("accentColor.warning.500"),
  },
  ".checkbox-info": {
    backgroundColor: theme("accentColor.info.500"),
  },
});
