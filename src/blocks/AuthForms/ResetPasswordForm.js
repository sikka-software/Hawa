import React from "react";
import { Box } from "../../layout";
import { HawaTextField, HawaInputLabel, ActionButton } from "../../ui";
export const ResetPasswordForm = (props) => {
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        <HawaTextField themeType={props.theme} type="text" inputLabel="Email" />
        <ActionButton themeType={props.theme} last text="Reset Password" />
      </Box>
    </Box>
  );
};
