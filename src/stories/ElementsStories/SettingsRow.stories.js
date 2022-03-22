import React from "react";
import { HawaSettingsRow } from "../../elements";

export default {
  title: "Elements/Settings/Row",
  component: [HawaSettingsRow],
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'light',
          value: '#00aced',
        },
        {
          name: 'dark',
          value: '#3b5998',
        },
      ],
    },
  //   backgrounds: [{ name: "dark background", value: "#000", default: true }]
  },
  argTypes: {
    settingsType: {
      options: ["checkbox", "text", "radio"],
      control: { type: "select" }
    }
  }
};

export const CheckboxSettings = (args) => <HawaSettingsRow {...args} />;
CheckboxSettings.args = {
  settingsType: "checkbox",
  settingsLabel: "Text Settings"
};
export const TextSettings = (args) => (
  <HawaSettingsRow placeholder="Text here" {...args} />
);

TextSettings.args = {
  settingsType: "text",
  settingsLabel: "Text Settings"
};
export const RadioSettings = (args) => {
  let allOptions = Array.from({ length: args.options }, (v, i) => {
    return { label: `Option ${i}`, value: `option${i}` };
  });
  return (
    <HawaSettingsRow
      settingsType={args.settingsType}
      settingsLabel={args.settingsLabel}
      handleChange={(e) => console.log("changing to ", e)}
      defaultValue="option1"
      options={allOptions}
    />
  );
};

RadioSettings.args = {
  options: 3,
  settingsType: "radio",
  settingsLabel: "Radio Settings"
};
