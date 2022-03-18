import React from "react";
import { HawaInputLabel, ActionButton } from "../../ui";
import { Box } from "../../layout";

export const UserProfile = (props) => {
  return (
    <Box maxWidth={400}>
      <HawaInputLabel type="text" inputLabel="First Name" />
      <HawaInputLabel type="text" inputLabel="Last Name" />
      <HawaInputLabel type="email" inputLabel="Email" />
      <HawaInputLabel type="password" inputLabel="Password" />
      <ActionButton last text="Update Account" />
    </Box>
  );
};
