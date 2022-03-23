import React from "react";
import { HawaAppLayout } from "../../layout";

const Template = (args) => {
  return (
    <HawaAppLayout
      pageName="page1"
      pages={[
        { text: "page1", icon: "fdd" },
        { text: "page2", icon: "huhu" },
        { text: "page3", icon: "test" }
      ]}
      //   pages={[
      //     <HawaListItem text="dd" />,
      //     <HawaListItem text="dd" />,
      //     <HawaListItem text="dd" />
      //   ]}
      logo={
        <img
          height={40}
          style={{ zIndex: 30, width: "100%" }}
          src="https://xakher-images.s3.ap-southeast-1.amazonaws.com/sikka-logo.svg"
        />
      }
    >
      the rest of the app here
    </HawaAppLayout>
  );
};
export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout],
  parameters: {
    backgrounds: {
      default: "light"
      // values: [
      //   { name: "light", value: theme.lightBackground },
      //   { name: "dark", value: theme.darkBackground }
      // ]
    }
  }
};

export const Normal = Template.bind({});
Normal.args = {
  size: "large",
  showText: true,
  buttonLabel: "test",
  // padding: theme.paddings,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};
