import React from "react";
import { Button } from "../../elements/Button";
import { Tooltip } from "../../elements/Tooltip";

export default {
  title: "Elements/Tooltip",
  component: [Tooltip],
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

export const TooltipStory = (args) => {
  return (
    <div
      dir={args.direction}
      className="flex h-screen w-full items-center justify-center"
    >
      <Tooltip
        side={args.side}
        delayDuration={200}
        content={
          <div className="max-w-xs">
            <div>Title</div>{" "}
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              iure repudiandae illum nihil deserunt omnis at sapiente, in sint
              porro quam est exercitationem quasi nesciunt quos deleniti
              explicabo nisi quas.
            </div>
          </div>
        }
      >
        <Button>Show Tooltip</Button>
      </Tooltip>
    </div>
  );
};

TooltipStory.args = {
  side: "top"
};

TooltipStory.storyName = "Tooltip";
