import React from "react";
import { DraggableCard } from "../../elements";

export default {
  title: "Elements/Draggable",
  component: [DraggableCard]
};

export const Draggable = (args) => {
  return (
    <>
      <DraggableCard maxWidth={500}>
        <div>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi
            praesentium, architecto neque voluptatibus laborum itaque sunt dicta
            quidem aliquam explicabo commodi. Libero aspernatur deleniti atque
            facere, perferendis quisquam dignissimos!
          </p>
        </div>
      </DraggableCard>
    </>
  );
};
