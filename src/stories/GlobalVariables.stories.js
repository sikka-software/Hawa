import React from "react";
import PropTypes from "prop-types";

export const GlobalVariables = (args) => {
  //   const methods = useForm();
  return <div>TESTING COMPONENT</div>;
};
export const AnotherComponent = (args) => {
  //   const methods = useForm();
  return <div>TESTING COMPONENT</div>;
};
AnotherComponent.propTypes = {
  textLabel: PropTypes.string
};
export default {
  title: "TestTitle",
  component: [GlobalVariables, AnotherComponent],
  argTypes: {
    resize: {
      description: "overwritten description",
      table: {
        type: {
          summary: "something short"
        },
        defaultValue: { summary: "Hello" }
      },
      options: ["vertical", "horizontal", "both"],
      control: { type: "select" }
    },
    label: {
      description: "overwritten description",
      table: {
        type: {
          summary: "something short",
          detail: "something really really long"
        },
        defaultValue: { summary: "Hello" }
      },
      control: {
        type: null
      }
    }
  }
};
