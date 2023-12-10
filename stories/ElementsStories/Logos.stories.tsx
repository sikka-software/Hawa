import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Logos } from "@elements/logos";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Logos"
  // component: Logos
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
      <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2">
        <Component className="hawa-icon" />
        <span className="hawa-text-sm">{props.name} Logo</span>
      </div>
    );
  };
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2" dir={direction}>
      <Logo name="Phone" />
      <Logo name="Mail" />
      <Logo name="Apple" />
      <Logo name="Whatsapp" />
      <Logo name="Microsoft" />
      <Logo name="Paypal" />
      <Logo name="Github" />
      <Logo name="Instagram" />
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
  render: Template.bind({})
};
