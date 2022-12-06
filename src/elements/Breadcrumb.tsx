import React, { FC, ReactNode } from "react"
import { IconType } from "react-icons"

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
    <div className="flex flex-row items-center">
      {breadcrumbLink.map((singleBreadcrumbLink, index) => (
        <div className="flex flex-row items-center justify-center mx-1">
          <a
            href={singleBreadcrumbLink.href}
            className="mx-1 hover:underline hover:decoration-2"
          >
            {singleBreadcrumbLink.label}
          </a>
          {index != breadcrumbLink.length - 1
            ? typeof separator == "string"
              ? separator
              : <div>{separator}</div>
            : null}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumb
