import Button from "@mui/material/Button";
import React, { useState } from "react";
import { HawaDialog } from "../../layout";

export default {
  title: "Layout/Dialog",
  component: [HawaDialog],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the dialog"
    },
    children: {
      control: "object",
      description:
        "The children element that will be contained by the dialog component"
    },
    actions: {
      control: "object",
      description:
        "HTML elements that will act as the dialog actions. Preferebly use buttons"
    },
    hideClose: {
      control: "boolean",
      description: "A boolean to hide the X icon",
      table: {
        defaultValue: { summary: true }
      }
    }
  }
};

export const Dialog = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Open Dialog
      </Button>

      <HawaDialog
        title="Dialog Test"
        hideClose={args.hideClose}
        open={open}
        onClose={() => setOpen(!open)}
        actions={
          <>
            <Button variant="outlined">Button</Button>
            <Button variant="danger">Button</Button>
          </>
        }
      >
        <div>We are children</div>
      </HawaDialog>
    </>
  );
};
