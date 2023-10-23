import type { Meta, StoryObj } from "@storybook/react";
import { Combobox, Input, Select } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Combobox",
  component: Combobox,
  parameters: {
    // layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <h1>{"<Combobox/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

let frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
let roles = [
  {
    _id: "09849846540345",
    label: "Superadmin",
  },
  {
    _id: "013216506546584098",
    label: "Admin",
  },
  {
    _id: "84940984065496",
    label: "Viewer",
  },
  {
    _id: "6401651321",
    label: "User",
  },
  {
    _id: "84040984098",
    label: "Editor",
  },
];
export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals.locale === "ar" ? "ar" : "en";

    setLocale(locale);
    return (
      <div className="hawa-p-2 hawa-flex hawa-flex-row hawa-h-screen  hawa-justify-center hawa-items-center hawa-gap-2 hawa-w-full">
        <div
          className="hawa-max-w-md hawa-w-full"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          {/* <Combobox data={frameworks} /> */}
          <Combobox
            label="Role"
            // defaultValue="84040984098"
            placeholder="Select Role"
            data={roles}
            valueKey={"_id"}
          />
        </div>
        <div
          className="hawa-max-w-md hawa-w-full"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          {/* <Combobox data={frameworks} /> */}
          <Combobox
            label="Loading"
            isLoading
            // defaultValue="84040984098"
            placeholder="Select Role"
            data={roles}
            valueKey={"_id"}
          />
        </div>
      </div>
    );
  },
};
