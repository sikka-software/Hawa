import React from "react";
// import { HawaCodeBlock } from "../../elements";

export default {
  title: "Elements/Code/Inline Code",
  // component: [HawaCodeBlock],
  argTypes: {
    content: {
      control: "array",
      description: "The title of the acordion"
    }
  }
};

export const InlineCode = (args) => {
  return (
    <div>
      <p className="mt-4">
        This is an inline code using a className called{" "}
        <span className="inline-code">inline-code</span> in any html element
      </p>
      {/* <HawaCodeBlock language="js" code="npm install @sikka/hawa" /> */}
    </div>
  );
};

InlineCode.args = {};
