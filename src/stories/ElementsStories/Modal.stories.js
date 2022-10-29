import React, { useState } from "react";
import { HawaModal } from "../../elements";

export default {
  title: "Elements/Modal",
  component: [HawaModal],
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

export const Modal = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        data-modal-toggle="defaultModal"
        variant="contained"
        // onClick={() => setOpen(!open)}>
      >
        Open Dialog
      </button>

      <HawaModal
        modalID="defaultModal"
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
      </HawaModal>
    </>
  );
};
