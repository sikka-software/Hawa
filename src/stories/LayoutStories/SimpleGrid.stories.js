import { Meta, Story } from "@storybook/react";
import SimpleGrid from "../../layout/SimpleGrid";

export default {
  title: "Layout/Simple Grid",
  component: SimpleGrid
};

const Template = (args) => {
  return (
    <div className=" flex h-screen w-full items-center justify-center">
      <SimpleGrid
        columns={args.columns}
        spacingX={args.spacingX}
        spacingY={args.spacingY}
      >
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
      </SimpleGrid>
    </div>
  );
};

export const SimpleGrindComponent = Template.bind({});

SimpleGrindComponent.args = {
  columns: 2,
  spacing: 3,
  spacingX: 3,
  spacingY: 3
};
SimpleGrindComponent.storyName = "SimpleGrid";
