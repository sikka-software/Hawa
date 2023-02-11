import React, { FC, ReactNode } from "react"

type TBreadcrumItem = {
  label: string
  href: string
}

type TBreadcrumb = {
  breadcrumbLink: TBreadcrumItem[]
  separator?: string | ReactNode
}

const Breadcrumb: FC<TBreadcrumb> = ({
  breadcrumbLink,
  separator = "/",
  ...props
}) => {
  return (
    <div className="flex flex-row items-center gap-2 text-sm">
      {breadcrumbLink.map((singleBreadcrumbLink, index) => (
        <div className="flex flex-row items-center justify-center gap-2">
          <a
            href={singleBreadcrumbLink.href}
            className={
              index + 1 === breadcrumbLink.length
                ? "pointer-events-none"
                : "underline-offset-4 transition-all hover:text-buttonPrimary-500 hover:underline hover:decoration-2"
            }
          >
            {singleBreadcrumbLink.label}
          </a>
          {index != breadcrumbLink.length - 1 ? (
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

export default Breadcrumb
