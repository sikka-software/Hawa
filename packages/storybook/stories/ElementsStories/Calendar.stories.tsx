import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@sikka/hawa/elements/calendar";

const meta = {
  title: "Elements/Calendar",
  component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (args: any) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="hawa-flex hawa-h-64 hawa-max-w-md hawa-flex-col hawa-gap-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />{" "}
      </div>
    );
  },
};
