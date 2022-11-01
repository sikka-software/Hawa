import React, { useState } from "react";
import { HawaMenu } from "../../elements";
import { BsFillPersonFill } from "react-icons/bs";
import { MdBookOnline, MdAccessAlarm } from "react-icons/md";

export default {
  title: "Elements/Menu",
  component: [HawaMenu],
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
  return (
    <>
      <HawaMenu
        {...args}
        popMenuID={"test"}
        handleClose={(e) => setAnchorElUser(null)}
        menuItems={args.menuItems}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    [
      {
        icon: BsFillPersonFill,
        label: "Dashboard",
        action: () => console.log("going to dashboard")
      },
      {
        icon: MdBookOnline,
        label: "Billing",
        action: () => console.log("going to billing")
      },
      {
        icon: MdAccessAlarm,
        label: "Settings",
        action: () => console.log("going to settings")
      }
    ]
  ]
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  buttonLabel: "Sign in via Google",
  logo: "google",
  menuItems: [
    [
      {
        icon: BsFillPersonFill,
        label: "Dashboard",
        action: () => console.log("going to dashboard")
      },
      {
        icon: MdBookOnline,
        label: "Billing",
        action: () => console.log("going to billing")
      },
      {
        icon: MdAccessAlarm,
        label: "Settings",
        action: () => console.log("going to settings")
      }
    ],
    [
      {
        icon: BsFillPersonFill,
        label: "Arabic",
        action: () => console.log("going to dashboard")
      },
      {
        icon: MdBookOnline,
        label: "Feedback",
        action: () => console.log("going to billing")
      },
      {
        icon: MdAccessAlarm,
        label: "Logout",
        action: () => console.log("going to settings")
      }
    ]
  ]
};
export const WithHeader = Template.bind({});
WithHeader.args = {
  buttonLabel: "Sign in via Google",
  logo: "google",
  withHeader: true,
  headerTitle: "Zakher Masri",
  headerSubtitle: "zakher@sikka.io",
  menuItems: [
    [
      {
        icon: BsFillPersonFill,
        label: "Dashboard",
        action: () => console.log("going to dashboard")
      },
      {
        icon: MdBookOnline,
        label: "Billing",
        action: () => console.log("going to billing")
      },
      {
        icon: MdAccessAlarm,
        label: "Settings",
        action: () => console.log("going to settings")
      }
    ],
    [
      {
        icon: BsFillPersonFill,
        label: "عربي",
        action: () => console.log("going to dashboard")
      },

      {
        icon: MdAccessAlarm,
        label: "Logout",
        action: () => console.log("going to settings")
      }
    ]
  ]
};
export const WithIcons = Template.bind({});
WithIcons.args = {
  buttonLabel: "Sign in via Google",
  logo: "google",
  withHeader: true,
  withIcons: true,
  headerTitle: "Zakher Masri",
  headerSubtitle: "zakher@sikka.io",
  menuItems: [
    [
      {
        icon: <BsFillPersonFill />,
        label: "Dashboard",
        action: () => console.log("going to dashboard")
      },
      {
        icon: <MdBookOnline />,
        label: "Billing",
        action: () => console.log("going to billing")
      },
      {
        icon: <MdAccessAlarm />,
        label: "Settings",
        action: () => console.log("going to settings")
      }
    ],
    [
      {
        icon: <BsFillPersonFill />,
        label: "عربي",
        action: () => console.log("going to dashboard")
      },

      {
        icon: <MdAccessAlarm />,
        label: "Logout",
        action: () => console.log("going to settings")
      }
    ]
  ]
};
export const WithButton = Template.bind({});
WithButton.args = {
  buttonLabel: "Sign in via Google",
  logo: "google",
  withHeader: true,
  withIcons: true,
  headerTitle: "Zakher Masri",
  headerSubtitle: "zakher@sikka.io",
  menuItems: [
    [
      {
        icon: <BsFillPersonFill />,
        label: "Dashboard",
        action: () => console.log("going to dashboard")
      },
      {
        icon: <MdBookOnline />,
        label: "Billing",
        action: () => console.log("going to billing")
      },
      {
        icon: <MdAccessAlarm />,
        label: "Settings",
        action: () => console.log("going to settings")
      }
    ],
    [
      {
        icon: <BsFillPersonFill />,
        button: true,
        label: "عربي",
        action: () => console.log("going to dashboard")
      },

      {
        icon: <MdAccessAlarm />,
        label: "Logout",
        action: () => console.log("going to settings")
      }
    ]
  ]
};
