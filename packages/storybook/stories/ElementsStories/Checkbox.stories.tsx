import React from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@sikka/hawa/elements/checkbox";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Checkbox",
  component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2" dir={direction}>
        <div className="hawa-flex hawa-flex-col hawa-gap-6">
          <Checkbox {...args} id="checkbox_id" />
          <Checkbox {...args} disabled id="dis" />
          <div className="hawa-max-w-md">
            <Checkbox
              label="I believe in good faith that the usage of the copyrighted material I have reported is not permitted by the copyright holder, their representative, or the law."
              id="diks"
              // sublabel='fefefeef'
              // helperText="dsdsdd"
            />
          </div>
        </div>
      </div>
    );
  },
  args: { label: "Accept terms and conditions" }
};
export const Sizes: Story = {
  render: (args) => {
    let sizes: any[] = ["xs", "default", "sm", "md", "lg", "xl"];

    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        {sizes.map((size: any) => (
          <Checkbox
            label={size}
            key={size}
            {...args}
            size={size}
            id={`checkbox_${size}`}
          />
        ))}
      </div>
    );
  }
};
export const Radius: Story = {
  render: (args) => {
    let sizes: any[] = ["xs", "default", "sm", "md", "lg", "xl"];

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          {sizes.map((size: any) => (
            <Checkbox
              label={"None"}
              key={size}
              {...args}
              radius="none"
              size={size}
              id={`checkbox_${size}`}
            />
          ))}
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          {sizes.map((size: any) => (
            <Checkbox
              label={"Inherit"}
              key={size}
              {...args}
              radius="inherit"
              size={size}
              id={`checkbox_${size}`}
            />
          ))}
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          {sizes.map((size: any) => (
            <Checkbox
              label={"Full"}
              key={size}
              {...args}
              radius="full"
              size={size}
              id={`checkbox_${size}`}
            />
          ))}
        </div>
      </div>
    );
  }
};
export const withSubtitle: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2" dir={direction}>
        <div className="hawa-flex hawa-flex-col hawa-gap-6">
          <Checkbox {...args} id="checkbox_id" />
          <Checkbox {...args} disabled id="dis" />
        </div>
      </div>
    );
  },
  args: {
    label: "Accept terms and conditions",
    sublabel: "You agree to our Terms of Service and Privacy Policy."
  }
};
export const withHelperText: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2" dir={direction}>
        <div className="hawa-flex hawa-flex-col hawa-gap-6">
          <Checkbox {...args} id="checkbox_id" />
          <Checkbox {...args} disabled id="dis" />
        </div>
      </div>
    );
  },
  args: {
    label: "Accept terms and conditions",
    sublabel: "You agree to our Terms of Service and Privacy Policy.",
    helperText: "You must agree to the TOS to continue"
  }
};
