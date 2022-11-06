import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";

export const HawaDrawer = ({ open, setOpen, position, heading, children }) => {
  const [openDrawer, setOpenDrawer] = useState(open);

  const leftDrawer =
    "w-60 z-50 h-full absolute overflow-x-hidden top-0 left-0 border-r";
  const rightDrawer =
    "w-60 z-50 h-full absolute overflow-x-hidden top-0 right-0 border-l";

  //   useEffect(() => {
  //     setOpenDrawer(true);
  //   }, [open]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type.name == "DrawerHeader") {
      return React.cloneElement(child, {
        closeButton: setOpenDrawer,
        children: child.props.children
      });
    }
    if (React.isValidElement(child) && child.type.name == "DrawerBody") {
      return React.cloneElement(child, { children: child.props.children });
    }
    if (React.isValidElement(child) && child.type.name == "DrawerFooter") {
      return React.cloneElement(child, { children: child.props.children });
    }
  });

  const drawerClass =
    open && position == "left"
      ? clsx("block", leftDrawer)
      : open && position == "right"
      ? clsx("block", rightDrawer)
      : "hidden";

  return <div className={drawerClass}>{childrenWithProps}</div>;
};

export const DrawerHeader = ({ children, closeButton }) => {
  return (
    <div className="  w-full flex flex-row justify-between items-center py-4 px-1 border-b">
      {children}
      <div
        className="justify-self-end hover:cursor-pointer border p-1 rounded"
        onClick={() => {
          closeButton(false);
        }}
      >
        <AiOutlineClose size={20} strokeWidth={2} />
      </div>
    </div>
  );
};

export const DrawerBody = ({ children }) => {
  return <div className="p-1">{children}</div>;
};

export const DrawerFooter = ({ children }) => {
  return (
    <div className="absolute w-full py-4 px-1 border-t bottom-0">
      {children}
    </div>
  );
};
