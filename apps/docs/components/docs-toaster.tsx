"use client";

import { useToast } from "@sikka/hawa/hooks";
import { Toaster } from "@sikka/hawa/toaster";

export default function DocsToaster() {
  const { toasts } = useToast();
  return <Toaster toasts={toasts} />;
}
