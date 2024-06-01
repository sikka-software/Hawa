import React from "react";

import { cn } from "@util/index";

interface ImageCardProps {
  imageUrl: string;
  children: React.ReactNode;
  overlay?: boolean;

  className?: string;
  imageClassName?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  children,
  overlay = false,
  className,
  imageClassName,
}) => {
  return (
    <div
      className={cn(
        "hawa-relative hawa-transition-all hawa-rounded hawa-overflow-hidden hawa-group",
        className,
      )}
    >
      <div className="hawa-w-full hawa-relative hawa-mx-auto hawa-overflow-hidden hawa-rounded">
        <img
          src={imageUrl}
          alt="image"
          className={cn(
            "hawa-relative hawa-z-0 hawa-w-full hawa-rounded hawa-transition-all hawa-duration-300",
            imageClassName,
          )}
        />

        {overlay && (
          <div className="hawa-absolute hawa-transition-all hawa-inset-0 hawa-rounded hawa-bg-black group-hover:hawa-opacity-60 hawa-opacity-0" />
        )}
      </div>
      <div className="hawa-absolute hawa-inset-0 hawa-opacity-0 group-hover:hawa-opacity-100 hawa-pointer-events-none hawa-transition-all">
        {children}
      </div>
    </div>
  );
};
