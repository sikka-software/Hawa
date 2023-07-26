import React from "react"
import { storiesOf } from "@storybook/react"
import "../stories-styles.css"
import { HawaCodeBlock } from "../../elements"

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
    --border-radius: 10px;
}`
  return (
    <div>
      <h1>Usage</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress.
      </div>
      <h4>Use Components</h4>
      <p>
        Add the following line of code to your main project file `index.js` or
        `_app.js` for next.js projects
      </p>
      <HawaCodeBlock code={'import "@sikka/hawa/src/styles.css";'} />
      <h4>Use Components</h4>
      ``` ## Use Package ``` import{" "}
      {/* {HawaAccordion} from '@sikka/hawa ``` */}
    </div>
  )
}

storiesOf("Getting Started / Usage", module)
  .addParameters({
    docs: {
      page: () => <UsagePage />,
    },
    docsOnly: true,
  })
  .add("Getting Started / Usage", () => <UsagePage />)
