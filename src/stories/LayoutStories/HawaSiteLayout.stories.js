import { HawaSiteLayout } from "../../layout";

export default {
  title: "Layout/SiteLayout",
  component: [HawaSiteLayout]
};

const Template = (args) => {
  return (
    <HawaSiteLayout {...args}>
      <div className="w-full bg-red-400 text-xs">Content here</div>
      <div>
        <h1>Job Title: Software Engineer</h1>
        <h2>Company: XYZ Inc.</h2>
        <h3>Location: San Francisco, CA (Remote work option available)</h3>
        <div>
          <b>Job Description:</b>
          <br />
          We are seeking a highly skilled software engineer to join our team. In
          this role, you will be responsible for designing, developing, and
          maintaining software systems, as well as collaborating with
          cross-functional teams to identify and implement new features and
          improvements. The ideal candidate will have experience with React,
          Node.js and have a strong understanding of web development. You will
          be working on a variety of projects and will be expected to be able to
          deliver quality code on time and on budget. You will also be
          responsible for collaborating with other software engineers, product
          managers, stakeholders, and clients to deliver a high-quality product.
          <br />
          You will be responsible for:
          <ul>
            <li>Designing and implementing new features and improvements</li>
            <li>Writing clean, maintainable, and efficient code</li>
            <li>Debugging and troubleshooting issues</li>
            <li>
              Ensuring the performance, quality, and responsiveness of
              applications
            </li>
            <li>
              Collaborating with cross-functional teams to define, design, and
              ship new features
            </li>
            <li>
              Participating in code reviews and providing constructive feedback
              to peers
            </li>
            <li>
              Staying up-to-date with the latest industry trends and
              technologies
            </li>
          </ul>
        </div>
        <div>
          <b>About the Company:</b>
          <br />
          XYZ Inc. is a leader in the technology industry, with a focus on
          developing innovative software solutions. We are a fast-paced and
          dynamic company, with a strong emphasis on teamwork and collaboration.
        </div>
      </div>
    </HawaSiteLayout>
  );
};

export const SiteLayout = Template.bind({});
SiteLayout.args = {
  direction: "rtl",
  stickyNav: true,
  navigationSize: "md",
  // appTitle: "قوائم",
  // username: "Zakher Masri",
  // userEmail: "zakhermasri@gmail.com",
  // logoLink: "https://something.com/docs/images/logo.svg",
  // profileItems: [
  //   {
  //     text: "Dashboard",
  //     slug: "home",
  //     // icon: Person,
  //     action: () => {
  //       setCurrentPage("home");
  //       setPageTitle("Home");
  //     }
  //   },
  //   {
  //     text: "Billing",
  //     slug: "home",
  //     // icon: Person,
  //     action: () => {
  //       setCurrentPage("home");
  //       setPageTitle("Home");
  //     }
  //   },
  //   {
  //     text: "Analytics",
  //     slug: "home",
  //     // icon: Person,
  //     action: () => {
  //       setCurrentPage("home");
  //       setPageTitle("Home");
  //     }
  //   },
  //   {
  //     text: "عربي",
  //     slug: "home",
  //     // icon: Person,
  //     action: () => {
  //       setCurrentPage("home");
  //       setPageTitle("Home");
  //     }
  //   }
  // ],
  navItems: [
    {
      label: "Home",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      label: "Menus",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      label: "Analytics",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    }
  ]
};
