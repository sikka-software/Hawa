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
  render: () => {
    const [text, setText] = useState("");
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div className="hawa-flex hawa-flex-row hawa-gap-4 ">
          <Input label="Input Field" placeholder={"Bismillah"} />
          <Input label="Disabled" disabled placeholder={"Bismillah"} />
        </div>
        <div className="hawa-flex hawa-flex-row hawa-gap-4 ">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            showCount
            maxLength={100}
            label="With Count (bottom)"
            placeholder={"Bismillah"}
          />
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            showCount
            countPosition="center"
            maxLength={100}
            label="With Count (center)"
            placeholder={"Bismillah"}
          />
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            showCount
            countPosition="top"
            maxLength={100}
            label="With Count (top)"
            placeholder={"Bismillah"}
          />
        </div>
      </div>
    );
  },
};
export const PreviewMode: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);

    const [preview, setPreview] = useState(false);
    return (
      <div
        className="hawa-flex hawa-flex-col hawa-gap-4 hawa-max-w-md"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Button onClick={() => setPreview(!preview)}>
          {/* {preview ? "Disable" : "Enable"} Preview */}
          {preview ? t("enable-preview") : t("disable-preview")}
        </Button>
        <Input
          label={t("first-name")}
          preview={preview}
          placeholder={"Fulan"}
        />
        <Input
          label={t("last-name")}
          preview={preview}
          placeholder={"Al-Fulani"}
        />
        <Input
          label={t("email")}
          preview={preview}
          placeholder={"contact@sikka.io"}
        />
        <Input label={"Username"} preview={preview} placeholder={"fulan"} />
        <Input
          label={"Hide Line"}
          preview={preview}
          placeholder={"fulan"}
          hideSeparator
        />
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
          startIcon={<Search className="hawa-text-gray-500 hawa-icon" />}
        />
        <Input
          dir={direction}
          label={"With End Icon"}
          placeholder={"Fulan"}
          endIcon={<EyeIcon className="hawa-text-gray-500" />}
        />
        <Input
          dir={direction}
          label={"With End Icon & Start Icon"}
          placeholder={"Fulan"}
          startIcon={<Lock className="hawa-text-gray-500 hawa-icon" />}
          endIcon={<Lock className="hawa-text-gray-500 hawa-icon" />}
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
          type={"text"}
          label={t("username")}
          labelProps={{
            hint: "Only underscore and dash are acccepted",
            required: true,
          }}
        />

        <Input type={"password"} label={t("password")} />

        <Input type={"text"} label={t("first-name")} />
      </div>
    );
  },
};
