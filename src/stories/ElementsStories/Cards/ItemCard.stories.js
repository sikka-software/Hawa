import React from "react";
import { HawaButton, HawaIconCount, HawaItemCard } from "../../../elements";
import { FaClone, FaComment, FaReply, FaShare, FaTrash } from "react-icons/fa";
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
    clickableImage: {
      control: "boolean",
      description:
        "A boolean that blurs the image when hovering on it and shows an action button on top of it."
    },
    clickableImageAction: {
      control: "function",
      description:
        "The function of the button that appears on top of the blured image on hover"
    },
    clickableImageActionText: {
      control: "string",
      description:
        "The text of the button that appears on top of the blurred image on hover"
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
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      }
      actions={
        <div className="flex flex-row ">
          <HawaButton margins="none" tooltip="dublicate">
            <FaClone />
          </HawaButton>
          <HawaButton margins="none" className="mx-2" tooltip="delete">
            <FaTrash />
          </HawaButton>
          <HawaButton margins="none" tooltip="edit">
            <FiEdit3 />
          </HawaButton>
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
VerticalCard.args = {
  clickableImageActionText: "Share",
  clickableImageActionIcon: <FaShare />
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
