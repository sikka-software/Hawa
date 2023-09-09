import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"
import { HawaCodeBlock } from "../../elements/HawaCodeBlock"
import { HawaAlert } from "../../elements"

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
  const codeSnippet = `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --info: 209 62% 50%;
    --info-foreground: 0 0% 98%;
    --success: 148 48% 43%;
    --success-foreground: 0 0% 98%;
    --warning: 24 75% 50%;
    --warning-foreground: 0 0% 98%;
    --error: 0 84.2% 60.2%;
    --error-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5% 64.9%;
    --radius: 0.5rem;
    --radius-inner: calc(var(--radius) - calc(var(--radius) / 3));
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}
`
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
      <HawaAlert
        className="mt-4"
        persistant
        text={
          "Make sure to add !important at the end of the css variable for it to overwrite the default value"
        }
      />
      <br />
      <h2 className="font-bold">Method 2</h2>
      Copy the content of Hawa{" "}
      <a
        className="clickable-link"
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
