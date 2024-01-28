import React from "react";

import { cn } from "@util/index";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  animation?: "none" | "pulse" | "shimmer";
  content?: any;
  fade?: "top" | "bottom" | "left" | "right";
}

function Skeleton({
  className,
  content,
  animation = "pulse",
  fade,
  ...props
}: SkeletonProps) {
  const animationStyles = {
    none: "hawa-rounded hawa-bg-muted",
    pulse: "hawa-animate-pulse hawa-rounded hawa-bg-muted",
    shimmer:
      "hawa-space-y-5 hawa-rounded hawa-bg-muted  hawa-p-4 hawa-relative  before:hawa-absolute before:hawa-inset-0 before:hawa--translate-x-full before:hawa-animate-[shimmer_2s_infinite] before:hawa-bg-gradient-to-r before:hawa-from-transparent before:hawa-via-gray-300/40 dark:before:hawa-via-white/10 before:hawa-to-transparent hawa-isolate hawa-overflow-hidden  before:hawa-border-t before:hawa-border-rose-100/10"
  };
  const fadeStyle = `[mask-image:linear-gradient(to_${fade},#D1D4DC_50%,transparent_100%)]`;

  return (
    <div
      className={cn(
        animationStyles[animation],
        content &&
          "hawa-flex hawa-flex-col hawa-items-center hawa-justify-center",
        fade && fadeStyle,
        className
      )}
      {...props}
    >
      {content && content}
    </div>
  );
}

export { Skeleton };
