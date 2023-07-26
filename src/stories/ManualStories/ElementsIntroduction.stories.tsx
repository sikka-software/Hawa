import React from "react"
import { storiesOf } from "@storybook/react"

import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"

const ElementsIntroduction = () => {
  return (
    <div>
      # Elements Components
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      Hawa layout components are used as the foundation for Hawa blocks and can
      be used to organize and structure your web app. Browse example stories now
      by navigating to them in the sidebar. View their code in the `src/stories`
      directory to learn how they work. We recommend building UIs with a
      [**component-driven**](https://componentdriven.org) process starting with
      atomic components and ending with pages.
      <div className="subheading">Components</div>
      <div className="link-list">
        <div onClick={linkTo("Layout/Container")} className="link-item">
          <h3>Container</h3>
          <span>
            <strong>Presets for popular tools</strong>
            Easy setup for TypeScript, SCSS and more. a styled
          </span>
        </div>
        <div onClick={linkTo("Layout/AppBar")} className="link-item">
          <h3>AppBar</h3>
          <span>
            <strong>Presets for popular tools</strong>
            Easy setup for TypeScript, SCSS and more.
          </span>
        </div>
        <div onClick={linkTo("Layout/AppLayout")} className="link-item">
          <h3>AppLayout</h3>
          <span>
            <strong>Presets for popular tools</strong>
            Easy setup for TypeScript, SCSS and more.
          </span>
        </div>
        <div onClick={linkTo("Layout/Dialog")} className="link-item">
          <h3>Dialog</h3>
          <span>
            <strong>Presets for popular tools</strong>
            Easy setup for TypeScript, SCSS and more.
          </span>
        </div>
        <div onClick={linkTo("Layout/PopMenu")} className="link-item">
          <h3>PopMenu</h3>
          <span>
            <strong>Presets for popular tools</strong>
            Easy setup for TypeScript, SCSS and more.
          </span>
        </div>
      </div>
    </div>
  )
}

storiesOf("Elements/Introduction", module)
  .addParameters({
    docs: {
      page: () => <ElementsIntroduction />,
    },
    docsOnly: true,
  })
  .add("Elements/Introduction", () => <ElementsIntroduction />)
