import React from "react";
import { HawaAdCard } from "../../../elements";

export default {
  title: "Elements/Cards/Ad",
  component: [HawaAdCard],
  argTypes: {},
  args: {
    lang: "en"
  }
};

export const Ad = (args) => {
  return (
    <>
      <div>
        <div className="m-2 ml-0 text-lg font-bold">Horizontal</div>
        <HawaAdCard orientation={"horizontal"} {...args} />
      </div>
      <div>
        <div className="m-2 ml-0 text-lg font-bold">Vertical</div>
        <HawaAdCard orientation={"vertical"} {...args} />
      </div>
    </>
  );
};

Ad.args = {
  title: "Seera App",
  description:
    "Increase your hiring chances by turning your CV into a digital one with a link"
};
