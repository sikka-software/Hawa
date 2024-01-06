import React from "react";

import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    renderLabel: ({ type, name }) => (
      <div style={{ fontSize: type === "root" ? 18 : 14 }}>{name}</div>
    ),
    filters: {
      patterns: (item: any) => !item.tags.includes("hide")
    }
  }
});
