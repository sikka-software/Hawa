import React from "react";
import { HawaCodeBlock } from "../../elements";

export default {
  title: "Elements/Code/Code Block",
  component: [HawaCodeBlock],
  argTypes: {
    content: {
      control: "array",
      description: "The title of the acordion"
    }
  }
};

export const Default = (args) => {
  return (
    <div>
      <h1 className="mt-4 dark:text-white">Default CodeBlock</h1>
      <HawaCodeBlock language="js" code="npm install @sikka/hawa" />
    </div>
  );
};

Default.args = {};
export const WithTabs = (args) => {
  return (
    <div>
      <h1 className="dark:text-white">Codeblock with tabs</h1>
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
  );
};

WithTabs.args = {};
export const WithFilename = (args) => {
  const codeSnippet = `:root {
    /* Primary Layout Colors */
    --layout-primary-700: #b7aff7;
    --layout-primary-500: #dfdcfc;
    --layout-primary-300: #e7e5fa;

    /* Secondary Layout Colors */
    --layout-secondary: #d2cdfa;

    /* Primary Button Colors */
    --button-primary-300: #6555e3;
    --button-primary-500: #4c37eb;
    --button-primary-700: #2e1dac;

    /* Secondary Button Colors */
    --button-secondary-500: #ffc011;
    --button-secondary-700: #b48d24;

    /* Global Border Radius */
    --radius: 10px;
}`;
  return (
    <div>
      <h1 className="dark:text-white">Codeblock with filename</h1>
      <HawaCodeBlock language="js" code={codeSnippet} fileName="src/index.js" />
    </div>
  );
};

WithFilename.args = {};
