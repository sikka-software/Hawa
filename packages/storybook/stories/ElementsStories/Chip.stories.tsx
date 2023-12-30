import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Flame, HeartPulse, KeyRound } from "lucide-react";

import { Chip } from "@sikka/hawa/chip";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Chip",
  component: Chip
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Colors: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";
    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Chip size="normal" label={t("Red")} color={"red"} />
        <Chip size="normal" label={t("Green")} color={"green"} />
        <Chip size="normal" label={t("Blue")} color={"blue"} />
        <Chip size="normal" label={t("Yellow")} color={"yellow"} />
        <Chip size="normal" label={t("Purple")} color={"purple"} />
        <Chip size="normal" label={t("Cyan")} color={"cyan"} />
        <Chip size="normal" label={t("Hyper")} color={"hyper"} />
        <Chip size="normal" label={t("Oceanic")} color={"oceanic"} />
        <Chip size="normal" label={t("No Color")} />
      </div>
    );
  }
};
export const Sizes: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Chip size="small" label={t("small")} color={"green"} />
        <Chip size="normal" label={t("normal")} color={"green"} />
        <Chip size="large" label={t("large")} color={"green"} />
      </div>
    );
  }
};
export const AsStatus: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Chip
          dir={direction}
          size="normal"
          label={t("unavailable")}
          dotType="unavailable"
          color="red"
        />
        <Chip
          dir={direction}
          size="normal"
          label={t("available")}
          dotType="available"
          color="green"
        />
      </div>
    );
  }
};
export const WithIcons: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Chip
          dir={direction}
          icon={<KeyRound className="hawa-icon" />}
          size="normal"
          label={t("unavailable")}
          color="red"
        />
        <Chip
          dir={direction}
          size="normal"
          label={t("available")}
          icon={<HeartPulse className="hawa-icon" />}
          color="green"
        />
        <Chip
          dir={direction}
          size="large"
          label={t("new")}
          icon={<Flame className="hawa-icon" />}
          color="hyper"
        />
      </div>
    );
  }
};
export const Radius: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Chip radius="none" size="large" label="None" color="green" />
      <Chip radius="inherit" size="large" label="Inherit" color="green" />
      <Chip radius="full" size="large" label="Full" color="green" />
    </div>
  )
};
