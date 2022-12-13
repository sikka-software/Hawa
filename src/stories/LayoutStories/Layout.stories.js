import { HawaLayout } from "../../layout";

export default {
  title: "Layout/AppLayout",
  component: [HawaLayout]
};

const Template = (args) => {
  return (
    <HawaLayout {...args}>
      <div className="w-full text-xs">Requires a refresh sometimes</div>
    </HawaLayout>
  );
};

export const AppLayout = Template.bind({});
AppLayout.args = {
  appTitle: "قوائم",
  username: "Zakher Masri",
  userEmail: "zakhermasri@gmail.com",
  logoLink: "https://something.com/docs/images/logo.svg",
  profileItems: [
    {
      text: "Dashboard",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "Billing",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },

    {
      text: "Analytics",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "عربي",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    }
  ],
  drawerItems: [
    {
      text: "Home",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "Menus",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },

    {
      text: "Analytics",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    }
  ]
};
