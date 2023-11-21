import React from "react";
import { cn } from "../util";
import { RadiusType } from "../types/commonTypes";
import { FileUploader } from "./FileUploader";

interface AvatarProps {
  isUploadable?: boolean;
  src?: string;
  alt?: string;
  size?:
    | "2xs"
    | "xs"
    | "sm"
    | "default"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  radius?: RadiusType;
  className?: string;
  icon?: React.ReactNode;
}
export const Avatar: React.FC<AvatarProps> = ({
  isUploadable,
  src,
  alt,
  size = "default",
  radius = "inherit",
  icon,
  className,
  ...props
}) => {
  let sizeStyles = {
    "2xs": "hawa-h-4 hawa-w-4",
    xs: "hawa-h-6 hawa-w-6",
    sm: "hawa-h-8 hawa-w-8",
    default: "hawa-h-10 hawa-w-10",
    lg: "hawa-h-12 hawa-w-12",
    xl: "hawa-h-14 hawa-w-14",
    "2xl": "hawa-h-16 hawa-w-16",
    "3xl": "hawa-h-[72px] hawa-w-[72px]",
    "4xl": "hawa-h-20 hawa-w-20",
    "5xl": "hawa-h-[88px] hawa-w-[88px]",
    "6xl": "hawa-h-24 hawa-w-24",
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
          "hawa-bg-red-400 hawa-absolute hawa-w- hawa-top-0 hawa-left-0 hawa-opacity-0",
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
      {/* I want to have a user icon when no src is not provided and isUploadable is false */}
      {!src && !isUploadable && (
        <div
          className={cn(
            sizeStyles[size],
            "hawa-justify-center hawa-items-center hawa-flex hawa-flex-col"
          )}
        >
          {icon ? (
            icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "50%", opacity: 0.35 }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 1 0-16 0" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};
