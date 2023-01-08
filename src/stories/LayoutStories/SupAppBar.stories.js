import { HawaBottomAppBar } from "../../layout";

export default {
  title: "Layout/SupAppBar",
  component: [HawaBottomAppBar]
};

const Template = (args) => {
  return <HawaBottomAppBar {...args} />;
};

export const Normal = Template.bind({});
Normal.args = {
  appBarContent: [
    {
      label: "Button 1",
      // icon: <AppSettingsAltIcon />,
      action: () => console.log("button 1")
    },
    {
      label: "Button 2",
      // icon: <BugReportIcon />,
      action: () => console.log("button 2")
    },
    {
      label: "Button 3",
      // icon: <AppsIcon />,
      action: () => console.log("button 3")
    },
    {
      label: "Button 4",
      action: () => console.log("button 4")
    }
  ]
};
