import React from "react";

import { HawaSpinner } from "../../elements";

export default {
  title: "Elements/Spinner",
  component: HawaSpinner
};

const Template = (args) => {
  return (
    <div>
      <h1>Size: button</h1>
      <HawaSpinner size="button" />

      <h1>Size: sm</h1>
      <HawaSpinner size="sm" />

      <h1>Size: normal</h1>
      <HawaSpinner size="normal" />

      <h1>Size: lg</h1>
      <HawaSpinner size="lg" />

      <h1>Size: xl</h1>
      <HawaSpinner size="xl" />
    </div>
  );
};

export const Spinner = Template.bind({});
