import React from "react";
import { cn } from "../util";
import { RadiusType } from "../types/commonTypes";
import { FileUploader } from "./FileUploader";

interface AvatarProps {
  isUploadable?: boolean;
  src?: string;
  alt?: string;
  size?: "xs" | "sm" | "default" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  radius?: RadiusType;
  className?: string;
}
export const Avatar: React.FC<AvatarProps> = ({
  isUploadable,
  src,
  alt,
  size = "default",
  radius = "inherit",
  className,
  ...props
}) => {
  let sizeStyles = {
    xs: "hawa-h-4 hawa-w-4",
    sm: "hawa-h-8 hawa-w-8",
    default: "hawa-h-12 hawa-w-12",
    lg: "hawa-h-16 hawa-w-16",
    xl: "hawa-h-20 hawa-w-20",
    "2xl": "hawa-h-24 hawa-w-24",
    "3xl": "hawa-h-28 hawa-w-28",
    "4xl": "hawa-h-32 hawa-w-32",
  };
  let radiusStyles = {
    full: "hawa-rounded-full",
    inherit: "hawa-rounded",
    none: "hawa-rounded-none",
  };
  return (
    <div
      className={cn(
        "hawa-relative  hawa-bg-card hawa-p-0",
        sizeStyles[size],
        radiusStyles[radius],
        className
      )}
    >
      <FileUploader
        className={cn(
          "hawa-bg-red-400 hawa-absolute hawa-top-0 hawa-left-0 hawa-opacity-0",
          sizeStyles[size],
          radiusStyles[radius],
          (!isUploadable || !!src) && "hawa-hidden"
        )}
      />

      <img
        className={cn(
          "hawa-blue-400 hawa-object-cover",
          sizeStyles[size],
          radiusStyles[radius],
          !src && "hawa-hidden"
        )}
        src={src}
        alt={alt}
      />
    </div>
  );
};
