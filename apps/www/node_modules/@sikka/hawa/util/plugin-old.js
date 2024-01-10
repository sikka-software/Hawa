const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, addBase }) {
  const utilities = {
    ".clickable-link": {
      //   backgroundColor: "red",
      cursor: "pointer",

      color: "hsl(var(--primary) / 0.8)",
      "-webkit-text-decoration-line": "underline",
      "text-decoration-line": "underline",
      "text-underline-offset": "4px",
      "transition-property": "all",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transition-duration": "150ms"

      //   "text-primary/80": "var(--text-primary/80)",
      //   underline: "underline",
      //   "underline-offset-4": "underline-offset-4",
      //   "transition-all": "transition-all",
      //   "&:hover": {
      //     "text-primary": "var(--text-primary)"
      //   }
    },
    ".ddm-w-parent": { width: "var(--radix-dropdown-menu-trigger-width)" }
  };
  const baseStyles = {
    "*": {
      "@apply": "hawa-border-border"
    },

    body: {
      "@apply": "hawa-bg-background hawa-text-foreground",
      "font-feature-settings": '"rlig" 1, "calt" 1'
    }
  };

  addBase(baseStyles);
  addUtilities(utilities);
});
