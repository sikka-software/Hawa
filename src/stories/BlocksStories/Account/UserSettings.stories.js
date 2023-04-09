import React from "react";
import { UserSettingsForm } from "../../../blocks/Account";
import { HawaSettingsRow } from "../../../elements";

export default {
  title: "Blocks/Account/User Settings",
  component: UserSettingsForm,
  argTypes: {
    children: {
      default: true,
      control: "select",
      options: ["ar", "en"],
      description:
        "The content of the settings block, should be in <HawaSettingsRow/>",
      table: { defaultValue: { summary: "en" } }
    }
  }
};
export const UserSettings = (args) => {
  return (
    <div className="flex flex-col gap-2">
      <UserSettingsForm
        saveSettingsText="Save Settings"
        blockTitle="General Settings"
        handleSaveSettings={() => console.log("saving settings")}
      >
        <HawaSettingsRow
          settingsType="boolean"
          settingsLabel="Hide Watermark"
          settingsDescription="hide the watermark from exported documents"
          onChange={(e) =>
            console.log("checkbox settings value is ", e.target.checked)
          }
          />
        <HawaSettingsRow
          settingsType="text"
          placeholder="Your handle"
          settingsLabel="Custom Handle"
          settingsDescription="hide the watermark from exported documents"
          onChange={(e) =>
            console.log("text settings value is ", e.target.value)
          }
        />
        <HawaSettingsRow
          settingsType="radio"
          settingsLabel="Currency"
          radioProps={{
            onChangeTab: () => console.log("changing tab"),
            defaultValue: "sar",
            options: [
              { value: "sar", label: "SAR" },
              { value: "usd", label: "USD" }
            ]
          }}
        />
      </UserSettingsForm>
      <UserSettingsForm
        saveSettingsText="Save Settings"
        blockTitle="Secondary Settings"
        handleSaveSettings={() => console.log("saving settings")}
      >
        <HawaSettingsRow
          settingsType="radio"
          settingsLabel="Language"
          radioProps={{
            onChangeTab: () => console.log("changing tab"),
            defaultValue: "en",
            options: [
              { value: "en", label: "English" },
              { value: "ar", label: "Arabic" }
            ]
          }}
        />
        <HawaSettingsRow
          settingsType="boolean"
          placeholder="Your handle"
          settingsLabel="Show Analytics"
          onChange={(e) => console.log("changing to ", e.target.checked)}
        />
      </UserSettingsForm>
    </div>
  );
};
