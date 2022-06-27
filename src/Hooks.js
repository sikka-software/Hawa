import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

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

export function useBreakPointValue(values) {
  const [value, setValue] = useState(values.base ?? "");
  const theme = useTheme();

  useEffect(() => {
    console.log("break point",theme.breakpoints.values);
    function handleResize() {
      if (
        values.mobile &&
        window.innerWidth >= theme.breakpoints.values.mobile &&
        window.innerWidth < theme.breakpoints.values.tablet
      )
        setValue(values.mobile);
      if (
        values.tablet &&
        window.innerWidth >= theme.breakpoints.values.tablet &&
        window.innerWidth < theme.breakpoints.values.laptop
      )
        setValue(values.tablet);
      if (
        values.laptop &&
        window.innerWidth >= theme.breakpoints.values.laptop &&
        window.innerWidth < theme.breakpoints.values.desktop
      )
        setValue(values.laptop);

      if (
        values.desktop &&
        window.innerWidth >= theme.breakpoints.values.desktop
      )
        setValue(values.desktop);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return value;
}
