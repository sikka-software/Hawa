import React from "react"
import { storiesOf } from "@storybook/react"
import { LinkTo, linkTo } from "@storybook/addon-links"
import "../stories-styles.css"

const LayoutIntroduction = () => {
  return (
    <div>
      <style>{`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 13px;
    color: #999;
    letter-spacing: 6px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
`}</style>
      # Layout Components
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      Hawa layout components are used as the foundation for Hawa blocks and can
      be used to organize and structure your web app. Browse example stories now
      by navigating to them in the sidebar. View their code in the `src/stories`
      directory to learn how they work. We recommend building UIs with a
      [**component-driven**](https://componentdriven.org) process starting with
      atomic components and ending with pages. # Concept ### Elements The
      smallest components of this UI kit are the typical low-level components.
      ### Blocks Blocks are commonly used collection of components. ### Boxes
      Most components and blocks will live inside **boxes**. Windows can show
      anything. It can show a video, image, form, iFrame, etc. Boxes make out
      the layout of your website or application. Boxes can be arranged in
      different layouts Points - The content inside each box can be scrollable
      (vertical/horizontal/Both) with one prop - you can control the spacing of
      the content inside each box with one prop - you can also control the
      spacing of all the box in the layout - some boxes can float (animation of
      open and close modal) - some boxes can go full screen (animation to
      transition)
      <p>
        <img
          src="https://user-images.githubusercontent.com/46135573/143972102-0c104239-b8f6-4a7b-9aad-54f6d91a8906.png"
          alt="layout-types"
        />
      </p>
      <div className="subheading">Structure</div>
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

storiesOf("Layout/Introduction", module)
  .addParameters({
    docs: {
      page: () => <LayoutIntroduction />,
    },
    docsOnly: true,
  })
  .add("Layout/Introduction", () => <LayoutIntroduction />)