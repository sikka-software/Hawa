import React from "react";
import { Button } from "../../elements/Button";
import { Popover } from "../../elements";

export default {
  title: "Elements/Popover",
  component: [Popover],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "left", "bottom", "right"],
      description: "The side the tooltip will show up on"
    },
    children: {
      control: "object",
      description: "The element(s) that will trigger the tooltip"
    }
  }
};

export const PopoverStory = (args) => {
  return (
    <div
      dir={args.direction}
      className="flex h-screen w-full items-center justify-center"
    >
      <Popover trigger={<Button>Show Tooltip</Button>}>
        <div>this is the content of the popover</div>
      </Popover>
    </div>
  );
};

PopoverStory.args = {
  side: "top"
};

PopoverStory.storyName = "Popover";
