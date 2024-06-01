import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Logos } from "@sikka/hawa/elements/logos";

import { setLocale, t } from "../../translations/i18n";

const meta = { title: "Elements/Logos" } satisfies Meta<typeof Logos>;

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
      <div className="hawa-flex hawa-flex-col hawa-items-center hawa-gap-2 hawa-p-4 hawa-border hawa-rounded">
        <Component className="hawa-h-8 hawa-w-8" />
        <span className="hawa-text-[15px]">{props.name} Logo</span>
      </div>
    );
  };
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-10" dir={direction}>
      <div className="hawa-flex hawa-flex-col">
        <div className="hawa-text-4xl hawa-font-bold hawa-pb-2 hawa-mb-2 hawa-border-b">
          Misc
        </div>
        <div className="hawa-grid hawa-grid-cols-4 hawa-gap-2" dir={direction}>
          <Logo name="Sikka" />
          <Logo name="Hawa" />
          <Logo name="Phone" />
          <Logo name="Mail" />
          <Logo name="Apple" />
          <Logo name="AppleStore" />
          <Logo name="Google" />
          <Logo name="GooglePlay" />
        </div>
      </div>
      <div className="hawa-flex hawa-flex-col">
        <div className="hawa-text-4xl hawa-font-bold hawa-pb-2 hawa-mb-2 hawa-border-b">
          Social
        </div>
        <div className="hawa-grid hawa-grid-cols-4 hawa-gap-2" dir={direction}>
          <Logo name="Whatsapp" />
          <Logo name="Youtube" />
          <Logo name="Telegram" />
          <Logo name="Tiktok" />
          <Logo name="Behance" />
          <Logo name="Microsoft" />
          <Logo name="Paypal" />
          <Logo name="Github" />
          <Logo name="Instagram" />
          <Logo name="Twitter" />
          <Logo name="X" />
          <Logo name="Linkedin" />
        </div>
      </div>
      <div className="hawa-flex hawa-flex-col">
        <div className="hawa-text-4xl hawa-font-bold hawa-pb-2 hawa-mb-2 hawa-border-b">
          Technical
        </div>
        <div className="hawa-grid hawa-grid-cols-4 hawa-gap-2" dir={direction}>
          <Logo name="Tailwind" />
          <Logo name="Radix" />
          <Logo name="npm" />
          <Logo name="pnpm" />
          <Logo name="yarn" />
          <Logo name="react" />
          <Logo name="Aria" />
        </div>
      </div>
      <div className="hawa-flex hawa-flex-col">
        <div className="hawa-text-4xl hawa-font-bold hawa-pb-2 hawa-mb-2 hawa-border-b">
          Payments
        </div>
        <div className="hawa-grid hawa-grid-cols-4 hawa-gap-2" dir={direction}>
          <Logo name="Visa" />
          <Logo name="MasterCard" />
        </div>
      </div>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
