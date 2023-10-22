import React from "react";
import { Checkbox } from "../../components/elements";
import { setLocale, t } from "../translations/i18n";
import type { Meta, StoryObj } from "@storybook/react";
import { ArgsTable, Story, Title } from "@storybook/blocks";

const meta = {
  title: "Elements/Checkbox",
  component: Checkbox,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Checkbox/>"}</h1>

          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <div
      className="hawa-flex hawa-flex-col hawa-gap-2"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="hawa-flex hawa-flex-col hawa-gap-6">
        <Checkbox
          {...args}
          // onCheckedChange={(e) => console.log("checked changed to ", e)}
          // id="testcheckbox"
          // label="Accept terms and conditions"
          // sublabel="You agree to our Terms of Service and Privacy Policy."
        />
        {/* <Checkbox
          disabled
          id="disabledcheck"
          label="Accept terms and conditions"
          sublabel="You agree to our Terms of Service and Privacy Policy."
        />
        <Checkbox id="disabledcheck1" label="Accept terms and conditions" />
        <Checkbox
          id="disabledcheck1"
          label={<span className="text-lg font-bold">Custom Label</span>}
          className="mt-2"
        /> */}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: { label: "Accept terms and conditions", id: "checkbox_id" },
};
export const withSubtitle: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Accept terms and conditions",
    sublabel: "You agree to our Terms of Service and Privacy Policy.",
    id: "checkbox_id",
  },
};
export const withHelperText: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: "Accept terms and conditions",
    sublabel: "You agree to our Terms of Service and Privacy Policy.",
    helperText: "You must agree to the TOS to continue",
    id: "checkbox_id",
  },
};

{
  /* <PropsTable
        title={"Props"}
        componentProps={[
          {
            name: "id",
            type: "string",
            default: "",
            description:
              "The id of the checkbox. Must be unique if there are more than one checkbox inside the elements."
          },
          {
            name: "label",
            type: "React.ReactNode",
            default: "",
            description: "The primary text next to the checkbox"
          },
          {
            name: "sublabel",
            type: "string",
            default: "",
            description: "The gray text underneath the label"
          },
          {
            name: "helperText",
            type: "string",
            default: "",
            description:
              "The red warning text underneath the label. Use it conditionally if there's a warning or an error. "
          },
          {
            name: "onCheckedChange",
            type: "function",
            default: "",
            description:
              "A callback function to handle checking and unchecking the checkbox."
          },
          {
            name: "disabled",
            type: "boolean",
            default: "false",
            description: ""
          }
        ]}
      /> */
}

// import React from "react";

// const PropsTable = ({ componentProps, title }) => {
//   return (
//     <div className="mt-10 flex flex-col gap-4">
//       <div className="h-0.5 w-full bg-gray-300"></div>
//       <h1>{title}</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200 border border-gray-300 bg-white">
//           <thead className="bg-gray-50">
//             <tr>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-start text-xs font-medium uppercase tracking-wider text-gray-500"
//               >
//                 Prop
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-start text-xs font-medium uppercase tracking-wider text-gray-500"
//               >
//                 Type
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-start text-xs font-medium uppercase tracking-wider text-gray-500"
//               >
//                 Required
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-start text-xs font-medium uppercase tracking-wider text-gray-500"
//               >
//                 Default
//               </th>
//               <th
//                 scope="col"
//                 className="px-6 py-3 text-start text-xs font-medium uppercase tracking-wider text-gray-500"
//               >
//                 Description
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 bg-white">
//             {componentProps.map((prop) => (
//               <tr key={prop.name}>
//                 <td className="whitespace-nowrap px-6 py-4">
//                   <div className="text-sm text-gray-900">{prop.name}</div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4">
//                   <div className=" text-sm text-gray-900">
//                     <span className="inline-code">{prop.type}</span>
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4">
//                   <div className=" text-sm text-gray-900">
//                     {/* <span className="inline-code">{prop.type}</span> */}
//                     {prop.required}
//                   </div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4">
//                   <div className="text-sm text-gray-900">{prop.default}</div>
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4">
//                   <div className="text-sm text-gray-900">
//                     {prop.description}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PropsTable;
