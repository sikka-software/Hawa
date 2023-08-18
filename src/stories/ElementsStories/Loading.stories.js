import React from "react";

import { HawaLoading } from "../../elements";

export default {
  title: "Elements/Loading",
  component: HawaLoading
};

const Template = (args) => {
  return (
    <div>
      <h1 className={"my-4"}>Size: button</h1>
      <div className="flex flex-row gap-24">
        <HawaLoading size="button" />
        <HawaLoading design="dots-bounce" size="button" />
        <HawaLoading design="dots-pulse" size="button" />
      </div>
      <h1 className={"my-4"}>Size: sm</h1>
      <div className="flex flex-row gap-24">
        <HawaLoading size="sm" />
        <HawaLoading design="dots-bounce" size="sm" />
        <HawaLoading design="dots-pulse" size="sm" />
      </div>

      <h1 className={"my-4"}>Size: normal</h1>
      <div className="flex flex-row gap-24">
        <HawaLoading size="normal" />
        <HawaLoading design="dots-bounce" size="normal" />
        <HawaLoading design="dots-pulse" size="normal" />
      </div>

      <h1 className={"my-4"}>Size: lg</h1>
      <div className="flex flex-row gap-24">
        <HawaLoading size="lg" />
        <HawaLoading design="dots-bounce" size="lg" />
        <HawaLoading design="dots-pulse" size="lg" />
      </div>

      <h1 className={"my-4"}>Size: xl</h1>
      <div className="flex flex-row gap-24">
        <HawaLoading size="xl" />
        <HawaLoading design="dots-bounce" size="xl" />
        <HawaLoading design="dots-pulse" size="xl" />
      </div>
    </div>
  );
};

export const Loading = Template.bind({});
