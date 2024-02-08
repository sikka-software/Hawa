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
        { title: "Classes", href: "/docs/classes", items: [] },
        { title: "Changelog", href: "/docs/changelog", items: [] }
      ]
    },
    {
      title: "Hooks",
      items: [
        { title: "useToast", href: "/docs/hooks/use-toast", items: [] },
        { title: "useClipboard", href: "/docs/hooks/use-clipboard", items: [] }
      ]
    },
    {
      title: "Blocks",
      items: [
        { title: "Auth Buttons", href: "/docs/blocks/auth-buttons", items: [] },
        { title: "Contact Form", href: "/docs/blocks/contact-form", items: [] },
        { title: "Login Form", href: "/docs/blocks/login-form", items: [] },
        {
          title: "Register Form",
          href: "/docs/blocks/register-form",
          items: []
        },
        {
          title: "Reset Password",
          href: "/docs/blocks/reset-password",
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
        { title: "Alert", href: "/docs/elements/alert", items: [] },
        {
          title: "Toaster",
          href: "/docs/elements/toaster",
          items: []
        }
      ]
    }
  ]
};
