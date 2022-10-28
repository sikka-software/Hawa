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
      <button variant="contained" onClick={() => setOpen(!open)}>
        Open Dialog
      </button>

      <HawaDialog
        title="Dialog Test"
        hideClose={args.hideClose}
        open={open}
        onClose={() => setOpen(!open)}
        actions={
          <>
            <button variant="outlined">Button</button>
            <button variant="danger">Button</button>
          </>
        }
      >
        <div>We are children</div>
      </HawaDialog>
    </>
  );
};
