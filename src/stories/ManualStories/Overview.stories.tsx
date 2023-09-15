import React from "react"
import { linkTo } from "@storybook/addon-links"
import "../stories-styles.css"
import { useDarkMode } from "storybook-dark-mode"

export default {
  parameters: {
    chromatic: { disableSnapshot: true },
    controls: {
      expand: false,
      disable: true,
      hideNoControlsWarning: true,
      exclude: [],
    },
    className: "test-class",
    //  docsOnly: true,

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
  title: "Getting Started/Overview",
}

const DocCard = ({ title, subtitle, handleClick }) => (
  <div
    onClick={handleClick}
    className="block w-full  transform-gpu cursor-pointer rounded border  bg-background  p-5 transition-all hover:drop-shadow-lg  dark:hover:bg-gray-800"
  >
    <h3 className="font-bold">{title}</h3>
    {subtitle && <span className="text-sm">{subtitle}</span>}{" "}
  </div>
)

const OverviewPage = () => {
  const dark = useDarkMode()

  return (
    <div className="pt-10 dark:bg-background sm:p-20 ">
      <p className="logo">
        <img
          src={
            dark
              ? "https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo-dark-mode.png"
              : "https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo.png"
          }
          alt="Hawa | هواء"
        />
      </p>

      <div className="tip-wrapper">
        <span className="tip">In Progress</span>
      </div>
      <p>
        Hawa is an opinionated UI kit built with TailwindCSS with the focus of
        making it easier to build web apps using common components. Web apps
        need a layout and a collection of blocks that are made of single
        elements. Below you'll find the individual break-down of the structure
        of Hawa UI kit
      </p>
      <div className="subheading">Introduction</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DocCard
          title="Installation"
          subtitle={"Simple installation guide for React and Next projects"}
          handleClick={linkTo("Getting Started/Installation")}
        />
        <DocCard
          title="Usage"
          subtitle={"Simple installation guide for React and Next projects"}
          handleClick={linkTo("Getting Started/Usage")}
        />
        <DocCard
          title="Customization"
          subtitle={
            "a few methods to use to customize Hawa kit in your project"
          }
          handleClick={linkTo("Getting Started/Customization")}
        />
      </div>
      <div className="subheading">Structure</div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DocCard
          title="Blocks"
          subtitle={"Pre-made blocks that are commonly used in web apps"}
          handleClick={linkTo("Blocks/Introduction")}
        />
        <DocCard
          title="Layout"
          subtitle={"Components for different web app layouts"}
          handleClick={linkTo("Layout/Introduction")}
        />
        <DocCard
          title="Elements"
          subtitle={
            "The individual UI components used in blocks and other places"
          }
          handleClick={linkTo("Elements/Introduction")}
        />
      </div>

      <p className="mt-4">
        <a
          className="clickable-link"
          href="https://github.com/sikka-software/Hawa"
        >
          Github
        </a>
        <span className="text-sm"> For bug reporting and contribution</span>{" "}
      </p>
    </div>
  )
}
export const Overview = OverviewPage

// const meta: Meta<typeof OverviewPage> = {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: "Getting Started / Overview",
//   component: OverviewPage,
//   // decorators: [ ... ],
//   // parameters: { ... },
// }
// export default meta
// export default {
//   title: "Getting Started / Overview",
//   component: OverviewPage,
//   parameters: {
//     controls: {
//       exclude: /.*/g,
//     },
//   },
// } as Meta
// storiesOf("Getting Started / Overview", module)
//   // .addParameters({
//   //   // docs: {
//   //   //   page: <OverviewPage />,
//   //   // },
//   //   options: { isFullscreen: false, showPanel: false, isToolshown: false },

//   //   docsOnly: true,
//   //   layout: "centered",
//   // })
//   .add("Overview", () => <OverviewPage />, {
//     docs: { page: () => <OverviewPage /> },
//     docsOnly: true,
//     options: { isFullscreen: false, showPanel: false, isToolshown: false },
//     layout: "centered",
//   })
