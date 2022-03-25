import React from "react";
import { UserSettingsForm } from "../../../blocks/Account";
import { HawaSettingsRow } from "../../../elements";

export default {
  title: "Blocks/Account/User Settings",
  component: UserSettingsForm,
  argTypes: {
    theme: {
      options: ["primary", "secondary", "default"],
      control: { type: "select" }
    }
  }
};
export const UserSettings = (args) => {
  return (
    <UserSettingsForm
      {...args}
      saveSettingsText="Save Settings"
      handleSaveSettings={() => console.log("saving settings")}
    >
      <HawaSettingsRow
        settingsType="checkbox"
        settingsLabel="Hide Watermark"
        onChange={(e) =>
          console.log("checkbox settings value is ", e.target.checked)
        }
      />
      <HawaSettingsRow
        settingsType="text"
        placeholder="Your handle"
        settingsLabel="Custom Handle"
        onChange={(e) => console.log("text settings value is ", e.target.value)}
      />
      <HawaSettingsRow
        handleChange={(e) => console.log("changing to ", e)}
        settingsType="radio"
        defaultValue="sar"
        options={[
          { value: "sar", label: "SAR" },
          { value: "usd", label: "USD" }
        ]}
        settingsLabel="Currency"
      />
      <HawaSettingsRow
        handleChange={(e) => console.log("changing to ", e)}
        settingsType="radio"
        defaultValue="en"
        options={[
          { value: "en", label: "English" },
          { value: "ar", label: "Arabic" }
        ]}
        settingsLabel="Language"
      />
      <HawaSettingsRow
        settingsType="boolean"
        placeholder="Your handle"
        settingsLabel="Show Analytics"
        onChange={(e) => console.log("changing to ", e.target.checked)}
      />
    </UserSettingsForm>
  );
};
UserSettings.args = {
  theme: "primary",
  title: "red"
};
