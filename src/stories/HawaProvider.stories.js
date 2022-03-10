import React from "react";
import CastIcon from "@material-ui/icons/Cast";
import { HawaProvider } from "../themes/HawaProvider";

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
      <div>test</div>
    </HawaProvider>
  );
};

export default {
  title: "Globals/HawaProvider",
  component: HawaProvider
};
