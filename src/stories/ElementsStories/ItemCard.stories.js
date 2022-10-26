import { BookmarkAdd, Close, InboxOutlined } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { AdaptiveButton, HawaButton, HawaItemCard } from "../../elements";

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

export const Items = (args) => {
  return (
    <HawaItemCard
      {...args}
      // onCardClick={() => console.log("card clicked")}
      // headerActions={
      //   <>
      //     <IconButton
      //       onClick={(e) => {
      //         e.stopPropagation();
      //         console.log("clicking test");
      //       }}
      //       size="small"
      //     >
      //       <InboxOutlined fontSize="small" />
      //     </IconButton>
      //     <IconButton
      //       onClick={(e) => {
      //         e.stopPropagation();
      //         console.log("clicking test");
      //       }}
      //       size="small"
      //     >
      //       <BookmarkAdd fontSize="small" />
      //     </IconButton>
      //     <IconButton
      //       onClick={(e) => {
      //         e.stopPropagation();
      //         console.log("clicking test");
      //       }}
      //       size="small"
      //     >
      //       <Close fontSize="small" />
      //     </IconButton>
      //   </>
      // }
      // header={
      //   <div>
      //     <h1>Menu</h1>
      //   </div>
      // }
      // content={
      //   <div>
      //     <p>date here ere f</p>
      //   </div>
      // }
      // actions={
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
      // }
    />
  );
};
