import React from "react";
import { OfflineBanner } from "../../elements";

export default {
  title: "Elements/Notifications/Offline",
  component: [OfflineBanner]
};

export const Offline = (args) => (
  <OfflineBanner
    open={true}
    title="Offline"
    text="You're not connected to the internet"
    handleClose={() => console.log("test")}
    {...args}
  />
);
Offline.args = {
  settingsType: "checkbox",
  settingsLabel: "Text Settings"
};
