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
      <p>Run one of the following commands to add Hawa to your project:</p>
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
