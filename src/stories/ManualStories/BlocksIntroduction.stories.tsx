import React from "react"

import { linkTo } from "@storybook/addon-links"
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
  title: "Blocks/Introduction",
}

const DocCard = ({ title, subtitle, handleClick }) => (
  <div
    onClick={handleClick}
    className="inline-flex w-full max-w-full transform-gpu cursor-pointer flex-col rounded border  bg-background  p-5 transition-all hover:drop-shadow-lg  dark:hover:bg-gray-800"
  >
    <h3 className="font-bold">{title}</h3>
    {subtitle && <span className="text-sm">{subtitle}</span>}{" "}
  </div>
)

const BlocksIntroduction = () => {
  return (
    <div className="dark:text-white">
      <h1>Blocks Components</h1>
      <div className="tip-wrapper">
        <span className="tip">Notice</span>This page is still in progress
      </div>
      <div>
        <p>
          In the Hawa UI kit, the "Blocks" section represents a collection of
          modular and reusable components that serve as the building blocks of
          your web application or website. These blocks are meticulously
          designed to encapsulate specific functionalities, providing a
          streamlined and cohesive development experience. Here's a brief
          overview of the various categories of blocks available in the Hawa UI
          kit:
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-4">
          {/* <div className="flex flex-row flex-wrap gap-4 bg-red-500"> */}
          <DocCard
            title="Account Blocks"
            subtitle={
              "This segment houses components that facilitate user account management, offering features such as user profile forms and API information displays, ensuring a seamless user account experience."
            }
            handleClick={linkTo("Blocks/Account")}
          />
          <DocCard
            title="Auth Blocks"
            subtitle={
              "Specializing in authentication processes, this block contains components that manage sign-ins, sign-ups, and password resets, safeguarding your application with secure and user-friendly authentication forms."
            }
            handleClick={linkTo("Blocks/Auth")}
          />
          <DocCard
            title="Misc Blocks"
            subtitle={
              "A versatile section that encompasses a range of miscellaneous components, including elements that display specific states or messages within the application, enhancing the user interface with informative and intuitive notifications."
            }
            handleClick={linkTo("Blocks/Misc")}
          />
          <DocCard
            title="Payment Blocks"
            subtitle={
              "Tailored to handle payment transactions, this block offers components that facilitate checkout processes and payment confirmations, providing a secure and smooth payment experience for your users."
            }
            handleClick={linkTo("Blocks/Payment")}
          />
          <DocCard
            title="Pricing Blocks"
            subtitle={
              "This block assists in the display of various pricing plans and features, enabling users to easily compare and choose the most suitable options for their needs."
            }
            handleClick={linkTo("Blocks/Pricing")}
          />

          <DocCard
            title="Referral Blocks"
            subtitle={
              "Focused on managing referral functionalities, this block contains components that oversee referral account management and statistics, fostering a robust referral system within your application."
            }
            handleClick={linkTo("Blocks/Referral")}
          />
        </div>

        <p>
          Utilizing these blocks not only accelerates the development process
          but also promotes a consistent and harmonious design language across
          your application. Each block is crafted to work synergistically,
          offering a modular approach that enhances code reusability and
          maintainability.
        </p>
        <p>
          Feel free to explore each block in detail to discover the plethora of
          features and functionalities that the Hawa UI kit has to offer, and
          elevate your web development journey to new heights.
        </p>
      </div>
    </div>
  )
}
export const Introduction = BlocksIntroduction

// storiesOf("Blocks/Introduction", module)
//   .addParameters({
//     docs: {
//       page: () => <BlocksIntroduction />,
//     },
//     docsOnly: true,
//   })
//   .add("Blocks/Introduction", () => <BlocksIntroduction />)
