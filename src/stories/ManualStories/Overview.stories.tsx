import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"
import { HawaLogoButton } from "../../elements"

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
      <div className="subheading">Structure</div>
      <div className="link-list">
        <div
          onClick={linkTo("Blocks/Blocks Introduction")}
          className="link-item"
        >
          <h3>Layout</h3>
          <span>
            <strong>Components for different web app layouts</strong>
          </span>
        </div>
        <div
          onClick={linkTo("Layout/Layout Introduction")}
          className="link-item"
        >
          <h3>Blocks</h3>
          <span>
            <strong>Pre-made blocks that are commonly used in web apps</strong>
          </span>
        </div>
        <div
          onClick={linkTo("Elements/Elements Introduction")}
          className="link-item"
        >
          <h3>Elements</h3>
          <span>
            <strong>
              The individual UI components used in blocks and other places
            </strong>
          </span>
        </div>
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
