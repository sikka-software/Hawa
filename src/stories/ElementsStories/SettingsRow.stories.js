import { Controller, useForm } from "react-hook-form";
import { HawaSettingsRow } from "../../elements";
import React, { useState } from "react";

export default {
  title: "Elements/Settings",
  component: [HawaSettingsRow],

  argTypes: {
    options: {
      control: "array",
      description: "An array of objects containing the option label and value",
      table: {
        type: {
          summary: "Object Example",
          detail: "{label: 'Option 1', value: 'option1'}"
        }
      }
    },
    handleChange: {
      action: "Tab Changed",
      // control: "function",
      description: "The function to change the defaultValue of the options tab"
    },
    defaultValue: {
      control: "string",
      description: "The string of the current selected option"
    }
  },
  args: {
    options: 3
  }
};

// export const Template = (args) => (
//   <div className="bg-red-100 p-2">
//     <HawaSettingsRow {...args} />
//   </div>
// );

export const TextSettings = (args) => (
  <HawaSettingsRow settingsType="text" settingsLabel="Text Setting" />
);
export const RangeSettings = (args) => (
  <HawaSettingsRow settingsType="range" settingsLabel="Range Setting" />
);
export const BooleanSettings = (args) => (
  <HawaSettingsRow settingsType="boolean" settingsLabel="Boolean Setting" />
);
export const RadioSettings = (args) => {
  let allOptions = Array.from({ length: args.options }, (v, i) => {
    return { label: `Option ${i}`, value: `option${i}` };
  });
  return (
    <HawaSettingsRow
      settingsType="radio"
      settingsLabel="Radio Setting"
      radioProps={{
        options: allOptions,
        onChangeTab: () => console.log(),
        defaultValue: "option2"
      }}
    />
  );
};
export const ColorSettings = (args) => {
  const [currentColor, setCurrentColor] = useState("#f0f049");
  return (
    <HawaSettingsRow
      settingsType="color"
      settingsLabel="Color Setting"
      colorProps={{
        handleChange: (e) => {
          setCurrentColor(e.target.value);
          console.log("changing to ", e.target.value);
        },
        color: currentColor
      }}
    />
  );
};
export const SelectSettings = (args) => {
  const [currentColor, setCurrentColor] = useState("#f0f049");
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <Controller
      control={control}
      name="reference"
      render={({ field }) => (
        <HawaSettingsRow
          settingsType="select"
          settingsLabel="Color Setting"
          selectProps={{
            options: [{ value: "test", label: "Test 1" }],
            onChange: (e) => {
              field.onChange(e.value);
            }
          }}
        />
      )}
    />
  );
};

// <style>{`
//   .subheading {
//     --mediumdark: '#999999';
//     font-weight: 900;
//     font-size: 13px;
//     color: #999;
//     letter-spacing: 6px;
//     line-height: 24px;
//     text-transform: uppercase;
//     margin-bottom: 12px;
//     margin-top: 40px;
//   }

//   .link-list {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr 1fr;
//     row-gap: 10px;
//   }

//   @media (min-width: 620px) {
//     .link-list {
//       row-gap: 20px;
//       column-gap: 20px;
//       grid-template-columns: 1fr 1fr;
//     }
//   }

//   @media all and (-ms-high-contrast:none) {
//   .link-list {
//       display: -ms-grid;
//       -ms-grid-columns: 1fr 1fr;
//       -ms-grid-rows: 1fr 1fr;
//     }
//   }

//   .link-item {
//     cursor:pointer;
//     display: block;
//     padding: 20px 30px 20px 15px;
//     border: 1px solid #00000010;
//     border-radius: 5px;
//     transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
//     color: #333333;
//     display: flex;
//     flex-direction:column;
//     align-items: flex-start;
//   }

//   .link-item:hover {
//     border-color: #1EA7FD50;
//     transform: translate3d(0, -3px, 0);
//     box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
//   }

//   .link-item:active {
//     border-color: #1EA7FD;
//     transform: translate3d(0, 0, 0);
//   }

//   .link-item strong {
//     font-weight: 700;
//     display: block;
//     margin-bottom: 2px;
//   }

//   .link-item img {
//     height: 40px;
//     width: 40px;
//     margin-right: 15px;
//     flex: none;
//   }

//   .link-item span {
//     font-size: 14px;
//     line-height: 20px;
//   }

//   .tip {
//     display: inline-block;
//     border-radius: 1em;
//     font-size: 11px;
//     line-height: 12px;
//     font-weight: 700;
//     background: #E7FDD8;
//     color: #66BF3C;
//     padding: 4px 12px;
//     margin-right: 10px;
//     vertical-align: top;
//   }

//   .tip-wrapper {
//     font-size: 13px;
//     line-height: 20px;
//     margin-top: 40px;
//     margin-bottom: 40px;
//   }

//   .tip-wrapper code {
//     font-size: 12px;
//     display: inline-block;
//   }

//     table {
//         width: 100%;
//     }

// `}</style>

// # SettingsRow

// <Canvas>
//   <Story
//     name="Checkbox Settings"
//     args={{
//       settingsLabel: "Checkbox Settings",
//       settingsType: "checkbox",
//     }}
//   >
//     {CheckboxSettings.bind({})}
//   </Story>
// </Canvas>

// // ### Text

// <Canvas>
//   <Story
//     name="Text Settings"
//     args={{
//       settingsLabel: "Text Settings",
//       settingsType: "text",
//       placeholder: "Text here",
//     }}
//   >
//     {TextSettings.bind({})}
//   </Story>
// </Canvas>

// // ### Boolean

// <Canvas>
//   <Story
//     name="Boolean Settings"
//     args={{
//       settingsLabel: "Boolean Settings",
//       settingsType: "boolean",
//     }}
//   >
//     {BooleanSettings.bind({})}
//   </Story>
// </Canvas>

// // ### Range

// <Canvas>
//   <Story
//     name="Range Settings"
//     args={{
//       settingsLabel: "Range Settings",
//       settingsType: "range",
//       endElement: 100,
//       startElement: 0,
//     }}
//   >
//     {BooleanSettings.bind({})}
//   </Story>
// </Canvas>

// // ### Radio

// This type requires the `options` prop

// <Canvas>
//   <Story
//     name="Radio Settings"
//     args={{
//       settingsLabel: "Text Settings",
//       settingsType: "radio",
//       options: 3,
//     }}
//   >
//     {RadioSettings.bind({})}
//   </Story>
// </Canvas>

// // ### Color

// <Canvas>
//   <Story
//     name="Color Settings"
//     args={{
//       settingsLabel: "Color Settings",
//       settingsType: "color",
//     }}
//   >
//     {ColorSettings.bind({})}
//   </Story>
// </Canvas>

// <div className="tip-wrapper">
//   <span className="tip">Notice</span>This page is still in progress
// </div>

// This component is used to put together any settings blocks for any purpose. It can be seen in [`UserSettingsForm`](?path=/docs/blocks-account-user-settings--user-settings) component.

// All computations are handled inside the components and the final value can be used with `handleChange` function

// ## Props

// | Property        | Type     | Required                      | Description                                                                 |
// | :-------------- | :------- | :---------------------------- | :-------------------------------------------------------------------------- |
// | `settingsType`  | string   | true                          | One of the following options: `checkbox`, `text`,`radio` ,`color`,`boolean` |
// | `settingsLabel` | string   | true                          | The title of the settings row                                               |
// | `defaultValue`  | string   | false                         | The default value of the settings row                                       |
// | `handleChange`  | function | false                         | The function to handle the change of the settings                           |
// | `options`       | function | true (for radio settingsType) | an array of options in this format `{label: 'Option 1', value:'option1'}`   |

// ## Types

// The `HawaSettingsRow` component requires the `settingsType` prop that will determine the type of settings row

// ### Checkbox
