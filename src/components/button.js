export const buttonClass = (theme) => ({
  btn: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outlineStyle: "none",
    color: "#ffffff",
    transition: "all",
    transitionDuration: "250ms",
    backgroundColor: theme("backgroundColor.slate.500"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.slate.700"),
    },
    "&:disabled": {
      color: theme("textColor.slate.500"),
      backgroundColor: theme("backgroundColor.slate.100"),
      opacity: 0.75,
      cursor: "not-allowed",
    },
  },
  ".btn-outlined": {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outlineStyle: "none",
    color: theme("textColor.slate.800"),
    transitionProperty: "color",
    "&:hover": {
      backgroundColor: theme("backgroundColor.slate.300"),
    },
    "&:disabled": {
      color: theme("textColor.slate.500"),
      backgroundColor: theme("backgroundColor.slate.100"),
      opacity: 0.75,
      cursor: "not-allowed",
    },
  },
  ".btn-inversed": {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outlineStyle: "none",
    color: theme("textColor.slate.500"),
    transitionProperty: "color",
    backgroundColor: "#ffff",
    border: `1px solid ${theme("borderColor.slate.500")}`,
    "&:hover": {
      backgroundColor: theme("backgroundColor.slate.700"),
      color: theme("textColor.slate.200"),
      border: `1px solid ${theme("borderColor.slate.700")}`,
    },
    "&:disabled": {
      color: theme("textColor.slate.500"),
      backgroundColor: theme("backgroundColor.slate.300"),
      opacity: 0.75,
      cursor: "not-allowed",
    },
  },
  ".btn-primary": {
    color: "#ffffff",
    backgroundColor: theme("backgroundColor.primary.500"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.primary.700"),
    },
  },
  ".btn-primary-outlined": {
    color: theme("textColor.primary.700"),
    backgroundColor: theme("backgroundColor.primary.200"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.primary.300"),
    },
  },
  ".btn-primary-inversed": {
    color: theme("textColor.primary.500"),
    border: `1px solid ${theme("borderColor.primary.500")}`,
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: theme("backgroundColor.primary.600"),
      border: `1px solid transparent`,
      color: "#ffff",
    },
  },
  ".btn-secondary": {
    color: "#ffffff",
    backgroundColor: theme("backgroundColor.secondary"),
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: theme("backgroundColor.transparent"),
      color: theme("textColor.secondary"),
      border: `1px solid ${theme("borderColor.secondary")}`,
    },
  },
  ".btn-secondary-outlined": {
    color: theme("textColor.secondary"),
    backgroundColor: theme("backgroundColor.slate.200"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.slate.300"),
    },
  },
  ".btn-secondary-inversed": {
    color: theme("textColor.secondary"),
    border: `1px solid ${theme("borderColor.secondary")}`,
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: theme("backgroundColor.secondary"),
      color: "#ffff",
    },
  },
  ".btn-success": {
    color: "#ffffff",
    backgroundColor: theme("backgroundColor.success.500"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.success.700"),
    },
  },
  ".btn-success-outlined": {
    color: theme("textColor.success.700"),
    backgroundColor: theme("backgroundColor.success.200"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.success.300"),
    },
  },
  ".btn-success-inversed": {
    color: theme("textColor.success.500"),
    border: `1px solid ${theme("borderColor.success.500")}`,
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: theme("backgroundColor.success.600"),
      color: "#ffff",
      border: `1px solid transparent`,
    },
  },
  ".btn-danger": {
    color: "#ffffff",
    backgroundColor: theme("backgroundColor.danger.500"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.danger.700"),
    },
  },
  ".btn-danger-outlined": {
    color: theme("textColor.danger.700"),
    backgroundColor: theme("backgroundColor.danger.200"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.danger.300"),
    },
  },
  ".btn-danger-inversed": {
    color: theme("textColor.danger.500"),
    border: `1px solid ${theme("borderColor.danger.500")}`,
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: theme("backgroundColor.danger.600"),
      color: "#ffff",
      border: `1px solid transparent`,
    },
  },
  ".btn-info": {
    color: "#ffffff",
    backgroundColor: theme("backgroundColor.info.500"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.info.700"),
    },
  },
  ".btn-info-outlined": {
    color: theme("textColor.info.700"),
    backgroundColor: theme("backgroundColor.info.200"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.info.300"),
    },
  },
  ".btn-info-inversed": {
    color: theme("textColor.info.500"),
    border: `1px solid ${theme("borderColor.info.500")}`,
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: theme("backgroundColor.info.600"),
      color: "#ffff",
      border: `1px solid transparent`,
    },
  },
  ".btn-warning": {
    color: "#ffffff",
    backgroundColor: theme("backgroundColor.warning.500"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.warning.700"),
    },
  },
  ".btn-warning-outlined": {
    color: theme("textColor.warning.700"),
    backgroundColor: theme("backgroundColor.warning.200"),
    "&:hover": {
      backgroundColor: theme("backgroundColor.warning.300"),
    },
  },
  ".btn-warning-inversed": {
    color: theme("textColor.warning.500"),
    border: `1px solid ${theme("borderColor.warning.500")}`,
    backgroundColor: "#ffff",
    "&:hover": {
      backgroundColor: theme("backgroundColor.warning.600"),
      color: "#ffff",
      border: `1px solid transparent`,
    },
  },
});