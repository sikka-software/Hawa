import { useRef } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { BackToTop } from "@/packages/components/elements/backToTop";
import { ScrollIndicator } from "@/packages/components/elements/scrollIndicator";

const meta = {
  title: "Elements/Scroll Indicator",
  component: BackToTop
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof BackToTop>;

// TODO: test it in an app
// TODO:Explain that the parent needs to have fixed style maybe?

export const FullPage: Story = {
  render: (args) => {
    const ref = useRef(null);

    return (
      <div
        className="hawa-bg-layoutPrimary-500 hawa-fixed hawa-left-0 hawa-top-0 hawa-flex hawa-h-screen hawa-w-screen hawa-flex-wrap hawa-items-start hawa-justify-start hawa-gap-2 hawa-overflow-y-scroll hawa-p-4"
        ref={ref}
      >
        <BackToTop anchor={ref} />
        <ScrollIndicator anchor={ref} />

        <div>
          <h1 className="hawa-text-xl hawa-font-bold">
            Scroll down to see the button
          </h1>
          {new Array(1000).fill(0).map((e, i) => {
            return (
              <div key={i}>
                {Math.random()}
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export const InContainer: Story = {
  render: (args) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-4">
        <div
          style={{
            position: "relative",
            height: 400,
            width: 200
          }}
        >
          <div
            ref={ref1}
            style={{
              height: 400,
              width: 200,
              overflowY: "scroll",
              backgroundColor: "#b9cbff",
              padding: 10
            }}
          >
            {new Array(300).fill(0).map((e, k) => {
              return (
                <div key={k}>
                  {Math.random()}
                  <br />
                </div>
              );
            })}
          </div>
          <ScrollIndicator inContainer anchor={ref1} />
        </div>

        <div
          style={{
            position: "relative",
            height: 400,
            width: 800
          }}
        >
          <div
            ref={ref2}
            style={{
              height: 400,
              width: 800,
              overflowY: "scroll",
              backgroundColor: "#b9cbff",
              padding: 10
            }}
          >
            {new Array(300).fill(0).map((e, k) => {
              return (
                <div key={k}>
                  {Math.random()}
                  <br />
                </div>
              );
            })}
          </div>
          <ScrollIndicator inContainer anchor={ref2} />
        </div>
      </div>
    );
  }
};
