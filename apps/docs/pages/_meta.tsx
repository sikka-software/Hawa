export default {
  index: {
    title: "Hawa",
    type: "page",
    display: "hidden",
    layout: "default",
    theme: {
      breadcrumb: false,
      sidebar: false,
      pagination: false,
      footer: false,
      main: {
        topContent: <div>foo</div>,
        bottomContent: <span>bar</span>
      }
    }
  },
  introduction: { title: "Introduction" },
  "getting-started": { title: "Getting Started" },
  elements: "",
  blocks: "",
  layout: "",
  theme: { title: "Customize Theme" }
  // "*": {
  //   theme: {
  //     main: {
  //       topContent: <div>foo</div>,
  //       bottomContent: <span>bar</span>
  //     }
  //   }
  // },
  // "--- yoo": {
  //   title: "Do Not Use",
  //   type: "separator"
  // },
  // more: "More: A Super Super Super Super Long Directory",
  // "file-name.with.DOTS": "Filenames with Dots"
};
