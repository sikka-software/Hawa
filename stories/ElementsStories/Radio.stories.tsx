import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Radio/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";

    setLocale(locale);
    return (
      <div
        className="hawa-flex w-1/2 hawa-flex-col hawa-gap-10"
        dir={direction}
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Radio
            onChangeTab={() => console.log()}
            defaultValue={"option2"}
            design={"default"}
            labelProps={{ htmlFor: "horizontal" }}
            label="Horizontal orientation"
            helperText="Please pick an option"
            direction={direction}
            options={[
              { label: `Option 1`, value: `option1` },
              { label: `Option 2`, value: `option2`, disabled: true },
              { label: `Option 3`, value: `option3` },
            ]}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Radio
            direction={direction}
            onChangeTab={() => console.log()}
            defaultValue={"option6"}
            design={"default"}
            orientation="vertical"
            labelProps={{ htmlFor: "horizontal" }}
            label="Vertical orientation"
            helperText="Please pick an option"
            options={[
              { label: `Option 4`, value: `option4` },
              { label: `Option 5`, value: `option5`, disabled: true },
              { label: `Option 6`, value: `option6` },
            ]}
          />
        </div>
      </div>
    );
  },
};

export const Tabs: Story = {
  render: () => (
    <div className="hawa-flex w-1/2 hawa-flex-col hawa-gap-10">
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <h1>
          Orientation: <strong>Horizontal</strong>
        </h1>
        <Radio
          onChangeTab={() => console.log()}
          defaultValue={"option2"}
          design={"tabs"}
          // {...args}
          options={[
            { label: `Option 1`, value: `option1` },
            { label: `Option 2`, value: `option2`, disabled: true },
            { label: `Option 3`, value: `option3` },
          ]}
        />
      </div>
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <h1>
          Orientation: <strong>Vertical</strong>
        </h1>
        <Radio
          onChangeTab={() => console.log()}
          defaultValue={"option6"}
          design={"tabs"}
          orientation="vertical"
          options={[
            { label: `Option 4`, value: `option4` },
            { label: `Option 5`, value: `option5`, disabled: true },
            { label: `Option 6`, value: `option6` },
          ]}
        />
      </div>
    </div>
  ),
};

export const Cards: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div
        className="hawa-flex w-1/2 hawa-flex-col hawa-gap-10 hawa-max-w-sm"
        dir={direction}
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Horizontal</strong>
          </h1>
          <Radio
            design={"cards"}
            defaultValue={"option2"}
            onChangeTab={() => console.log()}
            options={[
              {
                label: `Option 1`,
                sublabel: "This is a sublabel under the label",
                value: `option1`,
              },
              {
                label: `Option 2`,
                sublabel: "This is a sublabel under the label",
                value: `option2`,
                disabled: true,
              },
              {
                label: `Option 3`,
                sublabel: "This is a sublabel under the label",
                value: `option3`,
              },
            ]}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Vertical</strong>
          </h1>
          <Radio
            design={"cards"}
            orientation="vertical"
            defaultValue={"option6"}
            onChangeTab={() => console.log()}
            options={[
              {
                label: `Option 4`,
                sublabel: "This is a sublabel under the label",
                value: `option4`,
              },
              {
                label: `Option 5`,
                sublabel: "This is a sublabel under the label",
                value: `option5`,
                disabled: true,
              },
              {
                label: `Option 6`,
                sublabel: "This is a sublabel under the label",
                value: `option6`,
              },
            ]}
          />
        </div>
      </div>
    );
  },
};
export const Bordered: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div
        className="hawa-flex w-1/2 hawa-flex-col hawa-gap-10"
        dir={direction}
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Horizontal</strong>
          </h1>
          <Radio
            design={"bordered"}
            defaultValue={"option2"}
            onChangeTab={() => console.log()}
            direction={direction}
            options={[
              {
                label: `Option 1`,
                sublabel: "This is a sublabel under the label",
                value: `option1`,
              },
              {
                label: `Option 2`,
                sublabel: "This is a sublabel under the label",
                value: `option2`,
                disabled: true,
              },
              {
                label: `Option 3`,
                sublabel: "This is a sublabel under the label",
                value: `option3`,
              },
            ]}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Vertical</strong>
          </h1>
          <Radio
            design={"bordered"}
            orientation="vertical"
            defaultValue={"option6"}
            onChangeTab={() => console.log()}
            direction={direction}
            options={[
              {
                label: `Option 4`,
                sublabel: "This is a sublabel under the label",
                value: `option4`,
              },
              {
                label: `Option 5`,
                sublabel: "This is a sublabel under the label",
                value: `option5`,
                disabled: true,
              },
              {
                label: `Option 6`,
                sublabel: "This is a sublabel under the label",
                value: `option6`,
              },
            ]}
          />
        </div>
      </div>
    );
  },
};
