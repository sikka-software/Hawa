import React, { useState } from "react";
import { HawaTabs } from "../../elements/HawaTabs";
import { FiSettings, FiActivity, FiAirplay, FiSave } from "react-icons/fi";
export default {
  title: "Elements/Selections/Tabs",
  component: [HawaTabs],
  argTypes: {
    options: {
      control: "array",
      description: "An array of objects containing the option label and value",
      table: {
        type: {
          summary: "Object Example",
          detail: "{label: 'Option 1', value: 'option1'}"
        }
      }
    },
    handleChange: {
      action: "Tab Changed",
      description: "The function to change the defaultValue of the options tab"
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"]
    },
    defaultValue: {
      control: "string",
      description: "The string of the current selected option"
    }
  },
  args: {
    options: 4
  }
};

export const Horizontal = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <HawaTabs
      {...args}
      options={[
        {
          value: "option1",
          label: "Billing",
          icon: <FiSettings />,
          content: <div className="bg-red-300 p-4"> option 1</div>
        },
        {
          value: "option2",
          label: "Settings",
          icon: <FiSave />,
          content: <div className="bg-red-300 p-4"> option 2</div>
        },
        {
          value: "option3",
          label: "Legal",
          icon: <FiActivity />,
          content: <div className="bg-red-300 p-4"> option 3</div>
        },
        {
          value: "option4",
          label: "Test",
          icon: <FiAirplay />,
          content: (
            <div className="flex flex-col gap-9 bg-red-300">
              {" "}
              option 3<div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
            </div>
          )
        }
      ]}
    />
  );
};

Horizontal.args = {
  orientation: "horizontal",
  direction: "rtl",
  marginBetween: 2
};
export const Vertical = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      <HawaTabs
        // onChangeTab={(e) => setSelectedOption(e)}
        {...args}
        options={[
          {
            value: "option1",
            label: "Billing",
            content: <div className="bg-red-300"> option 1</div>
          },
          {
            value: "option2",
            label: "Settings",
            content: <div className="bg-red-300"> option 2</div>
          },
          {
            value: "option3",
            label: "Legal",
            content: <div className="bg-red-300"> option 3</div>
          },
          {
            value: "option4",
            label: "Test",
            content: (
              <div className="flex flex-col gap-9 bg-red-300">
                {" "}
                option 3<div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
                <div> lorem</div>
              </div>
            )
          }
        ]}
        // defaultValue={2}
      />
      <div>dsdsd</div>
    </>
  );
};

Vertical.args = {
  orientation: "vertical",
  direction: "rtl",
  marginBetween: 2
};

export const FullWidth = (args) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <HawaTabs
      // onChangeTab={(e) => setSelectedOption(e)}
      {...args}
      options={[
        {
          value: "option1",
          label: "Billing",
          content: <div> option 1</div>
        },
        {
          value: "option2",
          label: "Settings",
          content: <div> option 2</div>
        },
        {
          value: "option3",
          label: "Legal",
          content: <div> option 3</div>
        },
        {
          value: "option4",
          label: "Test",
          content: (
            <div className="flex flex-col gap-9 ">
              {" "}
              option 3<div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
              <div> lorem</div>
            </div>
          )
        }
      ]}
    />
  );
};

FullWidth.args = {
  orientation: "horizontal",
  direction: "rtl",
  marginBetween: 2,
  width: "full"
};
