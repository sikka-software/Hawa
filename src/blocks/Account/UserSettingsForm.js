import { HawaButton } from "../../elements";
import { HawaContainer } from "../../layout";

export const UserSettingsForm = (props) => {
  return (
    <HawaContainer>
      {" "}
      {props.children}
      <HawaButton
        text={props.saveSettingsText}
        type="submit"
        fullWidth
        onClick={props.handleSaveSettings}
      />
    </HawaContainer>
  );
};
