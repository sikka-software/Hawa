import React from "react";
import {
  ActionCard,
  Button,
  HawaAdCard,
  HawaButton,
  HawaIconCount,
  HawaItemCard,
  HawaLandingCard,
  HawaPricingCard,
  Tooltip
} from "../../elements";
import {
  FaClone,
  FaComment,
  FaReply,
  FaShare,
  FaTrash,
  FaEdit
} from "react-icons/fa";
import { storiesOf } from "@storybook/react";

const AdCardStory = (args) => {
  return (
    <>
      <div>
        <div className="m-2 ml-0 text-lg font-bold dark:text-white">
          Horizontal
        </div>
        <HawaAdCard orientation="horizontal" {...args} />
      </div>
      <div>
        <div className="m-2 ml-0 text-lg font-bold dark:text-white">
          Vertical
        </div>
        <HawaAdCard orientation="vertical" {...args} />
      </div>
    </>
  );
};

const VerticalCard = (args) => {
  return (
    <HawaItemCard
      {...args}
      cardImage={"ji"}
      // onCardClick={() => console.log("card clicked")}
      headerActions={[
        { label: "QR Code", action: () => console.log("clicking on QR") },
        {
          label: "Menu Settings",
          value: "Menu Settings",
          action: () => console.log("clicking on Settings")
        },
        {
          label: "Menu Styles",
          value: "Menu Styles",
          action: () => console.log("clicking on Styles")
        },
        {
          label: "Analytics",
          value: "Analytics",
          action: () => console.log("clicking on Analytics")
        }
      ]}
      header={
        <div>
          <h1>Menu</h1>
        </div>
      }
      content={
        <div>
          <p>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      }
      actions={
        <div className="flex flex-row gap-2 ">
          <Tooltip delayDuration={200} content={"Duplicate"}>
            <Button tooltip="dublicate" size={"icon"}>
              <FaClone />
            </Button>
          </Tooltip>

          <Tooltip delayDuration={200} content={"Delete"}>
            <Button tooltip="delete" size={"icon"}>
              <FaTrash />
            </Button>
          </Tooltip>

          <Tooltip delayDuration={200} content={"Edit"}>
            <Button tooltip="edit" size={"icon"}>
              <FaEdit />
            </Button>
          </Tooltip>
        </div>
      }
      counts={
        <div className="flex flex-row ">
          <HawaIconCount icon={<FaComment />} count="30" />
          <HawaIconCount icon={<FaReply />} count="20" />
        </div>
      }
    />
  );
};

const HorizontalCard = (args) => {
  let cardProps = {
    ...args,
    orientation: "horizontal",
    cardImage: "test",
    // onCardClick={() => console.log("card clicked")}
    headerActions: [
      [
        { label: "QR Code", action: () => console.log("clicking on QR") },
        {
          label: "Menu Settings",
          action: () => console.log("clicking on Settings")
        },
        {
          label: "Menu Styles",
          action: () => console.log("clicking on Styles")
        },
        {
          label: "Analytics",
          action: () => console.log("clicking on Analytics")
        }
      ]
    ],
    header: (
      <div>
        <h1>Menu</h1>
      </div>
    ),
    content: (
      <div>
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    ),
    actions: (
      <>
        <HawaButton tooltip="dublicate">
          <FaClone />
        </HawaButton>
        <HawaButton className="mx-2" tooltip="delete">
          <FaTrash />
        </HawaButton>
        <HawaButton tooltip="edit">
          <FiEdit3 />
        </HawaButton>
      </>
    )
  };
  return (
    <div className="flex flex-col gap-2">
      <HawaItemCard {...cardProps} />
      <HawaItemCard {...cardProps} />
      <HawaItemCard {...cardProps} />
      <HawaItemCard {...cardProps} />
    </div>
  );
};

storiesOf("Elements/Cards/Items", module)
  .add("Vertical Card", (args) => <VerticalCard {...args} />, {
    args: {
      clickableImage: true,
      clickableImageActionText: "Share",
      clickableImageActionIcon: <FaShare />
    }
  })
  .add("Horizontal Card", (args) => <HorizontalCard {...args} />);

storiesOf("Elements/Cards", module)
  .add("Ad Card", (args) => <AdCardStory {...args} />, {
    args: {
      handleCantHide: () => console.log("cant hide the ad, please sub to pro"),
      canHide: false,
      title: "Seera App",
      description:
        "Increase your hiring chances by turning your CV into a digital one with a link"
    }
  })
  .add(
    "Landing Card",
    (args) => (
      <>
        <div className="flex flex-row gap-4">
          <HawaLandingCard
            orientation={"horizontal"}
            {...args}
            imageURL="https://sikka-images.s3.ap-southeast-1.amazonaws.com/Untitled-Current+View.png"
          />
          <HawaLandingCard
            orientation={"horizontal"}
            texts={{
              titleTip: "Digital Resumes",
              title: "Seera App",
              description:
                "Turn your professional resume into an interactive digital CV that's hosted on the cloud and can be downloaded as PDF anytime you want. Also, you can easily share it with a link.",
              linkText: "Try Seera"
            }}
            imageURL="https://sikka-images.s3.ap-southeast-1.amazonaws.com/Untitled-Current+View.png"
          />
        </div>
      </>
    ),
    {
      args: {
        texts: {
          titleTip: "For developers",
          title: "Ship more than just a website",
          description:
            "Use your favorite tech stack to give your marketing team a powerful and flexible custom page builder of their own",
          linkText: "Prismic for developers"
        }
      }
    }
  )
  .add("Pricing Card", (args) => <HawaPricingCard {...args} />, {
    args: {
      direction: "ltr",
      price: "300",
      size: "small",
      discount: "Save 10%",
      texts: {
        title: "Professional Plan",
        buttonText: "Upgrade",
        currencyText: "SAR",
        cycleText: "month",
        subtitle: "Includes up to 4 users + 200 GB"
      },
      features: [
        { included: true, text: "Unlimited Menus" },
        { included: true, text: "Unlimited Items" },
        { included: false, text: "Custom Menus" }
      ]
    }
  })
  .add(
    "Action Card",
    (args) => (
      <div className="flex flex-col gap-4 ">
        <div className="flex w-full flex-col  gap-4">
          <h1>With Details</h1>
          <div className="h-[400px] max-w-sm">
            <ActionCard {...args} />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h1>With Details</h1>
          <div className="h-[400px] max-w-sm">
            <ActionCard {...args} blank />
          </div>
        </div>
      </div>
    ),
    {
      args: {
        title: "Bismillah",
        subtitle: "By the name of Allah",
        cardImage: "https://source.unsplash.com/tVqQSfXQ_SI",
        bottomElement: (
          <>
            <div>Thikr</div>
            <div>100 Times</div>
          </>
        ),
        inCardActions: (
          <>
            <Button variant="secondary" size="xs">
              + Use Template
            </Button>
          </>
        )
      }
    }
  );

// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle
// } from "../../elements/Card";
// import {
//   HawaAdCard,
//   HawaItemCard,
//   HawaButton,
//   HawaIconCount
// } from "../../elements";
// import { FaClone, FaComment, FaReply, FaShare, FaTrash } from "react-icons/fa";
// import { FiEdit3 } from "react-icons/fi";
// import { storiesOf } from "@storybook/react";
// export default {
//   title: "Elements/Cards",
//   component: [Card, HawaAdCard, HawaItemCard]
// };

// export const Default = () => {
//   return (
//     <div>
//       <h2>Default Card</h2>
//       <Card>
//         <CardHeader>
//           <CardTitle>Card Title</CardTitle>
//           <CardDescription>Card Description</CardDescription>
//         </CardHeader>

//         <CardContent>
//           Card content goes here. This is a default card component showcasing
//           basic structure and styling.
//         </CardContent>
//         <CardFooter>This is the footer of the card</CardFooter>
//       </Card>
//     </div>
//   );
// };

// export const Ad = (args) => {
//   return (
//     <>
//       <div>
//         <div className="m-2 ml-0 text-lg font-bold dark:text-white">
//           Horizontal
//         </div>
//         <HawaAdCard orientation={"horizontal"} {...args} />
//       </div>
//       <div>
//         <div className="m-2 ml-0 text-lg font-bold dark:text-white">
//           Vertical
//         </div>
//         <HawaAdCard orientation={"vertical"} {...args} />
//       </div>
//     </>
//   );
// };

// Ad.args = {
//   title: "Seera App",
//   description:
//     "Increase your hiring chances by turning your CV into a digital one with a link"
// };

// export const VerticalCard = (args) => {
//   return (
//     <HawaItemCard
//       {...args}
//       cardImage={"ji"}
//       // onCardClick={() => console.log("card clicked")}
//       headerActions={[
//         [
//           { label: "QR Code", action: () => console.log("clicking on QR") },
//           {
//             label: "Menu Settings",
//             action: () => console.log("clicking on Settings")
//           },
//           {
//             label: "Menu Styles",
//             action: () => console.log("clicking on Styles")
//           },
//           {
//             label: "Analytics",
//             action: () => console.log("clicking on Analytics")
//           }
//         ]
//       ]}
//       header={
//         <div>
//           <h1>Menu</h1>
//         </div>
//       }
//       content={
//         <div>
//           <p>
//             Here are the biggest enterprise technology acquisitions of 2021 so
//             far, in reverse chronological order.
//           </p>
//         </div>
//       }
//       actions={
//         <div className="flex flex-row ">
//           <HawaButton margins="none" tooltip="dublicate">
//             <FaClone />
//           </HawaButton>
//           <HawaButton margins="none" className="mx-2" tooltip="delete">
//             <FaTrash />
//           </HawaButton>
//           <HawaButton margins="none" tooltip="edit">
//             <FiEdit3 />
//           </HawaButton>
//         </div>
//       }
//       counts={
//         <div className="flex flex-row ">
//           <HawaIconCount icon={<FaComment />} count="30" />
//           <HawaIconCount icon={<FaReply />} count="20" />
//         </div>
//       }
//     />
//   );
// };
// VerticalCard.args = {
//   clickableImageActionText: "Share",
//   clickableImageActionIcon: <FaShare />
// };

// export const HorizontalCard = (args) => {
//   let cardProps = {
//     ...args,
//     orientation: "horizontal",
//     cardImage: "test",
//     // onCardClick={() => console.log("card clicked")}
//     headerActions: [
//       [
//         { label: "QR Code", action: () => console.log("clicking on QR") },
//         {
//           label: "Menu Settings",
//           action: () => console.log("clicking on Settings")
//         },
//         {
//           label: "Menu Styles",
//           action: () => console.log("clicking on Styles")
//         },
//         {
//           label: "Analytics",
//           action: () => console.log("clicking on Analytics")
//         }
//       ]
//     ],
//     header: (
//       <div>
//         <h1>Menu</h1>
//       </div>
//     ),
//     content: (
//       <div>
//         <p>
//           Here are the biggest enterprise technology acquisitions of 2021 so
//           far, in reverse chronological order.
//         </p>
//       </div>
//     ),
//     actions: (
//       <>
//         <HawaButton tooltip="dublicate">
//           <FaClone />
//         </HawaButton>
//         <HawaButton className="mx-2" tooltip="delete">
//           <FaTrash />
//         </HawaButton>
//         <HawaButton tooltip="edit">
//           <FiEdit3 />
//         </HawaButton>
//       </>
//     )
//   };
//   return (
//     <div className="flex flex-col gap-2">
//       <HawaItemCard {...cardProps} />
//       <HawaItemCard {...cardProps} />
//       <HawaItemCard {...cardProps} />
//       <HawaItemCard {...cardProps} />
//     </div>
//   );
// };

// storiesOf("Elements/Cards/Items", module).add(
//   "Vertical Caraad",
//   () => <VerticalCard />,
//   {
//     category: "Elements"
//   }
// );
