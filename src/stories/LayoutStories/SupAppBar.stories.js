import { BottomAppBar } from "../../layout/HawaBottomAppBar";
// import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
// import BugReportIcon from "@mui/icons-material/BugReport";
// import AppsIcon from "@mui/icons-material/Apps";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default {
  title: "Layout/SupAppBar",
  component: [BottomAppBar]
};

const Template = (args) => {
  return <BottomAppBar {...args} />;
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
      // icon: <EmojiEmotionsIcon />,
      action: () => console.log("button 4")
    }
  ]
};
