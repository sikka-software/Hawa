import React from "react";
import { useState } from "react";
import {
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  HawaDrawer
} from "../../elements";

export default {
  title: "Elements/Drawer",
  component: HawaDrawer
  // parameters: {
  //   backgrounds: {
  //     default: "light",
  //     values: [{ name: "light", value: "#96ACB7" }]
  //   }
  // },
  //   argTypes: {
  //     title: {
  //       control: "text",
  //       description: "The title of the acordion"
  //     },
  //     content: {
  //       control: "text",
  //       description: "The content text of the accordion when expanded"
  //     }
  //   }
};

const Template = (args) => {
  const [open, setOpen] = useState(args.open);

  return (
    <HawaDrawer position={args.position} open={args.open} setOpen={setOpen}>
      <DrawerHeader>
        <div className="font-bold text-lg">Hawa</div>
      </DrawerHeader>
      <DrawerBody>
        <div>This is Drawer body</div>
      </DrawerBody>
      <DrawerFooter>
        <div>This is Drawer footer</div>
      </DrawerFooter>
    </HawaDrawer>
  );
};

export const LeftDrawer = Template.bind({});
LeftDrawer.args = {
  position: "left",
  open: false,
  title: "Hawa"
};

export const rightDrawer = Template.bind({});
rightDrawer.args = {
  position: "right",
  open: false,
  title: "Hawa"
};
