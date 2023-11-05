import type { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Loading } from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";
import { EyeIcon } from "../../components/icons/InputIcons";
import { Lock, Search } from "lucide-react";

const meta = {
  title: "Elements/Inputs/Input",
  component: Input,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Input/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-max-w-md">
      <Input label="Input Field" placeholder={"Bismillah"} />
    </div>
  ),
};
export const PreviewMode: Story = {
  render: () => {
    const [preview, setPreview] = useState(false);
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4 hawa-max-w-md">
        <Button onClick={() => setPreview(!preview)}>
          {preview ? "Disable" : "Enable"} Preview
        </Button>
        <Input label={"First Name"} preview={preview} placeholder={"Fulan"} />
        <Input label={"Middle Name"} preview={preview} placeholder={"Fulani"} />
        <Input
          label={"Last Name"}
          preview={preview}
          placeholder={"Al-Fulani"}
        />
        <Input label={"Username"} preview={preview} placeholder={"fulan"} />
      </div>
    );
  },
};
export const LoadingMode: Story = {
  render: () => {
    const [loading, setLoading] = useState(true);
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4 hawa-max-w-md">
        <Button onClick={() => setLoading(!loading)}>
          {loading ? "Disable" : "Enable"} Loading
        </Button>
        <Input label={"First Name"} isLoading={loading} placeholder={"Fulan"} />
        <Input
          label={"Middle Name"}
          isLoading={loading}
          placeholder={"Fulani"}
        />
        <Input
          label={"Last Name"}
          isLoading={loading}
          placeholder={"Al-Fulani"}
        />
        <Input label={"Username"} isLoading={loading} placeholder={"fulan"} />
      </div>
    );
  },
};
export const WithIcons: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div
        className="hawa-flex hawa-flex-col hawa-gap-4 hawa-max-w-md"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Input
          dir={direction}
          label={"With Start Icon"}
          placeholder={"Fulan"}
          startIcon={
            <div className="hawa-cursor-pointer">
              <Search className="hawa-text-gray-500 hawa-icon" />
            </div>
          }
        />
        <Input
          dir={direction}
          label={"With End Icon"}
          placeholder={"Fulan"}
          endIcon={
            <div className="hawa-cursor-pointer">
              <EyeIcon className="hawa-text-gray-500" />
            </div>
          }
        />
        <Input
          dir={direction}
          label={"With End Icon & Start Icon"}
          placeholder={"Fulan"}
          startIcon={
            <div className="hawa-cursor-pointer">
              <Lock className="hawa-text-gray-500 hawa-icon" />
            </div>
          }
          endIcon={
            <div className="hawa-cursor-pointer">
              <Lock className="hawa-text-gray-500 hawa-icon" />
            </div>
          }
        />
        <Input
          dir={direction}
          label={"Loading End Icon"}
          placeholder={"Fulan"}
          endIcon={<Loading size="button" />}
        />
      </div>
    );
  },
};
export const Examples: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);

    return (
      <div
        className="hawa-flex hawa-flex-col hawa-gap-4 hawa-max-w-md"
        dir={direction}
      >
        <Input
          dir={"ltr"}
          inputProps={{ className: "hawa-text-right" }}
          label={"Email"}
        />

        <Input
          hint="Only underscore and dash are acccepted"
          type={"text"}
          isRequired={true}
          label={t("username")}
        />

        <Input type={"password"} label={t("password")} />

        <Input type={"text"} label={t("first-name")} />
      </div>
    );
  },
};
