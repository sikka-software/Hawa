import { useState } from "react";

export function useDisclosure(defaultValue) {
  const [isOpen, setIsOpen] = useState(
    defaultValue ? Boolean(defaultValue) : false
  );

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  return {
    isOpen: isOpen,
    onClose: onClose,
    onOpen: onOpen
  };
}
