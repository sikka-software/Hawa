import { HawaButton } from "../../elements";
import { HawaContainer } from "../../layout";

export const UserSettingsForm = (props) => {
  return (
    <HawaContainer>
      {" "}
      {props.children}
      <HawaButton color="primary"  type="submit" width="full" onClick={props.handleSaveSettings}>
        {props.saveSettingsText}
      </HawaButton>
    </HawaContainer>
  );
};
