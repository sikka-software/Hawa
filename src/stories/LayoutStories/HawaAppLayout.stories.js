import { HawaAppLayout } from "../../layout";
import { FaAddressCard, FaAdversal, FaAirFreshener } from "react-icons/fa";

export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout]
};

const Template = (args) => {
  return (
    <HawaAppLayout {...args}>
      <div className="w-full text-xs">Requires a refresh sometimes</div>
    </HawaAppLayout>
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
      icon: <FaAddressCard />,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "Menus",
      slug: "home",
      icon: <FaAdversal />,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },

    {
      text: "Analytics",
      slug: "home",
      icon: <FaAirFreshener />,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    }
  ]
};
