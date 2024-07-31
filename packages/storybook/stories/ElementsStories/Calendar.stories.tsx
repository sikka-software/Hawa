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
      <div className="hawa-grid hawa-grid-cols-2">
        <div className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center">
          <h1>Parent: none</h1>
          <h1>Cal : LTR</h1>
          <Calendar
            dir="ltr"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center">
          <h1>Parent: none</h1>
          <h1>Cal : RTL</h1>
          <Calendar
            dir="rtl"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div
          className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
          dir="ltr"
        >
          <h1>Parent: LTR</h1>
          <h1>Cal : LTR</h1>
          <Calendar
            dir="ltr"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div
          className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
          dir="ltr"
        >
          <h1>Parent: LTR</h1>
          <h1>Cal : RTL</h1>
          <Calendar
            dir="rtl"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div
          className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
          dir="rtl"
        >
          <h1>Parent: RTL</h1>
          <h1>Cal : LTR</h1>
          <Calendar
            dir="ltr"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div
          className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
          dir="rtl"
        >
          <h1>Parent: RTL</h1>
          <h1>Cal : RTL</h1>
          <Calendar
            dir="rtl"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    );
  },
};
// Testing Different Directions

{
  /* <div className="hawa-grid hawa-grid-cols-2">
<div
  className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
  dir="ltr"
>
  <h1>Parent: LTR</h1>
  <h1>Cal : LTR</h1>
  <Calendar
    dir="ltr"
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
</div>
<div
  className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
  dir="ltr"
>
  <h1>Parent: LTR</h1>
  <h1>Cal : RTL</h1>
  <Calendar
    dir="rtl"
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
</div>
<div
  className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
  dir="rtl"
>
  <h1>Parent: RTL</h1>
  <h1>Cal : LTR</h1>
  <Calendar
    dir="ltr"
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
</div>
<div
  className="hawa-border hawa-flex hawa-max-w-md hawa-flex-col hawa-gap-2 hawa-items-center"
  dir="rtl"
>
  <h1>Parent: RTL</h1>
  <h1>Cal : RTL</h1>
  <Calendar
    dir="rtl"
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
</div>
</div> */
}
