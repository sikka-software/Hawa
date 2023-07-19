import React from "react";
import { EmptyState as EState } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Empty State",
  component: [EState],
  parameters: {
    docs: {
      description: {
        component:
          "`<EmptyState/>` block shows up when the user completed all actions and there's nothing more for them to do in that page"
      }
    }
  }
};

export const EmptyState = (args) => {
  return <EState {...args} />;
};

EmptyState.args = {
  variant: "contained"
};
