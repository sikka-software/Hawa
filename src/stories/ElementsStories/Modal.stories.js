import React from "react";
import { HawaButton, HawaModal, ModalFooter } from "../../elements";
import useDiscloser from "../../hooks/useDiscloser";

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
  const { isOpen, onClose, onOpen } = useDiscloser(args.open);
  return (
    <div className="h-screen">
      <button
        data-modal-toggle="defaultModal"
        variant="contained"
        // onClick={() => setOpen(!open)}>
        onClick={(e) => {
          console.log("opening modal");
          e.stopPropagation();

          onOpen();
        }}
      >
        Open Dialog
      </button>

      <HawaModal
        modalID="defaultModal"
        title={args.title}
        hideClose={args.hideClose}
        closeOnClickOutside={args.closeOnClickOutside}
        open={isOpen}
        onClose={() => onClose()}
        actions={
          <>
            <HawaButton width="normal">Test</HawaButton>
            <HawaButton width="normal">Test</HawaButton>
          </>
        }
      >
        <div>We are children</div>
      </HawaModal>
    </div>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  title: "Modal Title",
  hideClose: true,
  closeOnClickOutside: true,
  open: true
};
