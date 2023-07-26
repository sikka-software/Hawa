import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"

const Overview = () => {
  return (
    <div>
      <p className="logo">
        <img
          src="https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-logo.png"
          alt="Hawa | هواء"
        />
      </p>
      <h1>Welcome to Hawa</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      <p>
        This is an opinionated UI kit built with TailwindCSS with the focus of
        making it easier to build web apps using common components. Web apps
        need a layout and a collection of blocks that are made of single
        elements. Below you'll find the individual break-down of each component
        of Hawa UI structure.
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
      <p>
        For bug reporting and contribution
        <a className="text-link" href="https://github.com/sikka-software/Hawa">
          Github
        </a>
      </p>
    </div>
  )
}

storiesOf("Getting Started / Overview", module)
  .addParameters({
    docs: {
      page: () => <Overview />,
    },
    docsOnly: true,
  })
  .add("Getting Started / Overview", () => <Overview />)
