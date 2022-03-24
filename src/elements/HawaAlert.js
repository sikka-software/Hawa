import React from "react";
// import { styled } from "@mui/material/styles";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const HawaAlert = (props) => {
  // const currentTheme = Object.keys(hawaTheme.alerts).find(
  //   (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  // );
  // let alertStyle = {};

  // if (currentTheme) {
  //   alertStyle = {
  //     ...hawaTheme.alerts[currentTheme]
  //   };
  // } else {
  //   alertStyle = {
  //     marginBottom: 10
  //   };
  // }

  // const StyledAlert = styled(Alert)(({ theme }) => {
  //   return {
  //     ...alertStyle
  //   };
  // });

  return (
    <Alert {...props}>
      {props.title && <AlertTitle>{props.title}</AlertTitle>}
      {props.text}
    </Alert>
  );
};
