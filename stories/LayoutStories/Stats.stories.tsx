import type { Meta, StoryObj } from "@storybook/react";
import { Stats } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { Users2 } from "lucide-react";

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
        helperText="+180.1% from last month"
        icon={<Users2 className="hawa-w-4 hawa-h-4" />}
      />
      <Stats
        handleClick={() => console.log("clickable stats")}
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        helperText="+180.1% from last month"
        icon={<Users2 className="hawa-w-4 hawa-h-4" />}
      />
      <Stats
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        helperText="+180.1% from last month"
        icon={<Users2 className="hawa-w-4 hawa-h-4" />}
      />
      <Stats
        width="full"
        variant="default"
        number="+2350"
        label="Subscriptions"
        helperText="+180.1% from last month"
        icon={<Users2 className="hawa-w-4 hawa-h-4" />}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
