import { HawaTextField, ActionButton } from "../../ui";
import { Box } from "../../layout";
import { Button, Container } from "@mui/material";

export const UserSettingsForm = (props) => {
  return (
    <Container maxWidth="xs">
      <HawaTextField type="text" label="First Name" />
      <HawaTextField type="text" label="Last Name" />
      <HawaTextField type="email" label="Email" />
      <HawaTextField type="password" label="Password" />
      <Button type="submit" fullWidth variant="last">
        Save Settings
      </Button>
    </Container>
  );
};
