import { Separator } from "@/registry/default/ui/separator";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="bg-muted inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium"
    >
      <span className="sm:hidden">Docs under construction</span>
      <span className="hidden sm:inline">
        We're currently building the docs
      </span>
      {/* <ArrowRightIcon className="ml-1 h-4 w-4" /> */}
    </Link>
  );
}
