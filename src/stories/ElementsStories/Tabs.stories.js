import React, { useState } from "react";
import { HawaTabs } from "../../elements/HawaTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../elements/Tabs";
import { Card, CardContent } from "../../elements/Card";
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
          value: "option10",
          label: "Billing",
          icon: <FiSettings />,
          content: <div className="bg-red-300 p-4"> option 1</div>
        },
        {
          value: "option11",
          label: "Billing",
          icon: <FiSettings />,
          content: <div className="bg-red-300 p-4"> option 1</div>
        },
        {
          value: "option12",
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

export const TabsStory = (args) => {
  return (
    <Tabs defaultValue="account">
      <TabsList className="max-w-full overflow-auto">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="password1">Password</TabsTrigger>
        <TabsTrigger value="password2">Password</TabsTrigger>
        <TabsTrigger value="password3">Password</TabsTrigger>
        <TabsTrigger value="password4">Password</TabsTrigger>
        <TabsTrigger value="password5">Password</TabsTrigger>
        <TabsTrigger value="password6">Password</TabsTrigger>
        <TabsTrigger value="password7">Password</TabsTrigger>
        <TabsTrigger value="password8">Password</TabsTrigger>
        <TabsTrigger value="password9">Password</TabsTrigger>
        <TabsTrigger value="password10">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent headless>Make changes to your account here.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent headless>Change your password here.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

TabsStory.args = {
  orientation: "horizontal",
  direction: "rtl",
  marginBetween: 2,
  width: "full"
};

TabsStory.storyName = "Tabs (v0.1)";
