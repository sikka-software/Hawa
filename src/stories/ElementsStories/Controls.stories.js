import React from "react";
import { HawaRange } from "../../elements";

export default { title: "Elements/Range", component: [HawaRange] };

export const Range = (args) => {
  return (
    <>
      <HawaRange
        {...args}
        handleChange={(e) => console.log("changign ", e.target.value)}
        startElement={0}
        endElement={100}
        style={{ maxWidth: 300 }}
      />
    </>
  );
};
