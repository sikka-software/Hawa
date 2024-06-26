import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "@sikka/hawa/elements/combobox";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

let roles = [
  { _id: "09849846540345", label: "Superadmin" },
  { _id: "013216506546584098", label: "Admin" },
  { _id: "84940984065496", label: "Viewer" },
  { _id: "6401651321", label: "User" },
  { _id: "84040984098", label: "Editor" },
];
let roles2 = [
  { _id: "09849846540345", label: { en: "Superadmin", ar: "سوبر ادمن" } },
  { _id: "013216506546584098", label: { en: "Admin", ar: "ادمن" } },
  { _id: "84940984065496", label: { en: "Viewer", ar: "فيوير" } },
  { _id: "6401651321", label: { en: "User", ar: "يوسر" } },
  { _id: "84040984098", label: { en: "Editor", ar: "اديتور" } },
];

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    setLocale(locale);
    return (
      <div className="hawa-flex hawa-w-full hawa-flex-col hawa-items-start hawa-justify-center hawa-gap-2 hawa-p-2">
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Combobox
            label="Role"
            data={roles}
            preview={true}
            valueKey={"_id"}
            texts={{ placeholder: "Select Role" }}
          />
        </div>
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Combobox
            label="Role"
            data={roles2}
            // preview={true}
            // labelKey={'label.ar'}
            labelKey={"label.ar"}
            valueKey={"_id"}
            helperText="this is helpertext"
            texts={{ placeholder: "Select Role" }}
          />
        </div>
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Combobox
            isLoading
            data={roles}
            label="Loading"
            valueKey={"_id"}
            texts={{ placeholder: "Select Role" }}
          />
        </div>
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Combobox
            hideInput
            data={roles}
            valueKey={"_id"}
            label="No Search"
            direction={direction}
            renderSelected={(item) => (
              <div className="hawa-flex hawa-flex-col hawa-text-start hawa-gap-0">
                <span className="hawa-text-xs">Custom:{item._id}</span>
              </div>
            )}
            texts={{ placeholder: "Select Role" }}
          />
          <Combobox
            label="With Search"
            data={roles}
            valueKey="_id"
            direction={direction}
          />
        </div>
        <div
          className="hawa-w-full hawa-max-w-md hawa-flex hawa-flex-col hawa-gap-4"
          dir={direction}
        >
          <h1>Custom Options</h1>
          <Combobox
            hideInput
            data={roles}
            renderOption={(option) => (
              <div className="hawa-flex hawa-flex-col hawa-gap-0">
                <span>{option.label}</span>
                <span className="hawa-text-xs">{option._id}</span>
              </div>
            )}
            valueKey={"_id"}
            label="No Search"
            direction={direction}
            texts={{ placeholder: "Select Role" }}
          />
          <Combobox
            hideInput
            data={[]}
            valueKey={"_id"}
            label="No Options"
            direction={direction}
            texts={{ placeholder: "Select Role" }}
          />
        </div>
      </div>
    );
  },
};
