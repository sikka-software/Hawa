import React from "react";
import Button from "@mui/material/Button";

export const HawaButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};
