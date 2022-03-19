import React, { useContext } from "react";

import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import { Box } from "../layout";

export const HawaSettingsRow = (props) => {
  const { hawaTheme, themeName } = useContext(ThemeProvider);
  const currentTheme = Object.keys(hawaTheme.actionButton).find(
    (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  );
  let textFieldStyle = {};

  if (currentTheme) {
    textFieldStyle = {
      ...hawaTheme.inputFields[currentTheme],
      margin: props.last ? 0 : hawaTheme.inputFields[currentTheme].margin,
      marginTop: props.last ? hawaTheme.inputFields[currentTheme].margin * 2 : 0
    };
  } else {
    textFieldStyle = {
      backgroundColor: "white"
    };
  }

  return <Box>test</Box>;
};

HawaSettingsRow.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  helperText: PropTypes.string
};
