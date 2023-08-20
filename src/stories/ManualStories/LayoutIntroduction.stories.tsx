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
    // customIcon: () => (
    //   <svg
    //     stroke="currentColor"
    //     fill="none"
    //     stroke-width="0"
    //     viewBox="0 0 24 24"
    //     height="1em"
    //     width="1em"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path d="M7 18H17V16H7V18Z" fill="currentColor"></path>
    //     <path d="M17 14H7V12H17V14Z" fill="currentColor"></path>
    //     <path d="M7 10H11V8H7V10Z" fill="currentColor"></path>
    //     <path
    //       fill-rule="evenodd"
    //       clip-rule="evenodd"
    //       d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
    //       fill="currentColor"
    //     ></path>
    //   </svg>
    // ),
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
  title: "Layout/Introduction",
}

const DocCard = ({ title, subtitle, handleClick }) => (
  <div
    onClick={handleClick}
    className="block w-full  transform-gpu cursor-pointer rounded border  bg-background  p-5 transition-all hover:drop-shadow-lg  dark:hover:bg-gray-800"
  >
    <h3 className="font-bold">{title}</h3>
    {subtitle && <span>{subtitle}</span>}{" "}
  </div>
)

const LayoutIntroduction = () => {
  return (
    <div>
      <h1>Layout Components</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      Hawa layout components are used as the foundation for Hawa blocks and can
      be used to organize and structure your web app.
      <div className="subheading">Concept</div>
      ### Elements The smallest components of this UI kit are the typical
      low-level components.
      <h3>Blocks</h3>
      Blocks are commonly used collection of components.
      <h3>Boxes</h3>
      Most components and blocks will live inside **boxes**. Windows can show
      anything. It can show a video, image, form, iFrame, etc. Boxes make out
      the layout of your website or application. Boxes can be arranged in
      different layouts Points - The content inside each box can be scrollable
      (vertical/horizontal/Both) with one prop - you can control the spacing of
      the content inside each box with one prop - you can also control the
      spacing of all the box in the layout - some boxes can float (animation of
      open and close modal) - some boxes can go full screen (animation to
      transition)
      <p className="flex flex-col items-center justify-center">
        <img
          src="https://user-images.githubusercontent.com/46135573/143972102-0c104239-b8f6-4a7b-9aad-54f6d91a8906.png"
          alt="layout-types"
        />
      </p>
      <div className="subheading">Structure</div>
      <div className="flex flex-row gap-4">
        <DocCard
          title="Container"
          subtitle={"Simple installation guide for React and Next projects"}
          handleClick={linkTo("Layout/Container")}
        />
        <DocCard
          title="AppBar"
          subtitle={"Simple installation guide for React and Next projects"}
          handleClick={linkTo("Getting Started/Usage")}
        />
        <DocCard
          title="AppLayout"
          subtitle={
            "a few methods to use to customize Hawa kit in your project"
          }
          handleClick={linkTo("Getting Started/Customization")}
        />
        <DocCard
          title="Dialog"
          subtitle={
            "a few methods to use to customize Hawa kit in your project"
          }
          handleClick={linkTo("Getting Started/Customization")}
        />
        <DocCard
          title="PopMenu"
          subtitle={
            "a few methods to use to customize Hawa kit in your project"
          }
          handleClick={linkTo("Getting Started/Customization")}
        />
      </div>
    </div>
  )
}
export const Introduction = LayoutIntroduction

// storiesOf("Layout/Introduction", module)
//   .addParameters({
//     docs: {
//       page: () => <LayoutIntroduction />,
//     },
//     docsOnly: true,
//   })
//   .add("Layout/Introduction", () => <LayoutIntroduction />)
