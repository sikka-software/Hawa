import { HawaButton } from "../../elements";

export const UserSettingsForm = (props) => {
  return (
    <div className="flex flex-col divide-y divide-gray-300 bg-blue-300 rounded-xl p-4">
      {props.children}
      <HawaButton type="submit" fullWidth onClick={props.handleSaveSettings}>
        {props.saveSettingsText}
      </HawaButton>
    </div>
  );
};
