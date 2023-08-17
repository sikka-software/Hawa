import React from "react";
import { HawaDropdownMenu, HawaMenu } from "../../elements";
import { BsFillPersonFill } from "react-icons/bs";
import { MdBookOnline, MdAccessAlarm } from "react-icons/md";

export default {
  title: "Elements/Menu",
  component: [HawaMenu, HawaDropdownMenu],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the dialog"
    },
    buttonPosition: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      table: {
        defaultValue: "top-left"
      }
    },
    children: {
      control: "object",
      description: "The button element that will open the menu"
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
    <div className="flex h-96 items-center justify-center">
      <HawaMenu {...args}>
        {/* <HawaButton width="normal" variant="contained">
          Open Menu
        </HawaButton> */}
        <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <svg
            className="absolute -left-1 h-10 w-10 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </HawaMenu>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: "bottom-right",
  size: "normal",
  menuItems: [
    [
      {
        label: "Dashboard",
        action: () => console.log("going to dashboard"),
        disabled: false
      },
      {
        label: "Billing",
        action: () => console.log("going to billing"),
        disabled: true
      },
      {
        label: "Settings",
        action: () => console.log("going to settings")
      }
    ]
  ]
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  buttonLabel: "Sign in via Google",
  position: "bottom-right",

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
  position: "bottom-right",

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
  direction: "ltr",
  size: "small",
  logo: "google",
  withHeader: false,
  headerTitle: "Zakher Masri",
  position: "bottom-left",

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
  position: "bottom-right",

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
        icon: <MdAccessAlarm />,
        label: "Logout",
        action: () => console.log("going to settings")
      },
      {
        icon: <BsFillPersonFill />,
        isButton: true,
        label: "عربي",
        action: () => console.log("going to dashboard")
      }
    ]
  ]
};

const DropdownTemplate = (args) => {
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center p-4">
      <HawaDropdownMenu direction={args.direction}>
        {/* <HawaButton width="normal" variant="contained">
          Open Menu
        </HawaButton> */}
        <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
          <svg
            className="absolute -left-1 h-10 w-10 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </HawaDropdownMenu>
    </div>
  );
};

export const Dropdown = DropdownTemplate.bind({});
Dropdown.args = {
  direction: "rtl"
};
