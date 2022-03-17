import React from "react";
import { makeStyles } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  panelsContainer: {
    height: "100%",
    width: "100%"
  },
  panel: {
    backgroundColor: "var(--lightGrey)",
    borderRadius: "var(--borderR)",
    height: "100%",
    width: "100%",
    padding: 10
  }
}));

export const TabPanel = (props) => {
  const classes = useStyles();
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      className={classes.panelsContainer}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={classes.panel}>
          <span>{children}</span>
        </div>
      )}
    </div>
  );
};
