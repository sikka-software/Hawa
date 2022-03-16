import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
const useStyles = makeStyles({
  googleBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "var(--borderR)",
    borderColor: "var(--blue)",
    borderWidth: 1,
    borderStyle: "solid",
    cursor: "pointer"
    // backgroundColor: "red"
  },

  googleIconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 50,
    borderRadius: 2,
    backgroundColor: "none"
  },
  googleIcon: {
    // width: 30,
    // height: 30
  },
  btnText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.4,
    fontFamily: "Roboto",
    fontWeight: 500
  },
  btnTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});

const GoogleButton = (props) => {
  const classes = useStyles();
  const theme = useContext(ThemeProvider);

  console.log("theme is ", theme);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.margins,
        outline: props.outlined ? "1px solid black" : "none",
        borderRadius: theme.borderRadius,
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "red"
        }
      }}
      onClick={props.handleClick}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      <div style={{ width: 10 }} />
      <p
        style={{
          color: "black",
          fontSize: 14,
          textAlign: "center",
          letterSpacing: 0.4,
          fontFamily: "Roboto",
          fontWeight: 500
        }}
      >
        {props.buttonText}
      </p>
    </div>
  );
};

export default GoogleButton;
