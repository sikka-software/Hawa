import React from "react"
import { storiesOf } from "@storybook/react"
import "../stories-styles.css"
import { HawaCodeBlock } from "../../elements"

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
  title: "Getting Started/Installation",
}

const InstallationPage = () => {
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

// storiesOf("Getting Started / Installation", module)
//   .addParameters({
//     docs: {
//       page: () => <Installation />,
//     },
//     docsOnly: true,
//   })
//   .add("Getting Started / Installation", () => <Installation />)
export const Installation = InstallationPage
