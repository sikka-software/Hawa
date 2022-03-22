import { HawaTextField, ActionButton } from "../../ui";
import { Box } from "../../layout";

export const UserSettings = (props) => {
  return (
    <Box maxWidth={400}>
      <HawaTextField type="text" inputLabel="First Name" />
      <HawaTextField type="text" inputLabel="Last Name" />
      <HawaTextField type="email" inputLabel="Email" />
      <HawaTextField type="password" inputLabel="Password" />
      <ActionButton last text="Update Account" />
    </Box>
  );
};
