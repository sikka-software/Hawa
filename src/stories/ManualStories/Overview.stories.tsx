import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"
import { HawaLogoButton } from "../../elements"

const DocCard = ({ title, subtitle, handleClick }) => (
  <div
    onClick={handleClick}
    className="block w-full transform-gpu cursor-pointer rounded border border-gray-200 bg-white p-5 transition-all  hover:drop-shadow-lg"
  >
    <h3 className="font-bold">{title}</h3>
    {subtitle && <span>{subtitle}</span>}{" "}
  </div>
)

const OverviewPage = () => {
  return (
    <div>
      <p className="logo">
        <img
          src="https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo.png"
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

storiesOf("Getting Started / Overview", module)
  .addParameters({
    docs: {
      page: () => <OverviewPage />,
    },
    docsOnly: true,
  })
  .add("Getting Started / Overview", () => <OverviewPage />)
