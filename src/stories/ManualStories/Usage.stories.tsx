import React from "react"
import { storiesOf } from "@storybook/react"
import "../stories-styles.css"
import { HawaCodeBlock, HawaInlineCode } from "../../elements"

export default {
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: {
      expand: false,
      disable: true,
      hideNoControlsWarning: true,
      exclude: [],
    },
    //  docsOnly: true,

    // customIcon: <AiFillSafetyCertificate />,

    // toolbar: { visibility: "hidden" },
    // layout: "none",
    // options: {
    //   showPanel: false,
    //   withKnobs: {
    //     disable: true,
    //   },
    // },

    options: { showPanel: false },
  },
  title: "Getting Started/Usage",
}

const UsagePage = () => {
  const codeSnippet = `
:root {
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
}`
  return (
    <div>
      <h1>Usage</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress.
      </div>
      <h4>Importing Styles</h4>
      <p>
        Add the following line of code to your main project file{" "}
        <HawaInlineCode text="index.js" /> or <HawaInlineCode text="_app.js" />{" "}
        for next.js projects
      </p>
      <HawaCodeBlock code={'import "@sikka/hawa/src/styles.css";'} />
      <br />
      <h4>Using Components</h4>
      <p>
        You can import directly from the package in React and Next.js projects.
      </p>
      <HawaCodeBlock code={'import { HawaAccordion } from "@sikka/hawa"'} />
      <br />
      <h4>Editor Setup</h4>
      <p>
        In order to save time and be more efficent while working with Hawa kit,
        we recommend installing{" "}
        <a
          className="text-link"
          href="https://code.visualstudio.com/docs/editor/intellisense"
        >
          IntelliSense
        </a>{" "}
        extension for VSCode{" "}
      </p>
    </div>
  )
}
export const Usage = UsagePage

// storiesOf("Getting Started / Usage", module)
//   .addParameters({
//     docs: {
//       page: () => <UsagePage />,
//     },
//     docsOnly: true,
//   })
//   .add("Getting Started / Usage", () => <UsagePage />)
