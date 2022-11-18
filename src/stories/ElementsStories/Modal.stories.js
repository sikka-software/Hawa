import React, { useState } from "react";
import { HawaButton, HawaModal, ModalFooter } from "../../elements";

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

const Template = (args) => {
  const [open, setOpen] = useState(args.open);
  return (
    <>
      <button
        data-modal-toggle="defaultModal"
        variant="contained"
        // onClick={() => setOpen(!open)}>
        onClick={() => setOpen(true)}
      >
        Open Dialog
      </button>

      <HawaModal
        modalID="defaultModal"
        title={args.title}
        hideClose={args.hideClose}
        closeOnClickOutside={args.closeOnClickOutside}
        open={open}
        onClose={() => setOpen(!open)}
        actions={
          <>
            <HawaButton width="normal">Test</HawaButton>
            <HawaButton width="normal">Test</HawaButton>
          </>
        }
      >
        <div>We are children</div>
      </HawaModal>
    </>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  title: "Modal Title",
  hideClose: false,
  closeOnClickOutside: true,
  open: false
};
