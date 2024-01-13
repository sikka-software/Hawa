import { MainNavItem, SidebarNavItem } from "types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Documentation", href: "/docs" },
    { title: "Components", href: "/docs/components/accordion" },
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
        { title: "Changelog", href: "/docs/changelog", items: [] }
      ]
    },
    {
      title: "Components",
      items: [
        { title: "Accordion", href: "/docs/components/accordion", items: [] },
        { title: "Toaster", href: "/docs/components/toaster", items: [] },
        { title: "Button", href: "/docs/components/button", items: [] }
      ]
    }
  ]
};
