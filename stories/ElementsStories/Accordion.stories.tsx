import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionRoot,
  AccordionContent,
  Accordion,
  AccordionItemProps
} from "@elements/accordion";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Accordion",
  component: Accordion
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordionData: AccordionItemProps[] = [
  { trigger: "Another Question", content: "Here's another answer." },
  {
    trigger: "Another Question",
    content: "Here's another answer.",
    disabled: true
  },
  {
    trigger: "Another Question",
    content: "Here's another answer.",
    chip: {
      label: "soon"
    }
  },
  { trigger: "Another Question", content: "Here's another answer." },
  { trigger: "Another Question", content: "Here's another answer." },
  { trigger: "Another Question", content: "Here's another answer." }
];

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div className="hawa-w-full hawa-max-w-md" dir={direction}>
        <Accordion items={accordionData} type="single" {...args} />
      </div>
    );
  }
};
export const SeparatedVariant: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div className="hawa-w-full hawa-max-w-md" dir={direction}>
        <Accordion
          design="separated"
          items={accordionData}
          type="single"
          {...args}
        />
      </div>
    );
  }
};
export const CustomMade: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <AccordionRoot type="single" collapsible className="w-full">
        <AccordionItem value={`item-99`}>
          <AccordionTrigger unstyled hideArrow>
            Unstyled Accordion (Click me)
          </AccordionTrigger>
          <AccordionContent unstyled>content</AccordionContent>
        </AccordionItem>
        <AccordionItem value={`item-11`}>
          <AccordionTrigger>trigger</AccordionTrigger>
          <AccordionContent>content</AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    );
  }
};
