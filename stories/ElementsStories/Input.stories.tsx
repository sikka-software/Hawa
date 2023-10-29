import type { Meta, StoryObj } from "@storybook/react";
import { Button, ColorPicker, Input } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const meta = {
  title: "Elements/Inputs/Input",
  component: Input,
  parameters: {
    // backgrounds: {
    //   default: "offwhite",
    //   values: [{ name: "offwhite", value: "#ededed" }],
    // },
    // layout: "centered",
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

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return <div>Input story</div>;
};
export const Default: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-row hawa-gap-4 hawa-max-w-md">
      {/* <ColorPicker label="Random color" color={"#f39f39"} /> */}
      <Input label="Input Field" />
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
        <Input label={"First Name"} preview={preview} value={"Fulan"} />
        <Input label={"Middle Name"} preview={preview} value={"Fulani"} />
        <Input label={"Last Name"} preview={preview} value={"Al-Fulani"} />
        <Input label={"Username"} preview={preview} value={"fulan"} />
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
        <Input label={"First Name"} isLoading={loading} value={"Fulan"} />
        <Input label={"Middle Name"} isLoading={loading} value={"Fulani"} />
        <Input label={"Last Name"} isLoading={loading} value={"Al-Fulani"} />
        <Input label={"Username"} isLoading={loading} value={"fulan"} />
      </div>
    );
  },
};
export const Examples: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const { handleSubmit, control, formState } = useForm({});

    return (
      <div
        className="hawa-grid hawa-grid-cols-1 hawa-gap-4 md:hawa-grid-cols-2 lg:hawa-grid-cols-4"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              dir={"ltr"}
              inputProps={{ className: "hawa-text-right" }}
              label={"Email"}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <Input
              hint="Only underscore and dash are acccepted"
              type={"text"}
              isRequired={true}
              label={t("username")}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input type={"password"} label={t("password")} {...field} />
          )}
        />
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <Input type={"text"} label={t("first-name")} {...field} />
          )}
        />
      </div>
    );
  },
};
