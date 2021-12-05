import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Hawa } from "../components/Hawa/Hawa";
import { StyledCheckbox } from "../components/Hawa/Checkbox/Checkbox";
import { AutoCompleteField } from "../components/Hawa/AutoCompleteField/AutoCompleteField";
import { StyledInputLabel } from "../components/Hawa/InputLabel/StyledInputLabel";
import { StyledTextArea } from "../components/Hawa/TextArea/TextArea";
import { StyledTextField } from "../components/Hawa/TextField/TextField";
import { StyledRadioSelector } from "../components/Hawa/RadioSelector";
import { FormProvider, useForm } from "react-hook-form";
import "../styles.css";

// const stories = storiesOf("Checkbox", module);

// stories.add("Light", () => {
//   return <StyledCheckbox color={"gray"} defaultValue={true} />;
// });

const Template = (args) => {
  return <StyledCheckbox {...args} />;
};

export const StyledCheckBox = Template.bind({});
StyledCheckBox.args = {
  color: "gray",
  defaultValue: false,
};

export default {
  title: "Checkbox",
  component: StyledCheckbox,
  argsTypes: {
    defaultValue: {
      options: [true, false],
      control: { type: "radio" }
    }
  },
  args: {
    defaultValue: true
  }
};