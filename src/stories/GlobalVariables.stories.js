import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import "../styles.css";

const stories = storiesOf("Test", module);

stories.add("Global Variables", () => {
  return <div>test</div>;
});

export const GlobalVariables = (args) => {
  //   const methods = useForm();
  return <div>test</div>;
};
export default {
  title: "GlobalVariables",
  component: [],
  argTypes: {
    resize: {
      options: ["vertical", "horizontal", "both"],
      control: { type: "radio" }
    }
  }
};

/****************************/
// STYLED CHECKBOX TEMPLATE
// const StyledCheckBoxTemplate = (args) => {
//   const methods = useForm();
//   return (
//     <FormProvider {...methods}>
//       <StyledCheckbox {...args} />
//     </FormProvider>
//   );
// };
// export const StyledCheckBox = StyledCheckBoxTemplate.bind({});
// StyledCheckBox.args = {
//   name: "checkbox",
//   label: "CheckBox",
//   color: "blue",
//   rules: { required: true },
//   defaultValue: true
// };
/****************************/

/****************************/
// STYLED TextField TEMPLATE
// const StyledTextFieldTemplate = (args) => {
//   const methods = useForm();
//   return (
//     <FormProvider {...methods}>
//       <StyledTextField {...args} />
//     </FormProvider>
//   );
// };

// export const StyledTextFieldT = StyledTextFieldTemplate.bind({});
// StyledTextFieldT.args = {
//   name: "styledtextfield",
//   inputLabel: "Label",
//   bdRadius: 12,
//   bgColor: "lightgray",
//   helperText: "This is HelperText",
//   type: "text",
//   placeholder: "exemple ..."
// };

/****************************/
// Radio Selector Template
// const styledRadioSelectorTempalte = (args) => {
//   const methods = useForm();

//   return (
//     <FormProvider {...methods}>
//       <StyledRadioSelector {...args} />
//     </FormProvider>
//   );
// };

// export const StyledRadioSeletorT = styledRadioSelectorTempalte.bind({});
// StyledRadioSeletorT.args = {
//   name: "Radio Selector",
//   shouldUnregister: true,
//   options: [
//     { text: "Option 1", label: "option1" },
//     { text: "Option 2", label: "option2" },
//     { text: "Option 3", label: "option3" }
//   ],
//   selectedColor: "blue",
//   bdRadius: 12,
//   defaultValue: "option2",
//   bgSelectedColor: "red",
//   textSelectedColor: "black"
// };
/****************************/
