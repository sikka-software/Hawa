import React, { useRef } from "react";

import { BackToTop as BT } from "../../elements";

export default {
  title: "Elements/Back To Top",
  component: BT,
  argTypes: {}
};

const FullPageTemplate = (args) => {
  const ref = useRef(null);

  return (
    <div
      dir={args.direction}
      className="bg-primaryLayout-500 fixed left-0 top-0 flex h-screen w-screen flex-wrap items-start justify-start gap-2 overflow-y-scroll p-4"
      ref={ref}
    >
      <BT anchor={ref} {...args} />

      <div>
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
};

export const InFullPage = FullPageTemplate.bind({});
InFullPage.args = {};

const ContainerTemplate = (args) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    <div
      dir={args.direction}
      // className="bg-primaryLayout-500 left-0 top-0 flex flex-wrap items-start justify-start gap-2 overflow-y-scroll p-4"
      className="fixed left-0 top-0 flex h-screen w-screen flex-row gap-4 overflow-y-scroll"
    >
      <div
        className="relative h-64 w-2/4 overflow-auto rounded bg-red-200 p-4"
        ref={ref1}
      >
        <BT anchor={ref1} {...args} />
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
        className="h-64 w-1/4 overflow-auto rounded bg-red-200 p-4"
        ref={ref2}
      >
        <BT anchor={ref2} {...args} />
        {new Array(300).fill(0).map((e) => {
          return (
            <div>
              {Math.random()}
              <br />
            </div>
          );
        })}
      </div>
      <div className="h-full w-[12px]">
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
};
export const InSmallContainer = ContainerTemplate.bind({});
InSmallContainer.args = {};
