import { HawaLayout } from "../../layout";

export default {
  title: "Layout",
  component: [HawaLayout]
};

const Template = (args) => {
  return <HawaLayout {...args}>Here goes content</HawaLayout>;
};

export const AppLayout = Template.bind({});
AppLayout.args = {
  appTitle: "test",
  drawerItems: [
    { text: "test" },
    { text: "test" },
    { text: "test" },
    { text: "test" }
  ]
};
