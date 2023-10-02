import type { Meta, StoryObj } from "@storybook/react";
import { BackToTop } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useRef } from "react";

const meta = {
  title: "Elements/BackToTop",
  component: BackToTop,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<BackToTop/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
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
        // dir={args.direction}
        className="hawa-bg-layoutPrimary-500 hawa-fixed hawa-left-0 hawa-top-0 hawa-flex hawa-h-screen hawa-w-screen hawa-flex-wrap hawa-items-start hawa-justify-start hawa-gap-2 hawa-overflow-y-scroll hawa-p-4"
        ref={ref}
      >
        <BackToTop anchor={ref} />

        <div>
          <h1 className="hawa-text-xl hawa-font-bold">
            Scroll down to see the button
          </h1>
          {new Array(1000).fill(0).map((e) => {
            return (
              <div>
                {Math.random()}
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
export const InContainer: Story = {
  render: (args) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    return (
      <div
        // dir={args.direction}
        className="hawa-flex hawa-flex-row hawa-gap-4 hawa-w-full"
      >
        <div
          className="hawa-h-64 hawa-w-1/2 hawa-overflow-y-scroll hawa-rounded hawa-bg-card hawa-p-4"
          ref={ref1}
        >
          <BackToTop anchor={ref1} />
          {new Array(300).fill(0).map((e) => {
            return (
              <div>
                {Math.random()}
                <br />
              </div>
            );
          })}
        </div>
        <div
          className="hawa-h-64 hawa-w-fit hawa-overflow-y-scroll hawa-rounded hawa-bg-card  hawa-p-4"
          ref={ref2}
        >
          <BackToTop anchor={ref2} />
          {new Array(300).fill(0).map((e) => {
            return (
              <div>
                {Math.random()}
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
