import React, { useContext } from "react";
import { ThemeProvider } from "../../components/HawaProvider";
import { StyledTextField, StyledInputLabel } from "../../components";
import { Box } from '../../layout'
export const SignInForm = (props) => {
  const theme = useContext(ThemeProvider);
  return (
    <Box>
      {/* <div
        style={{
          // backgroundColor: theme.paperColors,
          // padding: theme.paddings,
          // borderRadius: theme.borderRadius,
          // margin: theme.margins,
          // maxWidth: 400
        }}
      > */}
      <StyledInputLabel label="Email" />
      <StyledTextField type="text" />
      <StyledInputLabel label="Password" />
      <StyledTextField type="text" />

      {props.children}
      {/* </div> */}

    </Box>
  );
};
