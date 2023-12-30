import React from "react";

import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    renderLabel: (t) => {
      return <div style={{ fontSize: t.isRoot ? 18 : 14 }}>{t.name}</div>;
    },
    filters: {
      patterns: (item: any) => {
        return !item.tags.includes("hide");
      },
    },
  },
});
