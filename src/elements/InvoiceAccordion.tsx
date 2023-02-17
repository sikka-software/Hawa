import React, { useState } from "react"
import clsx from "clsx"
import { HiChevronRight } from "react-icons/hi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { HawaChip } from "./HawaChip"
import { HawaMenu } from "./HawaMenu"

type InvoiceAccordionTypes = {
  products: {
    usage?: string
    price?: string
    amount?: string
    plan?: string
  }[]
  texts: {
    total: string
    plan: string
    usage: string
    amount: string
    price: string
  }
  invoiceTitle: string
  invoiceSubtitle: string
  invoiceDescription?: string
  invoiceActions?: {
    icon?: JSX.Element
    label: string
    action?: (e: any) => void
    isButton?: boolean
    element?: any
  }[][]
  total: any
  direction?: "rtl" | "ltr"
  status?: "paid" | "pending" | "overdue"
}
export const InvoiceAccordion: React.FunctionComponent<
  InvoiceAccordionTypes
> = ({
  direction = "ltr",
  texts = {
    total: "Total",
    plan: "Plan",
    usage: "Usage",
    amount: "Amount",
    price: "Price",
  },
  ...props
}) => {
  const InvoiceItemProp = (props) => (
    <div
      className={clsx(
        props.start ? "items-start" : "items-end",
        "flex w-full flex-col"
      )}
    >
      <div className=" text-sm text-gray-500">{props.label}</div>
      <div className=" whitespace-nowrap">{props.text}</div>
    </div>
  )
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-row items-center gap-2 border p-4 ">
        {props.invoiceActions && (
          <div
            className={clsx(
              "transition-all hover:cursor-pointer ",
              direction === "rtl" ? "rotate-180" : "",
              expanded ? "rotate-90" : ""
            )}
            onClick={() => setExpanded(!expanded)}
          >
            <HiChevronRight fontSize={30} />
          </div>
        )}
        <div className="flex w-full flex-col gap-0 ">
          <div className="flex flex-row items-center gap-2">
            <span className="bg-white-200">{props.invoiceTitle}</span>
            {props.status && <HawaChip size="small" label={props.status} />}
          </div>
          <div className="font-sm text-gray-400">{props.invoiceSubtitle}</div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="whitespace-nowrap">{props.total}</div>
          <HawaMenu
            direction={direction}
            position={direction === "rtl" ? "bottom-right" : "bottom-left"}
            menuItems={props.invoiceActions}
          >
            <div className=" p-2">
              <BsThreeDotsVertical />
            </div>
          </HawaMenu>
        </div>
      </div>
      {expanded && (
        <div
          className={clsx(
            expanded ? "h-full" : "h-0 border-none p-0 px-4",
            "flex h-auto flex-col gap-4 overflow-clip border border-t-0 bg-gray-50 p-4 transition-all"
          )}
        >
          <div className="border-b pb-2">{props.invoiceDescription}</div>
          {props.products?.map((product) => (
            <div className="flex flex-row border-b  pb-4">
              <div className="w-full">
                <InvoiceItemProp start label={texts.plan} text={product.plan} />
              </div>
              <div className="flex w-full flex-row gap-20 ">
                <InvoiceItemProp
                  label={texts.usage}
                  text={`${product.usage} SAR`}
                />
                <InvoiceItemProp
                  label={texts.price}
                  text={`${product.price} SAR`}
                />
                <InvoiceItemProp
                  label={texts.amount}
                  text={`${product.amount} SAR`}
                />
              </div>
            </div>
          ))}
          <div className="flex flex-row justify-between">
            <div>{texts.total}</div> <div>{props.total}</div>
          </div>
        </div>
      )}
    </div>
  )
}
