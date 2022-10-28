import Container from "@mui/material/Container";
import { HawaButton } from "../../elements";

export const UserSettingsForm = (props) => {
  return (
    <Container maxWidth="sm">
      {props.children}
      <HawaButton type="submit" fullWidth onClick={props.handleSaveSettings}>
        {props.saveSettingsText}
      </HawaButton>
    </Container>
  );
};
