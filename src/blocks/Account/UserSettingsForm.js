import { HawaSettingsRow } from "../../elements";
import { Button, Container } from "@mui/material";

export const UserSettingsForm = (props) => {
  return (
    <Container maxWidth="sm">
      {props.children}
      <Button
        type="submit"
        fullWidth
        variant="last"
        onClick={props.handleSaveSettings}
      >
        {props.saveSettingsText}
      </Button>
    </Container>
  );
};
