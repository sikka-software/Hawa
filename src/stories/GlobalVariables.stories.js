import React from "react";
import "../styles.css";

export const GlobalVariables = (args) => {
  //   const methods = useForm();
  return <div>TESTING COMPONENT</div>;
};
export const AnotherComponent = (args) => {
  //   const methods = useForm();
  return <div>TESTING COMPONENT</div>;
};
export default {
  title: "TestTitle",
  component: [],
  argTypes: {
    resize: {
      options: ["vertical", "horizontal", "both"],
      control: { type: "select" }
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
