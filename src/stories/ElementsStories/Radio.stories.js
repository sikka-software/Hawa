import React from "react";

import { HawaRadio } from "../../elements";
import { FiSettings, FiActivity, FiAirplay, FiSave } from "react-icons/fi";
import { t, setLocale } from "../../translations/i18n";

export default {
  title: "Elements/Radio",
  component: HawaRadio
};

export const Default = (args) => {
  return (
    <div className="flex w-1/2 flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1>Orientation: Horizontal</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option2"}
          design={"default"}
          // {...args}
          options={[
            { label: `Option 1`, value: `option1` },
            { label: `Option 2`, value: `option2`, disabled: true },
            { label: `Option 3`, value: `option3` }
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>Orientation: Vertical</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option6"}
          // options={args.options}
          design={"default"}
          orientation="vertical"
          // {...args}
          options={[
            { label: `Option 4`, value: `option4` },
            { label: `Option 5`, value: `option5`, disabled: true },
            { label: `Option 6`, value: `option6` }
          ]}
        />
      </div>
    </div>
  );
};
export const Bordered = (args) => {
  return (
    <div className="flex w-1/2 flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1>Orientation: Horizontal</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option2"}
          design={"bordered"}
          // {...args}
          options={[
            { label: `Option 1`, value: `option1` },
            { label: `Option 2`, value: `option2`, disabled: true },
            { label: `Option 3`, value: `option3` }
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>Orientation: Vertical</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option6"}
          // options={args.options}
          design={"bordered"}
          orientation="vertical"
          // {...args}
          options={[
            { label: `Option 4`, value: `option4` },
            { label: `Option 5`, value: `option5`, disabled: true },
            { label: `Option 6`, value: `option6` }
          ]}
        />
      </div>
    </div>
  );
};
export const Tabs = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";

  return (
    <div
      className="flex w-1/2 flex-col gap-10"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col gap-2">
        <h1>Orientation: Horizontal</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option2"}
          design={"tabs"}
          // {...args}
          options={[
            {
              label: `${t("option")} 1`,
              value: `option1`
              // icon: <FiSettings />
            },
            {
              label: `${t("option")} 2`,
              value: `option2`,
              // icon: <FiActivity />,
              disabled: true
            },
            {
              label: `${t("option")} 3`,
              value: `option3`
              //  icon: <FiSave />
            }
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>Orientation: Vertical</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option6"}
          // options={args.options}
          design={"tabs"}
          orientation="vertical"
          // {...args}
          options={[
            { label: `${t("option")} 4`, value: `option4` },
            { label: `${t("option")} 5`, value: `option5`, disabled: true },
            { label: `${t("option")} 6`, value: `option6` }
          ]}
        />
      </div>
    </div>
  );
};
export const Cards = (args) => {
  return (
    <div className="flex w-1/2 flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1>Orientation: Horizontal</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option2"}
          design={"cards"}
          // {...args}
          options={[
            {
              label: `Option 1`,
              sublabel: "Good for small business",
              value: `option1`
            },
            {
              label: `Option 2`,

              sublabel: "Good for medium to large businesses",
              value: `option2`,
              disabled: true
            },
            {
              label: `Option 3`,
              sublabel: "Custom made for Enterprise level companies",
              value: `option3`
            }
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1>Orientation: Vertical</h1>
        <HawaRadio
          onChangeTab={() => console.log()}
          defaultValue={"option6"}
          // options={args.options}
          design={"cards"}
          orientation="vertical"
          // {...args}
          options={[
            {
              label: `Option 4`,
              sublabel: "Good for small business",
              value: `option4`
            },
            {
              label: `Option 5`,

              sublabel: "Good for medium to large businesses",
              value: `option5`,
              disabled: true
            },
            {
              label: `Option 6`,
              sublabel: "Custom made for Enterprise level companies",
              value: `option6`
            }
          ]}
        />
      </div>
    </div>
  );
};
