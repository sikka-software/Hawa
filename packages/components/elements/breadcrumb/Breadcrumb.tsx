import React, { FC, ReactNode } from "react";

import { cn } from "@util/index";

export type BreadcrumbItemProps = {
  label: string;
  href: string;
};
interface BCTypes {
  /** The array of crumbs, each one with a label and a href link */
  breadcrumbLinks: BreadcrumbItemProps[];
  /** The separator between each crumb, can be character or React Node. The default is ">" */
  separator?: string | ReactNode;
  size?: "normal" | "small" | "xs";
}

export const Breadcrumb: FC<BCTypes> = ({
  breadcrumbLinks,
  separator = ">",
  size = "normal",
}) => {
  const textStyles = {
    normal: "",
    small: "hawa-text-sm",
    xs: "hawa-text-xs",
  };
  return (
    <div
      className={cn(
        "hawa-flex hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm",
        textStyles[size],
      )}
    >
      {breadcrumbLinks.map((singleBreadcrumbLink, index) => (
        <div
          key={index}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2"
        >
          <a
            href={singleBreadcrumbLink.href}
            className={
              index + 1 === breadcrumbLinks.length
                ? "hawa-pointer-events-none"
                : "hawa-underline-offset-4 hawa-transition-all hover:hawa-text-primary hover:hawa-underline hover:hawa-decoration-2"
            }
          >
            {singleBreadcrumbLink.label}
          </a>
          {index != breadcrumbLinks.length - 1 ? (
            typeof separator == "string" ? (
              <div>{separator}</div>
            ) : (
              <div>{separator}</div>
            )
          ) : null}
        </div>
      ))}
    </div>
  );
};
