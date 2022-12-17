import React from "react";
import {
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  HawaButton,
  HawaDrawer
} from "../../elements";
import useDiscloser from "./../../hooks/useDiscloser";

export default {
  title: "Elements/Drawer",
  component: HawaDrawer,
  // parameters: {
  //   backgrounds: {
  //     default: "light",
  //     values: [{ name: "light", value: "#96ACB7" }]
  //   }
  // },
  argTypes: {
    position: {
      control: "select",
      options: ["right", "left"],
      description: "The title of the acordion"
    }
  }
};

const Template = (args) => {
  const { isOpen, onClose, onOpen } = useDiscloser();

  return (
    <>
      <HawaButton onClick={onOpen}>Open Drawer</HawaButton>
      <HawaDrawer position={args.position} open={isOpen} setOpen={onClose}>
        <DrawerHeader>
          <div className="text-lg font-bold">Hawa</div>
        </DrawerHeader>
        <DrawerBody>
          <div>This is Drawer body</div>
        </DrawerBody>
        <DrawerFooter>
          <div>This is Drawer footer</div>
        </DrawerFooter>
      </HawaDrawer>
    </>
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
