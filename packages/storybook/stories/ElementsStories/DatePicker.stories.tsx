import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { format, addDays } from "date-fns";
import { arSA } from "date-fns/locale";

import { CalendarValueType } from "@sikka/hawa/elements/calendar";
import { DatePicker, DatePickerButton } from "@sikka/hawa/elements/datePicker";
import { Input } from "@sikka/hawa/elements/input";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/DatePicker",
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  name: "Single Date",
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [date, setDate] = React.useState<CalendarValueType["single"]>();

    return (
      <div
        dir={direction}
        className="hawa-flex  hawa-max-w-md hawa-flex-row hawa-gap-2"
      >
        <DatePicker
          initialFocus
          mode="single"
          selected={date}
          onSelect={setDate}
          required={true}
          // locale={arSA}
          dir={direction}
          numberOfMonths={1}
          trigger={
            <DatePickerButton
              helperText="Helper text here"
              showHelperText={false}
              value={date ? format(date, "PPP") : <span>Pick a date</span>}
              label="Date Picker"
              buttonClassNames="hawa-bg-red-400 hawa-min-w-[200px]"
            />
          }
        />
        <Input
          label={"First Name"}
          placeholder={"Fulan"}
          helperText="Helper text here"
        />
      </div>
    );
  },
};

export const Range: Story = {
  name: "Date Range",
  render: (args: any) => {
    const [date, setDate] = React.useState<
      CalendarValueType["range"] | undefined
    >({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    });

    return (
      <div className="hawa-flex hawa-h-64 hawa-max-w-md hawa-flex-col hawa-gap-2">
        <DatePicker
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          trigger={
            <DatePickerButton
              value={
                date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )
              }
              label="Date Picker"
            />
          }
        />
      </div>
    );
  },
};
export const Multiple: Story = {
  name: "Multiple Dates",
  render: (args: any) => {
    const [dates, setDates] = React.useState<CalendarValueType["multiple"]>();
    const [dateRange, setDateRange] =
      React.useState<CalendarValueType["range"]>();

    return (
      <div className="hawa-flex hawa-h-64 hawa-max-w-md hawa-flex-col hawa-gap-2">
        <DatePicker
          initialFocus
          mode="multiple"
          selected={dates}
          onSelect={setDates}
          numberOfMonths={2}
          trigger={
            <DatePickerButton
              multiple
              value={
                dates ? (
                  dates.map((date) => format(date, "PPP") + " + ")
                ) : (
                  <span>Pick a date</span>
                )
              }
              label="Date Picker"
            />
          }
        />
      </div>
    );
  },
};
