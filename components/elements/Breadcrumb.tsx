import React, { FC, ReactNode } from "react";

interface TBreadcrumb {
  /** The array of crumbs, each one with a label and a href link */
  breadcrumbLinks: { label: string; href: string }[];
  /** The separator between each crumb, can be character or React Node. The default is ">" */
  separator?: string | ReactNode;
}

const Breadcrumb: FC<TBreadcrumb> = ({ breadcrumbLinks, separator = ">" }) => {
  return (
    <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2 hawa-text-sm">
      {breadcrumbLinks.map((singleBreadcrumbLink, index) => (
        <div className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-center hawa-gap-2">
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

export { Breadcrumb };
