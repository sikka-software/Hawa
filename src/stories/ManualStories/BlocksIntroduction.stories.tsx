import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"
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
  title: "Blocks/Introduction",
}
const BlocksIntroduction = () => {
  return (
    <div>
      <h1>Blocks Components</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      Hawa layout components are used as the foundation for Hawa blocks and can
      be used to organize and structure your web app. Browse example stories now
      by navigating to them in the sidebar. View their code in the `src/stories`
      directory to learn how they work. We recommend building UIs with a
      [**component-driven**](https://componentdriven.org) process starting with
      atomic components and ending with pages. # Concept ### Elements The
      smallest components of this UI kit are the typical low-level components.
      ### Blocks Blocks are commonly used collection of components.
    </div>
  )
}
export const Introduction = BlocksIntroduction

// storiesOf("Blocks/Introduction", module)
//   .addParameters({
//     docs: {
//       page: () => <BlocksIntroduction />,
//     },
//     docsOnly: true,
//   })
//   .add("Blocks/Introduction", () => <BlocksIntroduction />)
