import { Card } from "../../elements";
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
    <div className="m-0 flex min-h-screen flex-col gap-2 p-0">
      <div className="flex flex-1 flex-col gap-2">
        <Card className="h-40 p-10">Website Section #1</Card>
        <Card className="h-screen p-10">Website Section #2</Card>
      </div>
      <HawaFooter
        // variation="minimal"
        socialLinks={{
          twitter: "https://twitter.com/sikka_io",
          instagram: "https://instagram.com/sikka_io",
          tiktok: "https://tiktok.com/sikka_io",
          snapchat: "https://tiktok.com/sikka_io"
        }}
        logoURL="https://xakher-images.s3.ap-southeast-1.amazonaws.com/hawa-symbol.png"
        logoText="Hawa"
        copyRights="Sikka Software"
        footerLinks={pagesArray}
      />
    </div>
  );
};

export const Footer = Template.bind({});
