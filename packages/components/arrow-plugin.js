const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, e, theme }) => {
  const arrows = theme("arrows");

  if (!arrows) {
    console.warn("No arrows found in theme configuration.");
    return;
  }

  const utilities = Object.entries(arrows).map(
    ([key, { borderColor, backgroundColor, size, offset, borderWidth }]) => {
      const commonStyles = {
        content: '""',
        position: "absolute",
        borderTop: `${size}px solid transparent`,
        borderRight: `${size}px solid transparent`,
        borderBottom: `${size}px solid transparent`,
        borderLeft: `${size}px solid transparent`,
      };

      return {
        [`.${e(`arrow-${key}`)}`]: {
          "&-top": {
            position: "relative",
            "&:before, &:after": {
              ...commonStyles,
              left: `${offset}px`,
              top: `-${size * 2}px`,
              borderBottom: `${size}px solid ${borderColor}`,
            },
            "&:after": {
              borderBottom: `${size}px solid ${backgroundColor}`,
              top: `-${2 * size - borderWidth}px`,
            },
          },
          "&-right": {
            position: "relative",
            "&:before, &:after": {
              ...commonStyles,
              top: `${offset}px`,
              right: `-${size * 2}px`,
              borderLeft: `${size}px solid ${borderColor}`,
            },
            "&:after": {
              borderLeft: `${size}px solid ${backgroundColor}`,
              right: `-${2 * size - borderWidth}px`,
            },
          },
          "&-bottom": {
            position: "relative",
            "&:before, &:after": {
              ...commonStyles,
              left: `${offset}px`,
              bottom: `-${size * 2}px`,
              borderTop: `${size}px solid ${borderColor}`,
            },
            "&:after": {
              borderTop: `${size}px solid ${backgroundColor}`,
              bottom: `-${2 * size - borderWidth}px`,
            },
          },
          "&-left": {
            position: "relative",
            "&:before, &:after": {
              ...commonStyles,
              top: `${offset}px`,
              left: `-${size * 2}px`,
              borderRight: `${size}px solid ${borderColor}`,
            },
            "&:after": {
              borderRight: `${size}px solid ${backgroundColor}`,
              left: `-${2 * size - borderWidth}px`,
            },
          },
        },
      };
    },
  );

  addUtilities(utilities);
});
