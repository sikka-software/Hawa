import React from "react";
import { HawaButton, HawaStepper, Timeline } from "../../elements";

export default {
  title: "Elements/Timeline",
  component: [HawaStepper],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "The orientation of the stepper"
    }
  }
};
export const VerticalTimeline = (args) => {
  return <Timeline {...args} />;
};
VerticalTimeline.args = {
  steps: [
    {
      date: "January 2022",
      title: "Hawa was created",
      description:
        "The new UI kit for Sikka projects have been created and the team started working on it.",
      actions: (
        <div>
          <HawaButton color="gray">Learn more</HawaButton>
        </div>
      )
    },
    {
      date: "March 2022",
      title: "Layout section added",
      description:
        "a new section to Hawa has been added which revolves around the layout of websites and web apps",
      actions: (
        <>
          <HawaButton color="gray" variant="outlined">
            Learn more
          </HawaButton>
        </>
      )
    },
    {
      date: "February 2023",
      title: "Initial Hawa release",
      description:
        "The Hawa UI kit has reached a mature point of development and the initial release was created and published on NPM",
      actions: (
        <>
          <HawaButton>Learn more</HawaButton>
        </>
      )
    }
  ]
};
export const HorizontalStepper = (args) => {
  return (
    <HawaStepper
      currentStep={1}
      orientation={args.orientation}
      steps={["Billing Info", "Payment Info", "Confirmation", "Checkup"]}
    />
  );
};
