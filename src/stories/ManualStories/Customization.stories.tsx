import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"
import { HawaCodeBlock } from "../../elements/HawaCodeBlock"

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
  title: "Getting Started/Customization",
}

const ThemeIntroduction = () => {
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
    --border-radius: 10px;
}`
  return (
    <div>
      <h1>Customization</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress.
      </div>
      <p>
        If you want to customize the entirety of Hawa UI kit with a few lines of
        code, you can do so by changing the colors, and the border radius. In
        order to customize Hawa, you can do so using one of the following
        methods:
      </p>
      <br />
      <h2 className="font-bold">Method 1</h2>
      <p>
        Overwrite the `root:` global variables in your project css file. The
        variables are as follows:
      </p>
      <HawaCodeBlock fileName="styles/globals.css" code={codeSnippet} />
      <br />
      <h2 className="font-bold">Method 2</h2>
      Copy the content of Hawa{" "}
      <a
        className="text-link"
        href="https://github.com/sikka-software/Hawa/blob/main/tailwind.config.js"
      >
        tailwind.config.js
      </a>{" "}
      and use it in your project tailwind configuration file. And you can
      replace the global variables with your own static values. Or simply using
      the first method
    </div>
  )
}
export const Customization = ThemeIntroduction

// storiesOf("Getting Started / Customization", module)
//   .addParameters({
//     docs: {
//       page: () => <ThemeIntroduction />,
//     },
//     docsOnly: true,
//   })
//   .add("Getting Started / Customization", () => <ThemeIntroduction />)
