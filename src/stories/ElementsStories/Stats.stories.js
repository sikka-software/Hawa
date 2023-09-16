import React from "react";
import { HawaStats } from "../../elements";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

export default {
  title: "Elements/Stats",
  component: HawaStats,
  argTypes: {
    label: {
      control: "text",
      description: "The title of the alert in bold"
    },
    number: {
      control: "text",
      description: "The content text of the alert"
    },
    helperText: {
      control: "text",
      description: "The content text of the alert"
    },
    variant: {
      control: "select",
      options: [
        "default",
        "plain",
        "contained",
        "outlined",
        "dropshadow",
        "neobrutalism"
      ]
    }
  }
};
const data = [
  {
    average: 400,
    today: 240
  },
  {
    average: 300,
    today: 139
  },
  {
    average: 200,
    today: 980
  },
  {
    average: 278,
    today: 390
  },
  {
    average: 189,
    today: 480
  },
  {
    average: 239,
    today: 380
  },
  {
    average: 349,
    today: 430
  }
];

const Template = (args) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* <HawaStats {...args} handleClick={() => console.log("test")} /> */}
      <HawaStats
        {...args}
        number="15,231.89 SAR"
        label="Total Revenue"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        }
        helperText="+20.1% from last month"
        handleClick={() => console.log("somthing")}
        isLoading={true}
      />
      <HawaStats
        {...args}
        number="+2350"
        label="Subscriptions"
        helperText="+180.1% from last month"
        handleClick={() => console.log("somthing")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        }
      />
      <HawaStats
        {...args}
        number="+2350"
        label="Subscriptions"
        // helperText="+180.1% from last month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
      />
      <HawaStats
        {...args}
        number="+2350"
        label="Subscriptions"
        chart={
          <div className="h-[80px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0
                }}
              >
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Average
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {payload[0].value}
                              </span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Today
                              </span>
                              <span className="font-bold">
                                {payload[1].value}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="average"
                  activeDot={{
                    r: 6,
                    style: { fill: "var(--primary)", opacity: 0.25 }
                  }}
                  style={{
                    stroke: "#d90d90",
                    opacity: 0.25
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="today"
                  strokeWidth={2}
                  activeDot={{
                    r: 8,
                    style: { fill: "#f89f89" }
                  }}
                  style={{
                    stroke: "#090909"
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        }
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
      />
    </div>
  );
};

export const Stats = Template.bind({});
Stats.args = {
  width: "full",
  variant: "default"
};
