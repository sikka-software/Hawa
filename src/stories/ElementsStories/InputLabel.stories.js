import { storiesOf } from "@storybook/react";
import { HawaInputLabel } from "../../elements";

export default {
  title: "Components/InputLabel",
  component: [HawaInputLabel],
  argTypes: {
    resize: {
      options: ["vertical", "horizontal", "both"],
      control: { type: "radio" }
    }
  }
};
