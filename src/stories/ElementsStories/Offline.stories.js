import React from "react";
import { OfflineBanner } from "../../elements";

export default {
  title: "Elements/Notifications/Offline",
  component: [OfflineBanner],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the notifications, leave empty to disable"
    },
    text: {
      control: "text",
      description: "The text of the notification banner"
    }
  },
  args: {
    title: "Offline",
    text: "You're not connected to the internet"
  }
};

export const Offline = (args) => (
  <OfflineBanner
    open={true}
    {...args}
    handleClose={() => console.log("test")}
  />
);
