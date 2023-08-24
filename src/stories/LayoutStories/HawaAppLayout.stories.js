import { Button, UserFeedback } from "../../elements";
import {
  AppLayout,
  HawaAppLayout,
  HawaAppLayoutSimplified
} from "../../layout";
import { FaFolderOpen, FaPoll, FaHome } from "react-icons/fa";
import { t, setLocale } from "../../translations/i18n";

export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout, HawaAppLayoutSimplified, AppLayout]
};

const Template = (args) => {
  return (
    <HawaAppLayout {...args}>
      <div className=" h-full p-4">
        <div className="m-0 flex h-full w-full flex-row-reverse items-center justify-center overflow-auto rounded-lg border-2 border-dashed border-black bg-blue-50">
          <span className=" font-bold capitalize text-gray-400">
            App Content
            <UserFeedback
              question="How much do you like this Layout component?"
              options={[1, 2, 3, 4, 5]}
              texts={{
                least: "not much",
                most: "Very much"
              }}
              title="Quick question"
              onOptionClicked={(op) => console.log("option is clicked: ", op)}
            />
          </span>
        </div>
        {/* <div className=" outline-1 outline-black">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pellentesque, neque ut finibus ornare, nisi tortor facilisis nunc, ut
          placerat odio mi in nunc. Donec sollicitudin dui vitae cursus gravida.
          Cras porttitor fermentum orci, vel eleifend sapien venenatis eget.
          Pellentesque ultricies iaculis vulputate. Nunc lobortis felis lorem,
          vitae volutpat sapien vestibulum ut. Etiam sagittis elementum mauris,
          at ultricies urna porttitor quis. Donec lobortis, dui sit amet
          pharetra mollis, massa dui posuere felis, vitae placerat orci nibh
          malesuada mi. Sed sed rhoncus tortor. Mauris vestibulum erat ac
          molestie congue. Fusce elit erat, volutpat eu fermentum non, molestie
          non purus. Maecenas quam turpis, bibendum sed erat ac, pellentesque
          mattis neque. Sed placerat vestibulum diam. Duis quis feugiat eros.
          Aenean quam diam, tristique et dignissim vitae, aliquet ut nulla. Sed
          fermentum placerat mollis. Cras dolor ipsum, posuere tempor quam eget,
          porta imperdiet elit. Nulla scelerisque elementum venenatis.
          Suspendisse quis lorem tempor, semper libero fermentum, condimentum
          nibh. Curabitur elementum, metus a dictum euismod, ligula neque
          efficitur purus, eget egestas tellus urna malesuada dolor. Maecenas
          iaculis urna vitae vulputate pulvinar. Vivamus metus urna, feugiat vel
          auctor ullamcorper, sagittis vel mauris. Fusce ullamcorper rhoncus
          dolor, at porta arcu feugiat eget. Phasellus ligula nibh, placerat sed
          augue at, ullamcorper porttitor sapien. Nulla consectetur, quam vitae
          convallis convallis, nisi quam vulputate dolor, quis scelerisque enim
          enim ac est. Pellentesque quis eros eu dui auctor sodales. Donec vitae
          ullamcorper odio. Quisque placerat blandit metus nec egestas. Proin
          sed ligula id enim molestie bibendum. Vivamus imperdiet rhoncus nibh,
          eu mattis diam tincidunt vitae. Fusce et tellus ut nulla cursus
          lobortis tincidunt eu mi. Vivamus rutrum pharetra odio at tempus.
          Fusce ullamcorper placerat lectus, at scelerisque purus dictum ac.
          Duis neque justo, tempor sit amet ligula in, dapibus pellentesque ex.
          Proin tempus porttitor orci. Fusce ut mauris tellus. Mauris luctus
          pharetra volutpat. Vivamus condimentum sollicitudin justo, a aliquet
          nibh lobortis ac. Quisque enim erat, varius in mauris nec, convallis
          mattis ipsum. Fusce sollicitudin magna placerat purus aliquam lacinia.
          Integer suscipit nulla vel enim aliquet, sit amet venenatis ante
          pharetra. Duis mattis purus vel eros pellentesque scelerisque. Nulla
          maximus diam nec mauris commodo cursus. Mauris molestie sapien sed
          tortor finibus, sit amet euismod diam viverra. Nulla eget arcu tortor.
          In quis leo diam. Pellentesque bibendum metus non sem finibus
          tristique. Proin nec gravida lorem. Nunc nulla augue, sagittis
          condimentum tincidunt quis, ultrices id ipsum. Nam in convallis
          libero. Fusce auctor eget leo et finibus. Curabitur lacus dolor,
          ornare sit amet nisl ut, condimentum aliquet lacus. Curabitur dui
          erat, auctor vitae tortor at, ullamcorper iaculis magna. Nam lacus
          purus, blandit in mattis sed, maximus vel elit. Quisque ornare laoreet
          efficitur. Proin auctor nibh id turpis pretium, ut vestibulum purus
          auctor. Duis consequat dui eu libero tempus pulvinar. Quisque viverra
          sit amet urna sit amet sodales. Aliquam elementum urna sed tempor
          auctor. Donec non sem accumsan, suscipit purus vitae, dignissim lacus.
          Cras id molestie dolor. Aenean congue sodales mauris eu blandit. Morbi
          erat magna, rutrum fermentum dui et, auctor dapibus lacus. Mauris
          egestas orci orci, in rutrum augue volutpat sit amet. Praesent
          hendrerit augue eu erat malesuada, et egestas orci porta. Donec tellus
          risus, venenatis sit amet erat a, dignissim dapibus est. Donec
          bibendum nunc ac justo accumsan rhoncus. Aenean iaculis ante ultrices,
          rhoncus dui at, tempus justo. Vestibulum fermentum, mauris quis
          porttitor pretium, mauris tellus dignissim nulla, in egestas purus
          risus eu ex. Aenean augue lectus, egestas ut semper id, lobortis sit
          amet augue. Etiam vehicula rhoncus ante nec viverra. Etiam sed libero
          et nunc gravida malesuada et id metus. Quisque dignissim ligula nunc,
          a finibus nisi tempus et. Suspendisse ultrices felis nulla, sit amet
          iaculis nibh condimentum sit amet. In commodo convallis justo, vel
          tristique dolor tristique non. Praesent quis fringilla urna, eget
          vulputate felis. Ut quis euismod elit. Pellentesque sagittis cursus
          turpis et porta. Aenean tellus arcu, laoreet gravida tempus nec,
          pulvinar quis augue. Pellentesque sem tortor, scelerisque nec vehicula
          vitae, sodales in turpis. Vivamus laoreet condimentum diam, molestie
          sollicitudin purus varius eget. Mauris ut condimentum tortor. Etiam
          tincidunt convallis felis, ut ornare nisi tempus in. Mauris et nisl
          sem. Sed eu dui faucibus, pellentesque felis at, sagittis neque. Fusce
          quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          pellentesque, neque ut finibus ornare, nisi tortor facilisis nunc, ut
          placerat odio mi in nunc. Donec sollicitudin dui vitae cursus gravida.
          Cras porttitor fermentum orci, vel eleifend sapien venenatis eget.
          Pellentesque ultricies iaculis vulputate. Nunc lobortis felis lorem,
          vitae volutpat sapien vestibulum ut. Etiam sagittis elementum mauris,
          at ultricies urna porttitor quis. Donec lobortis, dui sit amet
          pharetra mollis, massa dui posuere felis, vitae placerat orci nibh
          malesuada mi. Sed sed rhoncus tortor. Mauris vestibulum erat ac
          molestie congue. Fusce elit erat, volutpat eu fermentum non, molestie
          non purus. Maecenas quam turpis, bibendum sed erat ac, pellentesque
          mattis neque. Sed placerat vestibulum diam. Duis quis feugiat eros.
          Aenean quam diam, tristique et dignissim vitae, aliquet ut nulla. Sed
          fermentum placerat mollis. Cras dolor ipsum, posuere tempor quam eget,
          porta imperdiet elit. Nulla scelerisque elementum venenatis.
          Suspendisse quis lorem tempor, semper libero fermentum, condimentum
          nibh. Curabitur elementum, metus a dictum euismod, ligula neque
          efficitur purus, eget egestas tellus urna malesuada dolor. Maecenas
          iaculis urna vitae vulputate pulvinar. Vivamus metus urna, feugiat vel
          auctor ullamcorper, sagittis vel mauris. Fusce ullamcorper rhoncus
          dolor, at porta arcu feugiat eget. Phasellus ligula nibh, placerat sed
          augue at, ullamcorper porttitor sapien. Nulla consectetur, quam vitae
          convallis convallis, nisi quam vulputate dolor, quis scelerisque enim
          enim ac est. Pellentesque quis eros eu dui auctor sodales. Donec vitae
          ullamcorper odio. Quisque placerat blandit metus nec egestas. Proin
          sed ligula id enim molestie bibendum. Vivamus imperdiet rhoncus nibh,
          eu mattis diam tincidunt vitae. Fusce et tellus ut nulla cursus
          lobortis tincidunt eu mi. Vivamus rutrum pharetra odio at tempus.
          Fusce ullamcorper placerat lectus, at scelerisque purus dictum ac.
          Duis neque justo, tempor sit amet ligula in, dapibus pellentesque ex.
          Proin tempus porttitor orci. Fusce ut mauris tellus. Mauris luctus
          pharetra volutpat. Vivamus condimentum sollicitudin justo, a aliquet
          nibh lobortis ac. Quisque enim erat, varius in mauris nec, convallis
          mattis ipsum. Fusce sollicitudin magna placerat purus aliquam lacinia.
          Integer suscipit nulla vel enim aliquet, sit amet venenatis ante
          pharetra. Duis mattis purus vel eros pellentesque scelerisque. Nulla
          maximus diam nec mauris commodo cursus. Mauris molestie sapien sed
          tortor finibus, sit amet euismod diam viverra. Nulla eget arcu tortor.
          In quis leo diam. Pellentesque bibendum metus non sem finibus
          tristique. Proin nec gravida lorem. Nunc nulla augue, sagittis
          condimentum tincidunt quis, ultrices id ipsum. Nam in convallis
          libero. Fusce auctor eget leo et finibus. Curabitur lacus dolor,
          ornare sit amet nisl ut, condimentum aliquet lacus. Curabitur dui
          erat, auctor vitae tortor at, ullamcorper iaculis magna. Nam lacus
          purus, blandit in mattis sed, maximus vel elit. Quisque ornare laoreet
          efficitur. Proin auctor nibh id turpis pretium, ut vestibulum purus
          auctor. Duis consequat dui eu libero tempus pulvinar. Quisque viverra
          sit amet urna sit amet sodales. Aliquam elementum urna sed tempor
          auctor. Donec non sem accumsan, suscipit purus vitae, dignissim lacus.
          Cras id molestie dolor. Aenean congue sodales mauris eu blandit. Morbi
          erat magna, rutrum fermentum dui et, auctor dapibus lacus. Mauris
          egestas orci orci, in rutrum augue volutpat sit amet. Praesent
          hendrerit augue eu erat malesuada, et egestas orci porta. Donec tellus
          risus, venenatis sit amet erat a, dignissim dapibus est. Donec
          bibendum nunc ac justo accumsan rhoncus. Aenean iaculis ante ultrices,
          rhoncus dui at, tempus justo. Vestibulum fermentum, mauris quis
          porttitor pretium, mauris tellus dignissim nulla, in egestas purus
          risus eu ex. Aenean augue lectus, egestas ut semper id, lobortis sit
          amet augue. Etiam vehicula rhoncus ante nec viverra. Etiam sed libero
          et nunc gravida malesuada et id metus. Quisque dignissim ligula nunc,
          a finibus nisi tempus et. Suspendisse ultrices felis nulla, sit amet
          iaculis nibh condimentum sit amet. In commodo convallis justo, vel
          tristique dolor tristique non. Praesent quis fringilla urna, eget
          vulputate felis. Ut quis euismod elit. Pellentesque sagittis cursus
          turpis et porta. Aenean tellus arcu, laoreet gravida tempus nec,
          pulvinar quis augue. Pellentesque sem tortor, scelerisque nec vehicula
          vitae, sodales in turpis. Vivamus laoreet condimentum diam, molestie
          sollicitudin purus varius eget. Mauris ut condimentum tortor. Etiam
          tincidunt convallis felis, ut ornare nisi tempus in. Mauris et nisl
          sem. Sed eu dui faucibus, pellentesque felis at, sagittis neque. Fusce
          quis leo id mauris pulvinar auctor. Etiam vel viverra est. Integer et
          molestie nibh, non blandit mauris. Aenean scelerisque, sapien a
          vulputate pretium, neque magna euismod nunc, in fermentum mauris quam
          quis lectus. Fusce semper elit non lorem dictum semper. Etiam at erat
          a quam auctor feugiat. Sed aliquet tempus euismod. Nulla facilisi.
          Aenean quam massa, porttitor et purus eu, aliquet scelerisque mauris.
          Integer nec magna vel urna fermentum ullamcorper at nec felis. Mauris
          efficitur, dui sed luctus tempor, ipsum enim faucibus urna,
          pellentesque rhoncus urna enim vitae quam. Donec sollicitudin, justo
          sed laoreet interdum, metus nisl ornare mauris, et maximus neque arcu
          eu enim. Integer rutrum justo et consequat fermentum. Vestibulum
          ullamcorper congue sodales. Morbi condimentum, mauris vel vehicula
          fringilla, dolor metus placerat augue, sit amet ultricies arcu sem id
          purus. Sed vehicula diam ex, at porttitor erat sagittis in. Nulla
          facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Maecenas dignissim ipsum eu diam
          iaculis, nec rutrum ligula vehicula. Curabitur semper semper nibh nec
          lacinia. Nunc bibendum ipsum justo, in euismod quam molestie quis.
          Donec felis enim, vestibulum viverra odio vel, ullamcorper elementum
          mauris. Nulla non nibh libero. Nulla in tortor et lacus convallis
          lobortis quis nec lacus. Proin tincidunt pretium sapien, a semper urna
          vehicula quis. Nullam leo velit, porta a molestie eu, varius ut leo.
          Nulla eros libero, rhoncus nec dignissim ullamcorper, gravida vel
          orci. Quisque ullamcorper, dolor ac cursus lacinia, neque dui
          efficitur mi, at ultricies nisi dui in justo. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris congue urna id neque pretium, non eleifend ipsum porta. Etiam
          quam nisl, scelerisque at porta eget, scelerisque sit amet sem. Sed
          vehicula sagittis nisl, quis bibendum mi egestas in. Quisque vel
          eleifend purus, non dapibus magna. Proin orci libero, tristique
          vulputate urna sit amet, fringilla sollicitudin lacus. Proin sit amet
          rhoncus purus. Sed at maximus erat, et sollicitudin mauris. Ut
          elementum, dolor id mattis efficitur, risus diam ullamcorper dolor,
          sit amet aliquet libero turpis et enim. Suspendisse pretium nisl ex,
          nec venenatis justo hendrerit a. Ut fringilla dolor eu turpis
          imperdiet, et porttitor lorem eleifend. Cras id nulla auctor turpis
          posuere elementum vel nec quam. Vestibulum mollis quis mi eget
          aliquam. Phasellus eu nisi at arcu fermentum consectetur. Aenean
          aliquam viverra eros eget egestas. Suspendisse sed risus cursus,
          dapibus nulla vel, euismod dolor. Sed ullamcorper urna id vehicula
          consequat. Praesent molestie iaculis nulla ut ullamcorper. Fusce
          lobortis leo vitae massa pharetra ullamcorper. Quisque laoreet
          suscipit sagittis. Cras eget nulla tortor. Proin auctor velit eu ante
          tempor, id faucibus dui ultricies. Proin sodales cursus laoreet.
          Aenean diam odio, condimentum quis fermen
        </div> */}
      </div>
    </HawaAppLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  currentPage: "new-item",
  drawerItems: [
    [
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Items",
        slug: "files",
        icon: <FaFolderOpen />,
        // action: handleItemClick,
        subItems: [
          {
            label: "New Item",
            slug: "new-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "Files Items",
            slug: "file-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },

      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Jobs",
        slug: "jobs",
        icon: <FaPoll />,
        subItems: [
          {
            label: "New Job Item",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "New Item",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "Files Items",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics3",
        icon: <FaPoll />
      }
    ]
  ],
  profileMenuItems: [
    [
      {
        label: "Dashboard"
      },
      {
        label: "Billing"
      },
      {
        label: "Settings",
        element: <div className="rounded bg-red-300 p-2 px-4">عربي</div>
      },
      {
        label: "Sign Out",
        isButton: true
      }
    ]
  ],
  pageTitle: "Dashboard Page",
  topBar: false,
  direction: "ltr",
  username: "Zakher Masri",
  email: "zakher@sikka.io",
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
  // logoLink:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  // logoSymbol:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
  ]
};
export const WithNavbar = Template.bind({});
WithNavbar.args = {
  currentPage: "new-item",
  drawerItems: [
    [
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Items",
        slug: "files",
        icon: <FaFolderOpen />,
        // action: handleItemClick,
        subItems: [
          {
            label: "New Item",
            slug: "new-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "Files Items",
            slug: "file-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },

      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Jobs",
        slug: "jobs",
        icon: <FaPoll />,
        subItems: [
          {
            label: "New Job Item",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "New Item",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "Files Items",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics3",
        icon: <FaPoll />
      }
    ]
  ],
  profileMenuItems: [
    [
      {
        label: "Dashboard"
      },
      {
        label: "Billing"
      },
      {
        label: "Settings",
        element: <div className="rounded bg-red-300 p-2 px-4">عربي</div>
      },
      {
        label: "Sign Out",
        isButton: true
      }
    ]
  ],
  pageTitle: "Dashboard Page",
  topBar: true,
  direction: "ltr",
  username: "Zakher Masri",
  email: "zakher@sikka.io",
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",

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
  ]
};

const RTLTemplate = (args) => {
  return (
    <HawaAppLayout {...args}>
      <div className=" h-full p-4">
        <div className="m-0 flex h-full w-full flex-row-reverse items-center justify-center overflow-auto rounded-lg border-2 border-dashed border-black bg-blue-50">
          <span className=" font-bold capitalize text-gray-400">
            App Content
            <UserFeedback
              question="How much do you like this Layout component?"
              options={[1, 2, 3, 4, 5]}
              texts={{
                least: "not much",
                most: "Very much"
              }}
              position="bottom-left"
              title="Quick question"
              onOptionClicked={(op) => console.log("option is clicked: ", op)}
            />
          </span>
        </div>
      </div>
    </HawaAppLayout>
  );
};

export const RTL = RTLTemplate.bind({});
RTL.args = {
  currentPage: "analytics3",
  profileMenuItems: [
    [
      {
        label: "Dashboard"
      },
      {
        label: "Billing"
      },
      {
        label: "Settings",
        element: <div className="rounded bg-red-300 p-2 px-4">عربي</div>
      },
      {
        label: "Sign Out",
        isButton: true
      }
    ]
  ],
  drawerItems: [
    [
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Items",
        slug: "files",
        icon: <FaFolderOpen />,
        // action: handleItemClick,
        subItems: [
          {
            label: "New Item",
            slug: "new-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "Files Items",
            slug: "file-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },

      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Jobs",
        slug: "jobs",
        icon: <FaPoll />,
        subItems: [
          {
            label: "New Job Item",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "New Item",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "Files Items",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Analytics",
        slug: "analytics3",
        icon: <FaPoll />
      }
    ]
  ],
  pageTitle: "Dashboard Page",
  topBar: true,
  direction: "rtl",
  username: "Zakher Masri",
  email: "zakher@sikka.io",
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
  // logoLink:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  // logoSymbol:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
  ]
};

const SimplifiedTemplate = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <HawaAppLayoutSimplified
      {...args}
      direction={locale === "ar" ? "rtl" : "ltr"}
      texts={{
        expandSidebar: t("expandSidebar"),
        collapseSidebar: t("collapseSidebar")
      }}
    >
      <div className=" h-full  p-4">
        <div className="m-0 flex h-full w-full flex-row-reverse items-center justify-center overflow-auto rounded-lg border-2 border-dashed border-black bg-blue-50">
          <span className=" font-bold capitalize text-gray-400">
            App Content
          </span>
        </div>
      </div>
    </HawaAppLayoutSimplified>
  );
};

export const Simplified = SimplifiedTemplate.bind({});
Simplified.args = {
  onSettingsClick: () => console.log("going to settings"),
  currentPage: "files",

  profileMenuItems: [
    {
      label: "Dashboard",
      value: "Dashboard",
      action: () => console.log("going to dashboard")
    },
    {
      value: "Billing",
      label: "Billing",
      action: () => console.log("going to Billing")
    },
    {
      value: "عربي",
      label: "عربي",
      action: () => console.log("going to عربي")
      // element: <div className="rounded-inner bg-red-300 p-2 px-4">عربي</div>
    },
    {
      label: "Sign Out",
      value: "Sign Out",
      action: () => console.log("going to Sign Out"),
      highlighted: true
    }
  ],
  drawerItems: [
    [
      {
        label: "Home",
        slug: "home",
        icon: <FaHome />
      },
      {
        label: "Items",
        slug: "items",
        icon: <FaFolderOpen />,
        // action: handleItemClick,
        subItems: [
          {
            label: "New Item",
            slug: "new-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "New Item",
            slug: "new-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "New Item",
            slug: "new-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },
          {
            label: "Files Items",
            slug: "file-item",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },

      {
        label: "Analytics",
        slug: "analytics",
        icon: <FaPoll />
        // action: handleItemClick
      },
      {
        label: "Jobs",
        slug: "jobs",
        icon: <FaPoll />,
        subItems: [
          {
            label: "New Job Item",
            slug: "new-job",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
          },

          {
            label: "Files Items",
            slug: "files",
            icon: <FaFolderOpen />,
            action: () => console.log("going to new item")
            // action: handleItemClick
          }
        ]
      },
      {
        label: "Activity",
        slug: "activity",
        icon: <FaPoll />
        // action: handleItemClick
      }
    ]
  ],
  // pageTitle: "Dashboard Page",
  topBar: true,
  username: "Zakher Masri",
  email: "zakher@sikka.io",
  DrawerFooterActions: (
    <>
      <Button size="icon" variant={"light"}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1.5em"
          width="1.5em"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>{" "}
      </Button>
    </>
  ),
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
  // logoLink:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  // logoSymbol:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
  ]
};
const AppLayoutTemplate = (args, globals) => {
  const locale = globals.globals.locale === "ar" ? "ar" : "en";
  setLocale(locale);

  return (
    <AppLayout
      {...args}
      direction={locale === "ar" ? "rtl" : "ltr"}
      texts={{
        expandSidebar: t("expandSidebar"),
        collapseSidebar: t("collapseSidebar")
      }}
    >
      <div className=" h-full  p-4">
        <div className="m-0 flex h-full w-full flex-row-reverse items-center justify-center overflow-auto rounded-lg border-2 border-dashed border-black bg-blue-50">
          <span className=" font-bold capitalize text-gray-400">
            App Content
          </span>
        </div>
      </div>
    </AppLayout>
  );
};
export const AppLayoutStory = AppLayoutTemplate.bind({});
AppLayoutStory.args = {
  onSettingsClick: () => console.log("going to settings"),
  currentPage: "files",

  profileMenuItems: [
    {
      label: "Dashboard",
      value: "Dashboard",
      action: () => console.log("going to dashboard")
    },
    {
      value: "Billing",
      label: "Billing",
      action: () => console.log("going to Billing")
    },
    {
      value: "عربي",
      label: "عربي",
      action: () => console.log("going to عربي")
      // element: <div className="rounded-inner bg-red-300 p-2 px-4">عربي</div>
    },
    {
      label: "Sign Out",
      value: "Sign Out",
      action: () => console.log("going to Sign Out"),
      highlighted: true
    }
  ],

  drawerItems: [
    {
      label: "Home",
      value: "home",
      icon: <FaHome />
    },
    {
      label: "Items",
      value: "items",
      icon: <FaFolderOpen />,
      // action: handleItemClick,
      subitems: [
        {
          label: "New Item",
          value: "new-item",
          icon: <FaFolderOpen />,
          action: () => console.log("going to new item")
        },
        {
          label: "New Item",
          value: "new-item",
          icon: <FaFolderOpen />,
          action: () => console.log("going to new item")
        },
        {
          label: "New Item",
          value: "new-item",
          icon: <FaFolderOpen />,
          action: () => console.log("going to new item")
        },
        {
          label: "Files Items",
          value: "file-item",
          icon: <FaFolderOpen />,
          action: () => console.log("going to new item")
          // action: handleItemClick
        }
      ]
    },

    {
      label: "Analytics",
      value: "analytics",
      icon: <FaPoll />
      // action: handleItemClick
    },
    {
      label: "Jobs",
      value: "jobs",
      icon: <FaPoll />,
      subitems: [
        {
          label: "New Job Item",
          value: "new-job",
          icon: <FaFolderOpen />
          // action: () => console.log("going to new item")
        },

        {
          label: "Files Items",
          value: "files",
          icon: <FaFolderOpen />
          // action: () => console.log("going to new item")
          // action: handleItemClick
        }
      ]
    },
    {
      label: "Activity",
      value: "activity",
      icon: <FaPoll />
      // action: handleItemClick
    }
  ],
  // pageTitle: "Dashboard Page",
  topBar: true,
  username: "Zakher Masri",
  email: "zakher@sikka.io",
  DrawerFooterActions: (
    <>
      <Button size="icon" variant={"light"}>
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1.5em"
          width="1.5em"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>{" "}
      </Button>
    </>
  ),
  logoSymbol:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-symbol-purple.svg",
  logoLink:
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/seera/seera-horizontal-wordmark-purple.svg",
  // logoLink:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75",
  // logoSymbol:
  // "https://beta-my.qawaim.app/_next/image?url=%2Fqawaim-symbol.svg&w=256&q=75",
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
  ]
};

AppLayoutStory.storyName = "App Layout (v0.1)";
