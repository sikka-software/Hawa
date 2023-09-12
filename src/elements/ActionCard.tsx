import React, { FC, useState } from "react"
import { Button } from "./Button"

type ImageCardTypes = {
  children: any
  align?: any
  bottomElement?: any
  inCardActions?: any
  cardImage?: string
  title?: string
  subtitle?: string
  blank?: boolean
}
export const ActionCard: FC<ImageCardTypes> = (props) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex h-full w-full flex-col gap-1 ">
      <div
        className="group relative h-full w-full rounded border bg-background bg-cover bg-center transition-all duration-500 hover:drop-shadow-2xl"
        style={{
          backgroundImage: `url(${props.blank ? "" : props.cardImage})`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {props.blank ? (
          <div className="flex h-full flex-col items-center justify-center ">
            <svg
              className="h-10 w-10 text-foreground"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
          </div>
        ) : (
          <div className="absolute inset-0 rounded bg-black opacity-50"></div>
        )}
        <div className="absolute bottom-2 right-2 z-10 opacity-0 transition-all duration-200 group-hover:opacity-100">
          {props.inCardActions}
        </div>
        {!props.blank && (
          <div className="relative p-4">
            <h1 className="text-white">{props.title}</h1>
            <p className="text-white">{props.subtitle}</p>
          </div>
        )}
      </div>
      <div
        className={`flex flex-row justify-between text-sm transition-all duration-200 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {props.bottomElement}
      </div>
    </div>
  )
}
