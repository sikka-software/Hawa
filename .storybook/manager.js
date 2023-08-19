import { addons } from "@storybook/addons";
import HawaTheme from "./HawaTheme";

addons.setConfig({
  theme: HawaTheme,
  //   isFullscreen: false,
  //   showNav: true,
  //   showPanel: true,
  //   enableShortcuts: true,
  //   showToolbar: true,
  //   selectedPanel: undefined,
  //   initialActive: "sidebar",
  sidebar: {
    showRoots: true,
    collapsedRoots: ["blocks", "layout", "elements"]
  },
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    // measure: { hidden: true },
    // grid: { hidden: true }
  }
});
