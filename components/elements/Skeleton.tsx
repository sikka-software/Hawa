import React from "react";
import { cn } from "../util";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  animation?: "none" | "pulse" | "shimmer";
  content?: any;
}

function Skeleton({
  className,
  content,
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const animationStyles = {
    none: "hawa-rounded hawa-bg-muted",
    pulse: "hawa-animate-pulse hawa-rounded hawa-bg-muted",
    shimmer:
      "hawa-space-y-5 hawa-rounded hawa-bg-muted  hawa-p-4 hawa-relative  before:hawa-absolute before:hawa-inset-0 before:hawa--translate-x-full before:hawa-animate-[shimmer_2s_infinite] before:hawa-bg-gradient-to-r before:hawa-from-transparent before:hawa-via-gray-300/40 dark:before:hawa-via-white/10 before:hawa-to-transparent hawa-isolate hawa-overflow-hidden  before:hawa-border-t before:hawa-border-rose-100/10",
  };
  return (
    <div
      className={cn(
        animationStyles[animation],
        // animation === "pulse"
        //   ? "hawa-animate-pulse hawa-rounded hawa-bg-muted"
        //   : "hawa-space-y-5 hawa-rounded hawa-bg-muted  hawa-p-4 hawa-relative  before:hawa-absolute before:hawa-inset-0 before:hawa--translate-x-full before:hawa-animate-[shimmer_2s_infinite] before:hawa-bg-gradient-to-r before:hawa-from-transparent before:hawa-via-gray-300/40 dark:before:hawa-via-white/10 before:hawa-to-transparent hawa-isolate hawa-overflow-hidden  before:hawa-border-t before:hawa-border-rose-100/10",
        // "hawa-justify-center hawa-items-center hawa-text-center",

        content &&
          "hawa-flex hawa-flex-col hawa-justify-center hawa-items-center",
        className
      )}
      {...props}
    >
      {content && content}
    </div>
  );
}

export { Skeleton };

{
  /* <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
</svg>
 */
}
