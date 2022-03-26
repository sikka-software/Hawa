import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, hideClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {!hideClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};
export function HawaDialog(props) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog {...props} variant="main">
      <BootstrapDialogTitle onClose={props.onClose} hideClose={props.hideClose}>
        {props.title}
      </BootstrapDialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>{props.actions}</DialogActions>
    </Dialog>
  );
}
