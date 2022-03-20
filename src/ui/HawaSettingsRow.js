import React, { useContext } from "react";

import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import { Box } from "../layout";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

export const HawaSettingsRow = (props) => {
  const { hawaTheme, themeName } = useContext(ThemeProvider);
  const currentTheme = Object.keys(hawaTheme.settingsRow).find(
    (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  );
  let settingsRowStyle = {};

  if (currentTheme) {
    settingsRowStyle = {
      ...hawaTheme.settingsRow[currentTheme],
      margin: props.last ? 0 : hawaTheme.settingsRow[currentTheme].margin,
      marginTop: props.last ? hawaTheme.settingsRow[currentTheme].margin * 2 : 0
    };
  } else {
    settingsRowStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#F5F5F5",
      margin: 0,

      backgroundColor: "lightGrey",
      color: "black",
      padding: 10
    };
  }

  return (
    <Box noColor>
      {props.settingsType === "checkbox" && (
        <div style={{ ...settingsRowStyle }}>
          Checkbox Label <Checkbox />
        </div>
      )}
      {props.settingsType === "text" && (
        <div style={{ ...settingsRowStyle }}>
          Text Label{" "}
          <TextField
            InputProps={{
              style: {
                ...hawaTheme.inputFields[currentTheme],
                // borderRadius: 0,
                // padding: 0,
                // backgroundColor: "white",
                height: 40
              }
            }}
            style={{
              padding: 0
            }}
            placeholder="test"
          />
        </div>
      )}
    </Box>
  );
};

HawaSettingsRow.propTypes = {
  type: PropTypes.oneOf(["text", "number", "password"]),
  helperText: PropTypes.string
};
