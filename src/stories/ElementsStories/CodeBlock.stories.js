import React from "react";
import { HawaCodeBlock } from "../../elements";

export default {
  title: "Elements/Code",
  component: [HawaCodeBlock],
  argTypes: {
    content: {
      control: "array",
      description: "The title of the acordion"
    }
  }
};

export const Code = (args) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1>With Tabs</h1>
        <HawaCodeBlock
          language="js"
          tabs={[
            {
              title: "npm",
              code: "npm install @sikka/hawa"
            },
            {
              title: "yarn",
              code: "yarn add @sikka/hawa"
            },
            {
              title: "pnpm",
              code: "pnpm add @sikka/hawa"
            }
          ]}
        />
      </div>
      <div>
        <h1 className="mt-4">Without Tabs</h1>
        <HawaCodeBlock language="js" code="npm install @sikka/hawa" />
      </div>
    </div>
  );
};

Code.args = {};
