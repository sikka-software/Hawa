import { Subtitle, Title } from "@storybook/addon-docs";
import React, { useState } from "react";
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
      options: ["checkbox", "text", "radio", "color", "boolean"],
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

export const CheckboxSettings = (args) => (
  <HawaSettingsRow settingsType={"checkbox"} {...args} />
);
CheckboxSettings.args = {
  settingsLabel: "Checkbox Settings"
};
export const TextSettings = (args) => (
  <HawaSettingsRow placeholder="Text here" settingsType={"text"} {...args} />
);

TextSettings.args = {
  settingsLabel: "Text Settings"
};
export const BooleanSettings = (args) => (
  <HawaSettingsRow placeholder="Text here" settingsType={"boolean"} {...args} />
);

BooleanSettings.args = {
  settingsLabel: "Boolean Settings"
};
export const RadioSettings = (args) => {
  let allOptions = Array.from({ length: args.options }, (v, i) => {
    return { label: `Option ${i}`, value: `option${i}` };
  });
  return (
    <HawaSettingsRow
      settingsType={"radio"}
      settingsLabel={args.settingsLabel}
      handleChange={(e) => console.log("changing to ", e)}
      defaultValue="option1"
      options={allOptions}
    />
  );
};

RadioSettings.args = {
  options: 3,
  settingsLabel: "Radio Settings"
};

export const ColorSettings = (args) => {
  const [currentColor, setCurrentColor] = useState("#f0f049");

  return (
    <HawaSettingsRow
      settingsType={"color"}
      settingsLabel={args.settingsLabel}
      handleChange={(e) => {
        setCurrentColor(e.target.value);
        console.log("changing to ", e.target.value);
      }}
      // defaultValue="#847577"
      color={currentColor}
    />
  );
};

ColorSettings.args = {
  options: 3,
  settingsLabel: "Color Settings"
};
