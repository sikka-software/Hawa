import React from "react";
import useDiscloser from "../../hooks/useDiscloser";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../elements";

export default {
  title: "Elements/Dialog",
  component: [Dialog]
};

const Template = (args) => {
  return (
    <div className="h-screen">
      <Dialog>
        <DialogTrigger>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="destructive">Yes, I am</Button>
            <Button variant="outline">Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const DialogStory = Template.bind({});
DialogStory.args = {
  title: "Modal Title",
  hideClose: true,
  closeOnClickOutside: true,
  open: true
};

DialogStory.storyName = "Dialog";
