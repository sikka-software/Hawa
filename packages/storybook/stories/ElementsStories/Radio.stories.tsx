import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "@sikka/hawa/elements/radio";

import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Radio",
  component: Radio,
  parameters: { layout: "centered" }
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
        className="hawa-flex hawa-flex-col hawa-gap-10 w-1/2"
        dir={direction}
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Radio
            name="default"
            design="default"
            defaultValue="option2"
            labelProps={{ htmlFor: "horizontal" }}
            label="Horizontal orientation"
            helperText="Please pick an option"
            direction={direction}
            options={[
              { label: `Option 1`, value: `option1` },
              { label: `Option 2`, value: `option2`, disabled: true },
              { label: `Option 3`, value: `option3` }
            ]}
            {...args}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <Radio
            direction={direction}
            name="default"
            design="default"
            defaultValue="option6"
            orientation="vertical"
            labelProps={{ htmlFor: "horizontal" }}
            label="Vertical orientation"
            helperText="Please pick an option"
            options={[
              { label: `Option 4`, value: `option4` },
              { label: `Option 5`, value: `option5`, disabled: true },
              { label: `Option 6`, value: `option6` }
            ]}
            {...args}
          />
        </div>
      </div>
    );
  },
  argTypes: { onChange: { action: "onChange" } }
};

export const Tabs: Story = {
  parameters: { layout: "padded" },
  render: (args: any) => (
    <div className="hawa-relative hawa-flex hawa-flex-row hawa-gap-4 hawa-space-x-4">
      <div className="hawa-max-w-xs">
        <div className="hawa-pb-4 hawa-text-center hawa-text-2xl hawa-font-bold">
          Extra Small
        </div>

        <div className="hawa-flex hawa-flex-col hawa-gap-10 w-1/2">
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Horizontal</strong>
            </h1>
            <Radio
              size="xs"
              name="tabs"
              design="tabs"
              defaultValue="option2"
              options={[
                { label: `Option 1`, value: `option1` },
                { label: `Option 2`, value: `option2`, disabled: true },
                { label: `Option 3`, value: `option3` }
              ]}
              {...args}
            />
          </div>
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Vertical</strong>
            </h1>
            <Radio
              size="xs"
              name="tabs"
              design="tabs"
              defaultValue="option6"
              orientation="vertical"
              options={[
                { label: `Option 4`, value: `option4` },
                { label: `Option 5`, value: `option5`, disabled: true },
                { label: `Option 6`, value: `option6` }
              ]}
              {...args}
            />
          </div>
        </div>
      </div>
      <div className="hawa-mx-2 hawa-w-px hawa-bg-gray-300"></div>

      <div className="hawa-max-w-xs">
        <div className="hawa-pb-4 hawa-text-center hawa-text-2xl hawa-font-bold">
          Small
        </div>

        <div className="hawa-flex hawa-flex-col hawa-gap-10 w-1/2">
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Horizontal</strong>
            </h1>
            <Radio
              size="sm"
              name="tabs"
              design="tabs"
              defaultValue="option2"
              options={[
                { label: `Option 1`, value: `option1` },
                { label: `Option 2`, value: `option2`, disabled: true },
                { label: `Option 3`, value: `option3` }
              ]}
              {...args}
            />
          </div>
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Vertical</strong>
            </h1>
            <Radio
              size="sm"
              name="tabs"
              design="tabs"
              defaultValue="option6"
              orientation="vertical"
              options={[
                { label: `Option 4`, value: `option4` },
                { label: `Option 5`, value: `option5`, disabled: true },
                { label: `Option 6`, value: `option6` }
              ]}
              {...args}
            />
          </div>
        </div>
      </div>
      <div className="hawa-mx-2 hawa-w-px hawa-bg-gray-300"></div>

      <div className="hawa-max-w-xs">
        <div className="hawa-pb-4 hawa-text-center hawa-text-2xl hawa-font-bold">
          Default
        </div>

        <div className="hawa-flex hawa-flex-col hawa-gap-10 w-1/2">
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Horizontal</strong>
            </h1>
            <Radio
              name="tabs"
              design="tabs"
              defaultValue="option2"
              options={[
                { label: `Option 1`, value: `option1` },
                { label: `Option 2`, value: `option2`, disabled: true },
                { label: `Option 3`, value: `option3` }
              ]}
              {...args}
            />
          </div>
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Vertical</strong>
            </h1>
            <Radio
              name="tabs"
              design="tabs"
              defaultValue="option6"
              orientation="vertical"
              options={[
                { label: `Option 4`, value: `option4` },
                { label: `Option 5`, value: `option5`, disabled: true },
                { label: `Option 6`, value: `option6` }
              ]}
              {...args}
            />
          </div>
        </div>
      </div>
      <div className="hawa-mx-2 hawa-w-px hawa-bg-gray-300"></div>

      <div className="hawa-max-w-xs">
        <div className="hawa-pb-4 hawa-text-center hawa-text-2xl hawa-font-bold">
          Large
        </div>

        <div className="hawa-flex hawa-flex-col hawa-gap-10 w-1/2">
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Horizontal</strong>
            </h1>
            <Radio
              size="lg"
              name="tabs"
              design="tabs"
              defaultValue="option2"
              options={[
                { label: `Option 1`, value: `option1` },
                { label: `Option 2`, value: `option2`, disabled: true },
                { label: `Option 3`, value: `option3` }
              ]}
              {...args}
            />
          </div>
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <h1>
              Orientation: <strong>Vertical</strong>
            </h1>
            <Radio
              size="lg"
              name="tabs"
              design="tabs"
              defaultValue="option6"
              orientation="vertical"
              options={[
                { label: `Option 4`, value: `option4` },
                { label: `Option 5`, value: `option5`, disabled: true },
                { label: `Option 6`, value: `option6` }
              ]}
              {...args}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  argTypes: { onChange: { action: "onChange" } }
};
export const Cards: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div
        className="hawa-flex hawa-max-w-sm hawa-flex-col hawa-gap-10 w-1/2"
        dir={direction}
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Horizontal</strong>
          </h1>
          <Radio
            name="cards"
            design="cards"
            defaultValue="option2"
            options={[
              {
                label: `Option 1`,
                sublabel: "This is a sublabel under the label",
                value: `option1`
              },
              {
                label: `Option 2`,
                sublabel: "This is a sublabel under the label",
                value: `option2`,
                disabled: true
              },
              {
                label: `Option 3`,
                sublabel: "This is a sublabel under the label",
                value: `option3`
              }
            ]}
            {...args}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Vertical</strong>
          </h1>
          <Radio
            name="cards"
            design="cards"
            orientation="vertical"
            defaultValue="option6"
            options={[
              {
                label: `Option 4`,
                sublabel: "This is a sublabel under the label",
                value: `option4`
              },
              {
                label: `Option 5`,
                sublabel: "This is a sublabel under the label",
                value: `option5`,
                disabled: true
              },
              {
                label: `Option 6`,
                sublabel: "This is a sublabel under the label",
                value: `option6`
              }
            ]}
            {...args}
          />
        </div>
      </div>
    );
  },
  argTypes: { onChange: { action: "onChange" } }
};
export const Bordered: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const direction = locale === "ar" ? "rtl" : "ltr";

    return (
      <div
        className="hawa-flex hawa-flex-col hawa-gap-10 w-1/2"
        dir={direction}
      >
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Horizontal</strong>
          </h1>
          <Radio
            name="bordered"
            design="bordered"
            defaultValue="option2"
            direction={direction}
            options={[
              {
                label: `Option 1`,
                sublabel: "This is a sublabel under the label",
                value: `option1`
              },
              {
                label: `Option 2`,
                sublabel: "This is a sublabel under the label",
                value: `option2`,
                disabled: true
              },
              {
                label: `Option 3`,
                sublabel: "This is a sublabel under the label",
                value: `option3`
              }
            ]}
            {...args}
          />
        </div>
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <h1>
            Orientation: <strong>Vertical</strong>
          </h1>
          <Radio
            name="bordered"
            design="bordered"
            orientation="vertical"
            defaultValue="option6"
            direction={direction}
            options={[
              {
                label: `Option 4`,
                sublabel: "This is a sublabel under the label",
                value: `option4`
              },
              {
                label: `Option 5`,
                sublabel: "This is a sublabel under the label",
                value: `option5`,
                disabled: true
              },
              {
                label: `Option 6`,
                sublabel: "This is a sublabel under the label",
                value: `option6`
              }
            ]}
            {...args}
          />
        </div>
      </div>
    );
  },
  argTypes: { onChange: { action: "onChange" } }
};
