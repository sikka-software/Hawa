import type { Meta, StoryObj } from "@storybook/react";
import { SplitButton } from "../../components/elements";
import { ArgsTable, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Split Button",
  component: SplitButton,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof SplitButton>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="hawa-flex hawa-flex-col hawa-w-full hawa-max-w-md">
      <SplitButton
        direction={direction}
        variant={"outline"}
        menuItems={[
          {
            label: t("discard"),
            value: 10,
            action: () => console.log("discarding changes"),
          },
          { label: t("save-draft"), value: 10 },
          { label: t("send-review"), value: 10 },
        ]}
        {...args}
      >
        {t("submit")}
      </SplitButton>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
