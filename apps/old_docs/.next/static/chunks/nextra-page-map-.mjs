import meta from "../../../pages/_meta.tsx";
import blocks_meta from "../../../pages/blocks/_meta.tsx";
import elements_meta from "../../../pages/elements/_meta.tsx";
import layout_meta from "../../../pages/layout/_meta.tsx";
export const pageMap = [{
  data: meta
}, {
  name: "blocks",
  route: "/blocks",
  children: [{
    data: blocks_meta
  }, {
    name: "login-form",
    route: "/blocks/login-form",
    frontMatter: {
      "sidebar_label": "Login Form"
    }
  }]
}, {
  name: "blocks",
  route: "/blocks",
  frontMatter: {
    "sidebar_label": "Blocks"
  }
}, {
  name: "elements",
  route: "/elements",
  children: [{
    data: elements_meta
  }, {
    name: "button",
    route: "/elements/button",
    frontMatter: {
      "sidebar_label": "Button"
    }
  }]
}, {
  name: "elements",
  route: "/elements",
  frontMatter: {
    "sidebar_label": "Elements"
  }
}, {
  name: "generated",
  route: "/generated",
  children: [{
    name: "Accordion",
    route: "/generated/Accordion",
    frontMatter: {
      "sidebar_label": "Accordion"
    }
  }]
}, {
  name: "getting-started",
  route: "/getting-started",
  frontMatter: {
    "sidebar_label": "Getting Started"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebar_label": "Index"
  }
}, {
  name: "introduction",
  route: "/introduction",
  frontMatter: {
    "sidebar_label": "Introduction"
  }
}, {
  name: "layout",
  route: "/layout",
  children: [{
    data: layout_meta
  }, {
    name: "app-layout",
    route: "/layout/app-layout",
    frontMatter: {
      "sidebar_label": "App Layout"
    }
  }]
}, {
  name: "layout",
  route: "/layout",
  frontMatter: {
    "sidebar_label": "Layout"
  }
}];