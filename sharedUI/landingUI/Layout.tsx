import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { ScrollArea } from "@/components";

export default function Layout(props: any) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
}
