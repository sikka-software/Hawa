import type { Meta, StoryObj } from "@storybook/react";

import { PricingCard, Button } from "../../../components/elements";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Elements/Cards/Pricing Card",
  component: PricingCard,
  parameters: {
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {
  render: (args) => <PricingCard {...args} />,
  args: {
    direction: "ltr",
    price: 300,
    size: "small",
    // discount: "Save 10%",
    texts: {
      title: "Professional Plan",
      buttonText: "Upgrade",
      currencyText: "SAR",
      cycleText: "month",
      subtitle: "Includes up to 4 users + 200 GB",
    },
    features: [
      { included: true, text: "Unlimited Menus" },
      { included: true, text: "Unlimited Items" },
      { included: false, text: "Custom Menus" },
    ],
  },
};

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     label: "Button",
//   },
// };
