import type { Meta, StoryObj } from "@storybook/react";
import { Stats } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { Users2 } from "lucide-react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts";

const meta = {
  title: "Layout/Stats",
  component: Stats,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Stats/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof Stats>;
let dummyChartData = [
  { count: 3, period: "2023-11-10" },
  { count: 17, period: "2023-11-11" },
  { count: 4, period: "2023-11-12" },
  { count: 11, period: "2023-11-13" },
  { count: 48, period: "2023-11-14" },
  { count: 5, period: "2023-11-15" },
  { count: 11, period: "2023-11-16" },
  { count: 31, period: "2023-11-17" },
];
const DummyChart = () => (
  <div className="h-[80px]" style={{ height: 80 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={dummyChartData}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="count"
          activeDot={{
            r: 6,
            style: { fill: "#f69f69", opacity: 0.25 },
          }}
          style={{
            stroke: "#f69f69",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div
      className="hawa-grid hawa-gap-4 md:hawa-grid-cols-2 lg:hawa-grid-cols-4"
      dir={direction}
    >
      <Stats
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        isLoading
        helperText="+180.1% from last month"
        icon={<Users2 className="hawa-icon" />}
        />
      <Stats
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        helperText="+180.1% from last month"
        icon={<Users2 className="hawa-icon" />}
        chart={<DummyChart />}
      />
      <Stats
        onMouseDown={(e) =>
          e.button === 1 && console.log("Middle Mouse Button Clicked. e:", e)
        }
        onClick={(e) => console.log("Stats card clicked. e:", e)}
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        helperTextColor="positive"
        helperText="+180.1% from last month"
        icon={<Users2 className="hawa-icon" />}
      />
      <Stats
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        helperTextColor="negative"
        helperText="-11.5% from last month"
        icon={<Users2 className="hawa-icon" />}
      />
      <Stats
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        helperTextColor="muted"
        helperText="Muted helperText"
        icon={<Users2 className="hawa-icon" />}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
