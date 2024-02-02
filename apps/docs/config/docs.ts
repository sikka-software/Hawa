import { MainNavItem, SidebarNavItem } from "types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Documentation", href: "/docs" },
    { title: "Elements", href: "/docs/elements/accordion" },
    { title: "Blocks", href: "/docs/blocks/login-form" },
    { title: "Layout", href: "/docs/layout/app-layout" },
    { title: "Hooks", href: "/docs/hooks/use-toast" },
    { title: "Themes", href: "/themes" },
    { title: "Examples", href: "/examples" },
    {
      title: "GitHub",
      href: "https://github.com/sikka-software/hawa",
      external: true
    },
    { title: "Twitter", href: "https://twitter.com/sikka_sa", external: true }
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs", items: [] },
        { title: "Installation", href: "/docs/installation", items: [] },
        { title: "Texts", href: "/docs/texts", items: [] },
        { title: "Changelog", href: "/docs/changelog", items: [] }
      ]
    },
    {
      title: "Hooks",
      items: [{ title: "useToast", href: "/docs/hooks/use-toast", items: [] }]
    },
    {
      title: "Blocks",
      items: [
        { title: "Login Form", href: "/docs/blocks/login-form", items: [] },
        {
          title: "Register Form",
          href: "/docs/blocks/register-form",
          items: []
        }
      ]
    },
    {
      title: "Layout",
      items: [
        { title: "App Layout", href: "/docs/layout/app-layout", items: [] }
      ]
    },
    {
      title: "Elements",
      items: [
        { title: "Accordion", href: "/docs/elements/accordion", items: [] },
        // { title: "Alert", href: "/docs/elements/alert", items: [] },
        // {
        //   title: "Alert Dialog",
        //   href: "/docs/elements/alert-dialog",
        //   items: []
        // },
        // {
        //   title: "Aspect Ratio",
        //   href: "/docs/elements/aspect-ratio",
        //   items: []
        // },
        // { title: "Avatar", href: "/docs/elements/avatar", items: [] },
        // { title: "Badge", href: "/docs/elements/badge", items: [] },
        // { title: "Button", href: "/docs/elements/button", items: [] },
        // { title: "Calendar", href: "/docs/elements/calendar", items: [] },
        // { title: "Card", href: "/docs/elements/card", items: [] },
        // {
        //   title: "Carousel",
        //   href: "/docs/elements/carousel",
        //   items: [],
        //   label: "New"
        // },
        // { title: "Checkbox", href: "/docs/elements/checkbox", items: [] },
        // {
        //   title: "Collapsible",
        //   href: "/docs/elements/collapsible",
        //   items: []
        // },
        // { title: "Combobox", href: "/docs/elements/combobox", items: [] },
        // { title: "Command", href: "/docs/elements/command", items: [] },
        // {
        //   title: "Context Menu",
        //   href: "/docs/elements/context-menu",
        //   items: []
        // },
        // { title: "Data Table", href: "/docs/elements/data-table", items: [] },
        // {
        //   title: "Date Picker",
        //   href: "/docs/elements/date-picker",
        //   items: []
        // },
        // {
        //   title: "Dialog",
        //   href: "/docs/elements/dialog",
        //   items: []
        // },
        // {
        //   title: "Drawer",
        //   href: "/docs/elements/drawer",
        //   items: [],
        //   label: "New"
        // },
        // {
        //   title: "Dropdown Menu",
        //   href: "/docs/elements/dropdown-menu",
        //   items: []
        // },
        // {
        //   title: "Form",
        //   href: "/docs/elements/form",
        //   items: []
        // },
        // {
        //   title: "Hover Card",
        //   href: "/docs/elements/hover-card",
        //   items: []
        // },
        // {
        //   title: "Input",
        //   href: "/docs/elements/input",
        //   items: []
        // },
        // {
        //   title: "Label",
        //   href: "/docs/elements/label",
        //   items: []
        // },
        // {
        //   title: "Menubar",
        //   href: "/docs/elements/menubar",
        //   items: []
        // },
        // {
        //   title: "Navigation Menu",
        //   href: "/docs/elements/navigation-menu",
        //   items: []
        // },
        // {
        //   title: "Pagination",
        //   href: "/docs/elements/pagination",
        //   items: [],
        //   label: "New"
        // },
        // {
        //   title: "Popover",
        //   href: "/docs/elements/popover",
        //   items: []
        // },
        // {
        //   title: "Progress",
        //   href: "/docs/elements/progress",
        //   items: []
        // },
        // {
        //   title: "Radio Group",
        //   href: "/docs/elements/radio-group",
        //   items: []
        // },
        // {
        //   title: "Resizable",
        //   href: "/docs/elements/resizable",
        //   items: [],
        //   label: "New"
        // },
        // {
        //   title: "Scroll Area",
        //   href: "/docs/elements/scroll-area",
        //   items: []
        // },
        // {
        //   title: "Select",
        //   href: "/docs/elements/select",
        //   items: []
        // },
        // {
        //   title: "Separator",
        //   href: "/docs/elements/separator",
        //   items: []
        // },
        // {
        //   title: "Sheet",
        //   href: "/docs/elements/sheet",
        //   items: []
        // },
        // {
        //   title: "Skeleton",
        //   href: "/docs/elements/skeleton",
        //   items: []
        // },
        // {
        //   title: "Slider",
        //   href: "/docs/elements/slider",
        //   items: []
        // },
        // {
        //   title: "Sonner",
        //   href: "/docs/elements/sonner",
        //   items: [],
        //   label: "New"
        // },
        // {
        //   title: "Switch",
        //   href: "/docs/elements/switch",
        //   items: []
        // },
        // {
        //   title: "Table",
        //   href: "/docs/elements/table",
        //   items: []
        // },
        // {
        //   title: "Tabs",
        //   href: "/docs/elements/tabs",
        //   items: []
        // },
        // {
        //   title: "Textarea",
        //   href: "/docs/elements/textarea",
        //   items: []
        // },
        {
          title: "Toaster",
          href: "/docs/elements/toaster",
          items: []
        }
        // {
        //   title: "Toggle",
        //   href: "/docs/elements/toggle",
        //   items: []
        // },
        // {
        //   title: "Toggle Group",
        //   href: "/docs/elements/toggle-group",
        //   items: []
        // },
        // {
        //   title: "Tooltip",
        //   href: "/docs/elements/tooltip",
        //   items: []
        // }
      ]
    }
  ]
};
