import { Subtitle, Title } from "@storybook/addon-docs";
import React from "react";
import { HawaSettingsRow } from "../../elements";

export default {
  title: "Elements/Settings",
  component: [HawaSettingsRow],
  parameters: {
    backgrounds: {
      default: "twitter",
      values: [
        {
          name: "light",
          value: "#00aced"
        },
        {
          name: "dark",
          value: "#3b5998"
        }
      ]
    }
  },

  argTypes: {
    settingsType: {
      options: ["checkbox", "text", "radio"],
      control: { type: "select" }
    },
    onChange: {
      control: "text",
      description: "The function to get the value of the settings row",
      table: {
        type: {
          summary: "Conditions",
          detail:
            "For checkbox and radio the returned value is in e.target.checked, otherwise it's in e.target.value"
        }
      }
    }
  }
};

export const CheckboxSettings = (args) => <HawaSettingsRow {...args} />;
CheckboxSettings.args = {
  settingsType: "checkbox",
  settingsLabel: "Checkbox Settings"
};
export const TextSettings = (args) => (
  <HawaSettingsRow placeholder="Text here" {...args} />
);

TextSettings.args = {
  settingsType: "text",
  settingsLabel: "Text Settings"
};
export const BooleanSettings = (args) => (
  <HawaSettingsRow placeholder="Text here" {...args} />
);

BooleanSettings.args = {
  settingsType: "boolean",
  settingsLabel: "Boolean Settings"
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
