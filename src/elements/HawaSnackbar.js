import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const HawaSnackbar = (props) => {

  const [position, setPosition] = useState({vertical : "", horizontal : ""});

  useEffect(() => {
    if(props.position){
      const p = props.position.split("-");
      setPosition({vertical : p[0], horizontal : p[1]});
    }
  }, [props.position])

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.duration ? props.duration : null}
      onClose={props.handleClose}
      anchorOrigin={position}
      action={
        <>
          <IconButton
            aria-label="close"
            style={{color: "black"}}
            sx={{ p: 0.5 }}
            onClick={props.handleClose}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
    >
      <Alert icon={false} severity={props.severity} onClose={props.isClosable ? props.handleClose : null}>
        {props.title && <AlertTitle>{props.title}</AlertTitle>}
        {props.text}
      </Alert>
    </Snackbar>
  );
};
