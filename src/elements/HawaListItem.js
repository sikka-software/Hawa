import React from "react";
import { ListItemButton, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

export const HawaListItem = (props) => {
  return (
    <ListItemButton
      variant={props.selected && "clicked"}
      key={props.text}
      sx={{
        minHeight: 48,
        justifyContent: props.open ? "initial" : "center",
        px: 2.5
      }}
    >
      <InboxIcon />
      <div style={{ width: 20 }} />
      <ListItemText primary={props.text} sx={{ opacity: props.open ? 1 : 0 }} />
    </ListItemButton>
  );
};