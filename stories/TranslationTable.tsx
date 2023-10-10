import React, { useState, FC } from "react";

type ComponentProps = {
  key?: any;
  default?: any;
  description?: any;
};
interface PropsTableTypes {
  componentProps: ComponentProps[];
}
const TranslationTable: FC<PropsTableTypes> = ({ componentProps }) => {
  return (
    <div className="hawa-mt-10 hawa-flex hawa-flex-col hawa-gap-4">
      <div className="hawa-overflow-x-auto">
        <table className="hawa-min-w-full hawa-divide-y hawa-divide-gray-200 hawa-border hawa-border-gray-300 hawa-bg-white">
          <thead className="hawa-bg-gray-50">
            <tr>
              <th
                scope="col"
                className="hawa-px-6 hawa-py-3 hawa-text-start hawa-text-xs hawa-font-medium hawa-uppercase hawa-tracking-wider hawa-text-gray-500"
              >
                Key
              </th>

              <th
                scope="col"
                className="hawa-px-6 hawa-py-3 hawa-text-start hawa-text-xs hawa-font-medium hawa-uppercase hawa-tracking-wider hawa-text-gray-500"
              >
                Default
              </th>
              <th
                scope="col"
                className="hawa-px-6 hawa-py-3 hawa-text-start hawa-text-xs hawa-font-medium hawa-uppercase hawa-tracking-wider hawa-text-gray-500"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="hawa-divide-y hawa-divide-gray-200 ">
            {componentProps.map((prop, i) => (
              <tr key={i}>
                <td className="hawa-whitespace-nowrap hawa-px-6 hawa-py-4">
                  <div className="hawa-text-xs hawa-text-foreground">
                    {prop.key}
                  </div>
                </td>

                <td className="hawa-whitespace-break-spaces hawa-px-6 hawa-py-4 wh">
                  <div className="hawa-text-xs hawa-text-foreground">
                    {prop.default}
                  </div>
                </td>
                <td className="hawa-whitespace-break-spaces hawa-px-6 hawa-py-4">
                  <div className="hawa-text-xs hawa-text-foreground">
                    {prop.description}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TranslationTable;
