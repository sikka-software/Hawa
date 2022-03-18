import React, { useContext } from "react";
import { Box } from "../../layout";
import { ThemeProvider } from "../../themes/HawaProvider";
import { ActionButton, HawaTextField, HawaAlert } from "../../ui";
export const NewPasswordForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        {props.error && (
          <HawaAlert
            themeType={props.theme}
            text="This is a new password alert"
            severity="error"
          />
        )}
        <HawaTextField
          themeType={props.theme}
          type="password"
          inputLabel="Password"
        />
        <HawaTextField
          themeType={props.theme}
          type="password"
          inputLabel="Confirm Password"
        />
        <ActionButton themeType={props.theme} last text="Reset Password" />
      </Box>
    </Box>
  );
};
