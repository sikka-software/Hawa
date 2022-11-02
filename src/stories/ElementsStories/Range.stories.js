import React from "react";
import { HawaRange } from "../../elements";

export default { title: "Elements/Range", component: [HawaRange] };

const Template = (args) => {
  const [value, setValue] = React.useState(args.value ?? 40);

  return (
    <>
      <HawaRange
        {...args}
        handleChange={(e) => setValue(e.target.value)}
        value={value}
        startElement={0}
        endElement={100}
        style={{ maxWidth: 300 }}
      />
      <p>Current Value : {value}</p>
    </>
  );
};

export const Range = Template.bind({});
Range.args = {
  value: 40,
  label : "Range Input"
};
