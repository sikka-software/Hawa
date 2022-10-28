import React from "react";
import { HawaTooltip } from "../../elements/HawaTooltip";

export default {
  title: "Elements/Tooltip",
  component: [HawaTooltip],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the dialog"
    },
    children: {
      control: "object",
      description:
        "The children element that will be contained by the dialog component"
    },
    actions: {
      control: "object",
      description:
        "HTML elements that will act as the dialog actions. Preferebly use buttons"
    },
    hideClose: {
      control: "boolean",
      description: "A boolean to hide the X icon",
      table: {
        defaultValue: { summary: true }
      }
    }
  }
};

export const Tooltip = (args) => {
  return (
    <div>
      <button data-tooltip-target="tooltip-test">Show tooltip</button>
      <HawaTooltip tooltipID="tooltip-test" content="somethign" />
    </div>
  );
};
