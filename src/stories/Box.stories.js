import React from "react";
import AdaptiveButton from "../components/Hawa/AdaptiveButton/AdaptiveButton";
import { HawaProvider } from "../components/Hawa/HawaProvider";

const Template = (args) => {
  const theme = {
    borderRadius: 20,
    primaryColor: "green",
    secondaryColor: "red",
    // margins: "10px",
    paddings: 10
  };
  return (
    <HawaProvider theme={theme}>
      <div>In progress</div> <div>this is a box</div>{" "}
    </HawaProvider>
  );
};
export default {
  title: "Layout/Box",
  component: AdaptiveButton
};

export const Light = Template.bind({});
Light.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  textColor: "#000000",
  buttonColor: "#f9f9f9"
};

export const Dark = Template.bind({});
Dark.args = {
  showText: true,
  buttonLabel: "test",
  borderRadius: 5,
  buttonColor: "#878787",
  textColor: "#ffffff"
};
