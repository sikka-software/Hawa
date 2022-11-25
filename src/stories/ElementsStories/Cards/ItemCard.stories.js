import React from "react";
import { HawaButton, HawaItemCard } from "../../../elements";
import { FaClone, FaTrash } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

export default {
  title: "Elements/Cards/Items",
  component: [HawaItemCard],
  argTypes: {
    lang: {
      options: ["ar", "en"],
      control: "select",
      description: "The language of the card"
    },
    header: {
      control: "object",
      description:
        "HTML elemnts as the card header, make sure to add e.stopPropagation() in buttons onClick function"
    },
    content: {
      control: "object",
      description: "HTML elements as the card content"
    },
    actions: {
      control: "object",
      description:
        "HTML elements as the card actions,, make sure to add e.stopPropagation() in buttons onClick function"
    },
    onCardClick: {
      control: "function",
      description: "A function triggered when the card is clicked"
    }
  },
  args: {
    lang: "en"
  }
};

export const VerticalCard = (args) => {
  return (
    <HawaItemCard
      {...args}
      cardImage={"ji"}
      // onCardClick={() => console.log("card clicked")}
      headerActions={[
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
      ]}
      header={
        <div>
          <h1>Menu</h1>
        </div>
      }
      content={
        <div>
          <p>
            {" "}
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      }
      actions={
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
        //   <>
        //     <Button
        //       variant="contained"
        //       onClick={(e) => {
        //         e.stopPropagation();
        //         console.log("clicking test");
        //       }}
        //     >
        //       TEST
        //     </Button>
        //     <div style={{ width: 5 }}></div>
        //     <Button
        //       variant="contained"
        //       onClick={(e) => {
        //         e.stopPropagation();
        //         console.log("clicking tost");
        //       }}
        //     >
        //       TEST
        //     </Button>
        //     <div style={{ width: 5 }}></div>
        //     <AdaptiveButton
        //       buttonText="Something"
        //       showText={true}
        //       icon={<InboxOutlined />}
        //       onClick={(e) => {
        //         e.stopPropagation();
        //         console.log("clicking something");
        //       }}
        //     />
        //   </>
      }
    />
  );
};

export const HorizontalCard = (args) => {
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
