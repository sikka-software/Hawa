import React from "react";
import { Box } from "../../layout";
import { HawaTextField, ActionButton, HawaAlert } from "../../ui";

export const ResetPasswordForm = (props) => {
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        {props.error && (
          <HawaAlert
            themeType={props.theme}
            text="This is a reset password alert"
            severity="error"
          />
        )}
        <HawaTextField themeType={props.theme} type="text" inputLabel="Email" />
        <ActionButton themeType={props.theme} last text="Reset Password" />
      </Box>
    </Box>
  );
};
