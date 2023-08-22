import React, { FC, ReactNode } from "react"

type TBreadcrumb = {
  /** The array of crumbs, each one with a label and a href link */
  breadcrumbLinks: [{ label: string; href: string }]
  /** The separator between each crumb, can be character or React Node. The default is ">" */
  separator?: string | ReactNode
}

const HawaBreadcrumb: FC<TBreadcrumb> = ({
  breadcrumbLinks,
  separator = ">",
}) => {
  return (
    <div className="flex flex-row items-center gap-2 text-sm">
      {breadcrumbLinks.map((singleBreadcrumbLink, index) => (
        <div className="flex flex-row items-center justify-center gap-2">
          <a
            href={singleBreadcrumbLink.href}
            className={
              index + 1 === breadcrumbLinks.length
                ? "pointer-events-none"
                : "underline-offset-4 transition-all hover:text-primary hover:underline hover:decoration-2"
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
  )
}

export default HawaBreadcrumb
