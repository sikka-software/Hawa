import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "../../../components/elements";

const meta = {
  title: "Elements/Cards/Pricing Card",
  component: PricingCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  render: (args) => <PricingCard {...args} />,
  args: {
    direction: "ltr",
    price: 300,
    size: "small",
    discount: "Save 10%",
    texts: {
      title: "Professional Plan",
      buttonText: "Upgrade",
      currencyText: "SAR",
      cycleText: "month",
      subtitle: "Includes up to 4 users + 200 GB",
    },
    features: [
      { included: true, text: "Unlimited Menus", soon: true },
      { included: true, text: "Unlimited Items" },
      { included: false, text: "Custom Menus" },
      { included: false, text: "Custom Domain", soon: true },
    ],
  },
};
