import React from "react"
import { linkTo } from "@storybook/addon-links"
import "../stories-styles.css"
import { AiFillSafetyCertificate } from "react-icons/ai"
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

    // customIcon: <AiFillSafetyCertificate />,
    customIcon: () => (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 18H17V16H7V18Z" fill="currentColor"></path>
        <path d="M17 14H7V12H17V14Z" fill="currentColor"></path>
        <path d="M7 10H11V8H7V10Z" fill="currentColor"></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
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
    className="block w-full  transform-gpu cursor-pointer rounded border border-gray-200 bg-background  p-5 transition-all hover:drop-shadow-lg  dark:hover:bg-gray-800"
  >
    <h3 className="font-bold">{title}</h3>
    {subtitle && <span>{subtitle}</span>}{" "}
  </div>
)

const OverviewPage = () => {
  const dark = useDarkMode()

  return (
    <div className="p-20 pt-10 dark:bg-background dark:text-white">
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
      {/* <div className="flex flex-row gap-2">
        <HawaLogoButton logo="github" buttonText={"Github"} />
        <HawaLogoButton logo="npm" buttonText={"Github"} />
      </div> */}
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
      <div className="flex flex-row gap-4">
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

      <div className="flex flex-row gap-4">
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
        <a className="text-link" href="https://github.com/sikka-software/Hawa">
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
