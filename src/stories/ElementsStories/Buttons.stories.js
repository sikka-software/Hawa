import * as React from "react";
import { HawaButton } from "../../elements";
import { FaBars } from "react-icons/fa";
import { Button } from "../../elements/Button";

export default {
  title: "Elements/Buttons",
  component: [HawaButton, Button],
  argTypes: { onClick: { action: "clicked" } }
};

export const ButtonVariationsStory = () => {
  const variants = [
    "default",
    "light",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
    "neoBrutalism"
  ];

  return (
    <div>
      <h2>Button Variations</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        ))}
      </div>
      <h1>TEST</h1>
    </div>
  );
};

export const ButtonFeedbackStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h2 className="mt-6 text-xl dark:text-white">
        Click button for feedback
      </h2>
      <div className="mt-1 flex flex-row">
        <HawaButton feedback="Clicked">Default</HawaButton>
      </div>
    </div>
  );
};
export const ButtonLoadingStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h2 className="mt-6 text-xl dark:text-white">Loading</h2>
      <div className="mt-2 flex flex-col">
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="normal"
          isLoading={true}
        >
          Normal Width
        </HawaButton>
      </div>
      <div className="mt-2 flex flex-col">
        <Button isLoading={true}>Normal Width</Button>
      </div>
    </div>
  );
};
export const ButtonBadgeStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <div className="flex flex-col gap-4">
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="normal"
          // isLoading={true}
          badge={500}
        >
          Number Badge
        </HawaButton>
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="normal"
          // isLoading={true}
          badge={10}
        >
          Number Badge
        </HawaButton>
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="normal"
          // isLoading={true}
          badge={"New"}
        >
          Text Badge
        </HawaButton>
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="normal"
          // isLoading={true}
          badge={true}
        >
          Boolean Badge
        </HawaButton>

        <h1 className="dark:text-white">Icon Only</h1>
        <HawaButton badge={true}>
          <FaBars />
        </HawaButton>
      </div>
    </div>
  );
};
export const ButtonWidthStory = () => {
  return (
    <div className="card max-w-800 p-3">
      <h2 className="mt-6 text-xl dark:text-white">Width</h2>

      <div className="mt-2 flex flex-col gap-4 ">
        <HawaButton
          variant="contained"
          color="primary"
          size="medium"
          width="full"
          margins="none"
        >
          Full Width
        </HawaButton>
        <HawaButton
          margins="none"
          variant="contained"
          color="primary"
          size="medium"
          width="half"
        >
          Half Width
        </HawaButton>
        <HawaButton
          variant="contained"
          color="primary"
          margins="none"
          size="medium"
          width="normal"
        >
          Normal Width
        </HawaButton>
      </div>
    </div>
  );
};
export const ButtonSizesStory = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="card max-w-800 p-3">
        <h2 className="mt-6 text-xl dark:text-white">Sizes</h2>
        <div className="mt-1 flex flex-row">
          <HawaButton
            variant="contained"
            color="primary"
            size="small"
            tooltip="test"
          >
            Small
          </HawaButton>
          <HawaButton
            className="ml-2"
            variant="contained"
            color="primary"
            size="medium"
            tooltip="test"
          >
            Medium
          </HawaButton>
          <HawaButton
            className="ml-2"
            variant="contained"
            color="primary"
            size="large"
            tooltip="test"
          >
            Large
          </HawaButton>
        </div>
      </div>
      <div className="card max-w-800 p-3">
        <h2 className="mt-6 text-xl dark:text-white">Sizes v0.1</h2>
        <div className="mt-1 flex flex-row gap-4">
          <Button size="xs">X-Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">X-Large</Button>
          <Button size="icon">Icon</Button>
        </div>
      </div>
    </div>
  );
};
export const ButtonIconsStory = () => {
  return (
    <div>
      <h1 className="dark:text-white">Right Icon</h1>
      <HawaButton startIcon={<FaBars />}>Click</HawaButton>
      <h1 className="dark:text-white">Left Icon</h1>
      <HawaButton endIcon={<FaBars />}>Click</HawaButton>
      <h1 className="dark:text-white">Icon Only</h1>
      <HawaButton>
        <FaBars />
      </HawaButton>
    </div>
  );
};

ButtonBadgeStory.storyName = "With Badge";
ButtonIconsStory.storyName = "Icons";
ButtonLoadingStory.storyName = "Loading";
ButtonWidthStory.storyName = "Widths";
ButtonSizesStory.storyName = "Sizes";
ButtonVariationsStory.storyName = "Variations";
ButtonFeedbackStory.storyName = "With Feedback";
