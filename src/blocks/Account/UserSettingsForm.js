import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

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
