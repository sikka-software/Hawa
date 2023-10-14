import type { Meta, StoryObj } from "@storybook/react";
import { Logos } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Logos",
  //   component: Logos,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Logos/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logos>;

export default meta;
type Story = StoryObj<typeof Logos>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);
  function getComponent(name: keyof typeof Logos) {
    return Logos[name];
  }
  const Logo = (props: any) => {
    const Component = getComponent(props.name?.toLowerCase());
    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-items-center">
        <Component className="hawa-w-4 hawa-h-4" />
        <span className="hawa-text-sm">{props.name} Logo</span>
      </div>
    );
  };
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2">
      <Logo name="Apple" />
      <Logo name="Whatsapp" />
      <Logo name="Microsoft" />
      <Logo name="Paypal" />
      <Logo name="Github" />
      <Logo name="Twitter" />
      <Logo name="Tailwind" />
      <Logo name="Radix" />
      <Logo name="npm" />
      <Logo name="pnpm" />
      <Logo name="yarn" />
      <Logo name="react" />
      <Logo name="Aria" />
      <Logo name="Sikka" />
      <Logo name="Hawa" />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
