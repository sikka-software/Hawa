import { Footer as HawaFooter } from "../../layout";

export default {
  title: "Layout/Footer",
  component: [HawaFooter]
};

const Template = (args) => {
  let pagesArray = [
    {
      title: "About",
      pages: [
        { label: "Company", link: "/company" },
        { label: "Blog", link: "/blog" },
        { label: "Jobs", link: "/jobs" }
      ]
    },
    {
      title: "Product",
      pages: [
        { label: "Demo", link: "/demo" },
        { label: "Pricing", link: "/pricing" },
        { label: "Case Studies", link: "/studies" }
      ]
    },
    {
      title: "Account",
      pages: [
        { label: "Free Trial", link: "/trial" },
        { label: "Login", link: "/login" },
        { label: "Referrals", link: "/referrals" }
      ]
    }
  ];
  return (
    <div>
      <div className="h-12 bg-red-300 ">Website Content</div>
      <div className="h-40 bg-green-300 ">Website Content</div>
      <div className="h-40 bg-yellow-300 ">Website Content</div>
      <HawaFooter
        socialLinks={{
          twitter: "https://twitter.com/sikka_io",
          instagram: "https://instagram.com/sikka_io",
          tiktok: "https://tiktok.com/sikka_io",
          snapchat: "https://tiktok.com/sikka_io"
        }}
        logoText="SURUB"
        footerLinks={pagesArray}
      />
    </div>
  );
};

export const Footer = Template.bind({});
