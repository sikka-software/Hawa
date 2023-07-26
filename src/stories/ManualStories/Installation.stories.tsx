import React from "react"
import { storiesOf } from "@storybook/react"
import "../stories-styles.css"
import { HawaCodeBlock } from "../../elements"

const Installation = () => {
  return (
    <div>
      <h1>Installation</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      ## Install Package
      <HawaCodeBlock
        tabs={[
          {
            title: "npm",
            code: "npm install @sikka/hawa",
          },
          {
            title: "yarn",
            code: "yarn add @sikka/hawa",
          },
          {
            title: "pnpm",
            code: "pnpm add @sikka/hawa",
          },
        ]}
      />
      <>
        <pre>
          <code
            className="language-js"
            // meta='filename="index.js"'
          >
            npm install @sikka/hawa
          </code>
        </pre>
      </>
      ## Import Hawa Styles Add the following line of code to your main project
      file `index.js` or `_app.js` for next.js projects: ``` import
      "@sikka/hawa/src/styles.css"; ``` ## Use Package ``` import{" "}
      {/* {HawaAccordion} from '@sikka/hawa ``` */}
    </div>
  )
}

storiesOf("Getting Started / Installation", module)
  .addParameters({
    docs: {
      page: () => <Installation />,
    },
    docsOnly: true,
  })
  .add("Getting Started / Installation", () => <Installation />)
