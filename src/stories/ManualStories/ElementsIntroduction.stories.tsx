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
  title: "Elements/Introduction",
}

const ElementsIntroduction = () => {
  return (
    <div>
      <h1>Elements Components</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      <section>
        <p>
          The "Elements" section in the Hawa repository encapsulates a rich set
          of UI components designed to facilitate the rapid development of web
          applications and websites. These elements, built with the
          utility-first TailwindCSS framework, are highly customizable and can
          be integrated seamlessly into your projects.
        </p>
        <p>
          Within this section, you will find a diverse range of elements
          including, but not limited to:
        </p>
        <ul className="flex flex-col gap-2 mb-10">
          <li>
            <strong>Input Fields:</strong> <br /> Various input components to
            gather data from users, including text fields, radio buttons,
            checkboxes, and more.
          </li>
          <li>
            <strong>Navigation Components:</strong> <br /> Components like
            breadcrumbs and tabs that assist in creating a seamless navigation
            experience.
          </li>
          <li>
            <strong>Notification Elements:</strong> <br /> Elements such as
            alerts and toasts to provide feedback or notifications to users.
          </li>
          <li>
            <strong>Interactive Components:</strong> <br /> Components like
            dropdown menus and modals that facilitate user interaction with the
            application.
          </li>
          <li>
            <strong>Utility Components:</strong> <br /> Various utility
            components like tooltips, popovers, and carousels to enhance the
            user interface.
          </li>
        </ul>
        <p>
          Each element is crafted with attention to detail, ensuring both
          functionality and aesthetic appeal. The elements are also designed to
          be responsive, providing a consistent user experience across various
          device types and screen sizes.
        </p>
        <p>
          We encourage developers to explore this section to discover the wide
          array of elements available, and to leverage them to build visually
          appealing and user-friendly web applications and websites.
        </p>
      </section>
    </div>
  )
}
export const Introduction = ElementsIntroduction

// storiesOf("Elements/Introduction", module)
//   .addParameters({
//     docs: {
//       page: () => <ElementsIntroduction />,
//     },
//     docsOnly: true,
//   })
//   .add("Elements/Introduction", () => <ElementsIntroduction />)
