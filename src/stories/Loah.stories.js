import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Loah } from "../components/Loah/Loah";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const [expand, setExpand] = useState(false);

  const buttons = [
    {
      name: "something",
    },
    {
      name: "something",
    },
    {
      name: "something",
    },
  ];

  return (
    <Loah
      expended={expand}
      handleExpand={() => setExpand(!expand)}
      bgColor={"red"}
      direction={"right"}
      buttons={buttons}
    />
  );
});
