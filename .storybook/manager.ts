import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    renderLabel: () => "😅",
    filters: {
      patterns: (item) => {
        return !item.tags.includes("hide");
      },
    },
  },
});
