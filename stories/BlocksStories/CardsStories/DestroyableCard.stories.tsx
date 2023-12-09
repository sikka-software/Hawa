import type { Meta, StoryObj } from "@storybook/react";
import { DestroyableCard } from "../../../components";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Cards/Destroyable Card",
  component: DestroyableCard,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<DestroyableCard/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DestroyableCard>;

export default meta;
type Story = StoryObj<typeof DestroyableCard>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction}>
      <DestroyableCard direction={direction} {...args}>
        <div>This is the custom content.</div>
        <h1>Destroyable Card</h1>
        <p>Click on the small X in the corner to hide/destroy this card</p>
      </DestroyableCard>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
