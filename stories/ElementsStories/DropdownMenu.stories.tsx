import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import {
  AlignVerticalDistributeStart,
  AtSign,
  Bell,
  FolderArchive,
  FolderOpen,
  Home,
  MedalIcon
} from "lucide-react";

import { Button } from "@elements/button";
import { Chip } from "@elements/chip";
import { DropdownMenu, DropdownMenuRadio } from "@elements/dropdownMenu";
import { Radio } from "@elements/radio";
import { Switch } from "@elements/switch";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/DropdownMenu",
  component: DropdownMenu
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const items = [
  {
    label: "Default Shortcut",
    value: "item1",
    onMiddleClick: (e: any) => console.log("middle clicked ", e),
    icon: <Home className="hawa-icon" />,
    shortcut: <span>shift + E</span>
  },

  {
    label: "Custom Shortcut",
    value: "item_badged",
    onMiddleClick: (e: any) => console.log("middle clicked ", e),
    icon: <Bell className="hawa-icon" />,
    badged: true,
    end: <span>shift + E</span>
  },
  {
    label: "With Badge",
    value: "item_badged",
    onMiddleClick: (e: any) => console.log("middle clicked ", e),
    icon: <Bell className="hawa-icon" />,
    badged: true
  },
  {
    label: "Disabled",
    value: "item2",
    icon: <FolderOpen className="hawa-icon" />,
    end: <Switch size="sm" />,
    presist: true,
    disabled: true
  },
  {
    label: "Small Switch",
    value: "item2",
    icon: <FolderOpen className="hawa-icon" />,
    end: <Switch size="sm" />,
    presist: true
  },

  {
    end: (
      <Radio
        width="full"
        design="tabs"
        options={[
          {
            value: "ar",
            label: (
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="hawa-icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
              </svg>
            )
          },
          {
            value: "en",
            label: (
              <svg
                fill="currentColor"
                focusable="false"
                aria-hidden="true"
                className="hawa-icon"
                viewBox="0 0 24 24"
              >
                <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path>
              </svg>
            )
          }
        ]}
      />
    ),
    presist: true
  },
  {
    label: "With Switch",
    value: "item2",
    icon: <FolderOpen className="hawa-icon" />,
    end: <Switch />,
    presist: true
  },
  {
    itemType: "separator"
  },
  {
    label: "Label Here",
    value: "item4",
    itemType: "label"
  },
  {
    label: "Item 2",
    value: "item2",
    icon: <FolderArchive className="hawa-icon" />,
    end: <Switch />,
    presist: true
  },
  {
    presist: true,
    end: (
      <Radio
        width="full"
        // onChange={() => switchLanguage()}
        design="tabs"
        options={[
          { value: "ar", label: "عربي" },
          { value: "en", label: "English" }
        ]}
      />
    )
  },
  {
    label: "Item 3",
    value: "item3",
    onMiddleClick: () => console.log("test"),
    icon: <AtSign className="hawa-icon" />,
    subitems: [
      {
        label: "subitem 1",
        value: "subitem 1",
        onMiddleClick: (e: any) => console.log("test", e),
        icon: <MedalIcon className="hawa-icon" />
      },
      {
        label: "subitem 2",
        value: "subitem 2",
        onMiddleClick: () => console.log("test"),
        icon: <AlignVerticalDistributeStart className="hawa-icon" />
      }
    ]
  },
  {
    label: "Item 3",
    value: "item3",
    icon: <AtSign className="hawa-icon" />,
    subitems: [
      {
        label: "subitem 1",
        value: "subitem 1",
        icon: <MedalIcon className="hawa-icon" />
      },
      {
        label: "subitem 2",
        value: "subitem 2",
        icon: <AlignVerticalDistributeStart className="hawa-icon" />
      }
    ]
  }
];
const items2 = [
  {
    itemType: "custom",
    content: (
      <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2 hawa-p-2 hover:hawa-bg-muted">
        <FolderOpen />
        <div className="hawa-flex hawa-flex-col hawa-justify-center ">
          <div className="hawa-text-lg hawa-font-bold">Custom Title</div>
          <div className="hawa-text-sm">Subtitle of this menu item here</div>
        </div>
      </div>
    )
  }
];

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    const handleItemSelect = (value: any) => {
      console.log("Selected item:", value);
    };

    return (
      <div className="hawa-flex  hawa-flex-1 hawa-flex-col ">
        <div className="hawa-flex hawa-flex-1 hawa-flex-col">
          <div className="hawa-flex hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-6 hawa-p-3">
            <DropdownMenu
              trigger={<Button>Open Menu</Button>}
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>
      </div>
    );
  }
};
export const Direction: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    const handleItemSelect = (value: any) => {
      console.log("Selected item:", value);
    };

    return (
      <div className="hawa-flex  hawa-flex-1 hawa-flex-col ">
        <div className="hawa-flex hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-6 hawa-p-3">
          <DropdownMenu
            trigger={<Button>LTR Menu</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />
          <DropdownMenu
            direction={"rtl"}
            trigger={<Button>RTL Menu</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
    );
  }
};
export const Sizes: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    const handleItemSelect = (value: any) => {
      console.log("Selected item:", value);
    };

    return (
      <div className="hawa-flex  hawa-flex-1 hawa-flex-col ">
        <div className="hawa-flex hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-6 hawa-p-3">
          <DropdownMenu
            // width="parent"
            trigger={<Button>Default Size</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />
          <DropdownMenu
            // width="parent"
            size="sm"
            trigger={<Button>Mini Size</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>
        <div className="hawa-flex hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-6 hawa-p-3">
          <DropdownMenu
            width="parent"
            trigger={<Button>Menu Width Equal to Trigger Button</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
    );
  }
};
export const WithHeader: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    const handleItemSelect = (value: any) => {
      console.log("Selected item:", value);
    };

    return (
      <div className="hawa-flex  hawa-flex-1 hawa-flex-col ">
        <div className="hawa-flex hawa-w-full hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-6 hawa-p-3">
          <DropdownMenu
            header={
              <div className="hawa-p-2">
                <div className="hawa-text-lg hawa-font-bold">
                  Sikka Software
                </div>
                <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2">
                  <div className="hawa-text-sm">Est. 2015</div>
                  <Chip size="small" label="Good" />
                </div>
              </div>
            }
            open={true}
            trigger={<Button>Open Menu</Button>}
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
    );
  }
};
export const RadioMenu: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    const handleItemSelect = (value: any) => {
      console.log("Selected item:", value);
    };

    const [showPopup, setShowPopup] = useState(false);
    const [inputLang, setInputLang] = useState("en");
    return (
      <DropdownMenuRadio
        label="Input Language"
        value={inputLang}
        onValueChange={setInputLang}
        options={[
          { label: "Arabic", value: "ar" },
          { label: "English", value: "en" }
        ]}
        trigger={
          <Button onClick={() => setShowPopup(!showPopup)}>
            Open Radio Menu
          </Button>
        }
      />
    );
  }
};
