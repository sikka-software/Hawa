import React from "react";
import { HawaAdCard, HawaButton, HawaItemCard } from "../../../elements";
import { FaClone, FaTrash } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

export default {
  title: "Elements/Cards/Ad",
  component: [HawaAdCard],
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

export const Ad = (args) => {
  return <HawaAdCard {...args} />;
};
