import { addons } from "@storybook/addons";
import HawaTheme from "./HawaTheme";

addons.setConfig({
  //   theme: HawaTheme,
  showNav: false,
  showPanel: false,
  initialActive: "canvas",
  sidebar: {
    showRoots: true,
    collapsedRoots: ["blocks", "layout", "elements"],
    // renderLabel: (item) => <abbr title="...">{item.name}</abbr>
  },
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
});

//   isFullscreen: false,
//   showNav: true,
//   showPanel: true,
//   enableShortcuts: true,
//   showToolbar: true,
//   selectedPanel: undefined,
//   initialActive: "sidebar",
