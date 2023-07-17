import React, { useRef } from "react";

import { BackToTop as BT } from "../../elements";

export default {
  title: "Elements/Back To Top",
  component: BT,
  argTypes: {}
};

const Template = (args) => {
  const ref = useRef(null);

  console.log(args);
  return (
    <div
      dir={args.direction}
      className="fixed left-0 top-0 flex h-screen w-screen flex-wrap items-start justify-start gap-2 overflow-y-scroll bg-red-900"
      ref={ref}
    >
      <BT anchor={ref} {...args} />

      <div></div>
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

export const BackToTop = Template.bind({});
BackToTop.args = {};
