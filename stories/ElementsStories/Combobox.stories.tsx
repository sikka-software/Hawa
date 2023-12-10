import { Controller, useForm } from "react-hook-form";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "@elements/combobox";

import { setLocale } from "../translations/i18n";

const meta = {
  title: "Elements/Combobox",
  component: Combobox
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

let frameworks = [
  {
    value: "next.js",
    label: "Next.js"
  },
  {
    value: "sveltekit",
    label: "SvelteKit"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js"
  },
  {
    value: "remix",
    label: "Remix"
  },
  {
    value: "astro",
    label: "Astro"
  }
];
let roles = [
  {
    _id: "09849846540345",
    label: "Superadmin"
  },
  {
    _id: "013216506546584098",
    label: "Admin"
  },
  {
    _id: "84940984065496",
    label: "Viewer"
  },
  {
    _id: "6401651321",
    label: "User"
  },
  {
    _id: "84040984098",
    label: "Editor"
  }
];
export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    const { handleSubmit, control, formState } = useForm({});

    setLocale(locale);
    return (
      <div className="hawa-flex hawa-w-full hawa-flex-col hawa-items-start hawa-justify-center hawa-gap-2 hawa-p-2">
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Combobox
            label="Role"
            preview={true}
            texts={{
              placeholder: "Select Role"
            }}
            data={roles}
            valueKey={"_id"}
          />
        </div>
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Controller
            control={control}
            name="test"
            render={({ field }) => {
              return (
                <Combobox
                  label="Role"
                  preview={true}
                  texts={{
                    placeholder: "Select Role"
                  }}
                  helperText="this is helpertext"
                  data={roles}
                  valueKey={"_id"}
                />
              );
            }}
          />
        </div>

        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Combobox
            label="Loading"
            isLoading
            texts={{
              placeholder: "Select Role"
            }}
            data={roles}
            valueKey={"_id"}
          />
        </div>
        <div className="hawa-w-full hawa-max-w-md" dir={direction}>
          <Combobox
            label="No Search"
            hideInput
            data={roles}
            valueKey={"_id"}
            texts={{
              placeholder: "Select Role"
            }}
          />

          <Combobox data={roles} valueKey={"_id"} />
        </div>
      </div>
    );
  }
};
