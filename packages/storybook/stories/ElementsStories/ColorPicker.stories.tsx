import { useEffect, useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "@sikka/hawa/elements/colorPicker";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Inputs/Color Picker",
  component: ColorPicker
  // parameters: { layout: "centered" }
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    const [isLoading, setIsLoading] = useState(true);
    const [currentColor, setCurrentColor] = useState("#f0f0f0");
    useEffect(() => {
      // Set a timeout to change isLoading to true after 2 seconds
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      // Clear the timeout if the component unmounts before the timeout is reached
      return () => {
        clearTimeout(timeoutId);
      };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
      <div dir={direction}>
        <ColorPicker
          label="Color"
          isLoading={isLoading}
          forceHideHelperText
          color={currentColor}
          handleChange={(e: any) => {
            console.log("changing color to: ", e.target.value);
            setCurrentColor(e.target.value);
          }}
          {...args}
        />
      </div>
    );
  },
  args: { color: "#f0f0f0" }
};
