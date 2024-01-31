import { AccordionItemProps } from "@sikka/hawa";
import { Accordion } from "@sikka/hawa/accordion";

export default function AccordionDemo() {
  let accordionItems: AccordionItemProps[] = [
    {
      trigger: "What is Sikka?",
      content: "Sikka is a software company based in Saudi Arabia",
      chip: {
        label: "Saudi",
        color: "green"
      }
    },
    {
      trigger: "What is a design system?",
      content:
        "A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications."
    },
    {
      trigger: "What is a component?",
      content:
        "A component is a reusable element that can be composed together with other components to build an application."
    },
    {
      trigger: "This one is disabled",
      content: "You'll never read this.",
      disabled: true
    }
  ];
  return (
    <div className="w-full">
      <Accordion type="single" items={accordionItems} />
    </div>
  );
}
