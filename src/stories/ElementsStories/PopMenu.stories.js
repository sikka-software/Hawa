import Button from "@mui/material/Button";
import React, { useState } from "react";
import { HawaPopMenu } from "../../elements/HawaPopMenu";
import { Person, BookOnline, AccessAlarms } from "@mui/icons-material";

export default {
  title: "Elements/PopMenu",
  component: [HawaPopMenu],
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

export const PopMenu = (args) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  return (
    <>
      <Button
        variant="contained"
        onClick={(e) => setAnchorElUser(e.currentTarget)}
      >
        Open Menu
      </Button>
      <HawaPopMenu
        anchor={anchorElUser}
        handleClose={(e) => setAnchorElUser(null)}
        menuItems={[
          {
            icon: Person,
            label: "test1",
            action: () => console.log("going to test1")
          },
          {
            icon: BookOnline,
            label: "test2",
            action: () => console.log("going to test2")
          },
          {
            icon: AccessAlarms,
            label: "test3",
            action: () => console.log("going to test3")
          }
        ]}
      />
    </>
  );
};
