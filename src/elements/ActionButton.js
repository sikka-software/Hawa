import Button from "@mui/material/Button";
// import { styled, darken } from "@mui/material/styles";

export const ActionButton = (props) => {
  // const currentTheme = Object.keys(hawaTheme.actionButton).find(
  //   (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  // );
  // let actionButtonStyle = {};

  // if (currentTheme) {
  //   actionButtonStyle = {
  //     ...hawaTheme.actionButton[currentTheme],
  //     margin: props.last ? 0 : hawaTheme.actionButton[currentTheme].margin,
  //     marginTop: props.last
  //       ? hawaTheme.actionButton[currentTheme].margin * 2
  //       : 0,
  //     "&:hover": {
  //       backgroundColor: darken(
  //         hawaTheme.actionButton[currentTheme]?.backgroundColor,
  //         0.1
  //       )
  //     }
  //   };
  // } else {
  //   actionButtonStyle = {
  //     backgroundColor: "black",
  //     color: "white",
  //     padding: 10,
  //     marginTop: props.last ? 10 * 2 : 0,
  //     borderRadius: 0
  //   };
  // }

  // const StyledButton = styled(Button)(({ theme }) => {
  //   return { ...actionButtonStyle };
  // });
  return <Button {...props}>{props.text}</Button>;
};
