import React, { useContext } from "react";

import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import { Box } from "../layout";
import { Checkbox } from "@mui/material";
import { HawaTextField } from "./HawaTextField";

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
          Checkbox Label{" "}
          <HawaTextField
            name="password"
            placeholder="Enter password"
            type="password"
            inputLabel="Password"
            // startAdornment={
            //   <InputAdornment position="start">
            //     <PasswordIcon />
            //   </InputAdornment>
            // }
            rules={{
              required: "Password is rquired"
            }}
            // helperText={errors.password?.message}
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
