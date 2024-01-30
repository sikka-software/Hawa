"use client"; // This directive ensures the component is treated as a Client Component

import { useToast } from "@sikka/hawa/hooks";
import { Toaster as T } from "@sikka/hawa/toaster";

export function Toaster() {
  const { toasts } = useToast(); // This hook will now be correctly used in the client context

  return <T toasts={toasts} />;
}
