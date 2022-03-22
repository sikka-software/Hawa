import { HawaSettingsRow } from "../../elements";
import { Button, Container } from "@mui/material";

export const UserSettingsForm = (props) => {
  return (
    <Container maxWidth="xs">
      {props.children}
      <Button type="submit" fullWidth variant="last">
        Save Settings
      </Button>
    </Container>
  );
};
