import React, { ReactNode, useEffect, useRef, useState, FC } from "react"
import clsx from "clsx"
import { Command } from "cmdk"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

// TODO: add width to decrease width

interface TMenuTypes {
  children?: any
  direction?: "rtl" | "ltr"
}

type MenuItems = {}

export const HawaDropdownMenu: FC<TMenuTypes> = ({ children, direction }) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")

  let dropdownData = {
    items: [
      {
        label: "New Tab",
        shortcut: "ctrl + T",
        disabled: false,
      },
      {
        label: "New Windows",
        shortcut: "ctrl + N",
        disabled: false,
      },
      {
        label: "New Private Window",
        shortcut: "⇧+ctrl+N",
        disabled: true,
      },
    ],
    checkboxes: [
      {
        label: "Show Bookmarks",
        shortcut: "ctrl + B",
        disabled: false,
      },
      {
        label: "Show Something",
        shortcut: "ctrl + C",
        disabled: false,
      },
      {
        label: "Show that",
        shortcut: "ctrl + T",
        disabled: false,
      },
    ],
  }
  return (
    <DropdownMenu.Root dir={direction}>
      <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] rounded bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          {dropdownData.items.map((it, i) => (
            <DropdownMenu.Item
              key={i}
              className="group relative flex h-[25px] select-none items-center justify-between 
         rounded-inner  px-[5px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8
          data-[highlighted]:text-violet-1 "
              //  ltr:pr-[25px] rtl:pl-[25px]
              disabled={it.disabled}
            >
              {/* New Tab{" "} */}
              {it.label}
              <div className=" text-mauve-11 group-data-[disabled]:text-mauve-8 group-data-[highlighted]:text-white">
                {/* ml-auto pl-[20px] */}
                {/* ⌘+T */}
                {it.shortcut}
              </div>
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger
              className=" group relative flex h-[25px] select-none  
            items-center rounded-inner  justify-between flex-row
            px-[5px] text-[13px] leading-none text-violet-11
             outline-none data-[disabled]:pointer-events-none
              data-[highlighted]:bg-violet-9 data-[highlighted]:data-[state=open]:bg-violet-9
               data-[state=open]:bg-violet-4 data-[disabled]:text-mauve-8 data-[highlighted]:data-[state=open]:text-violet-1
                data-[highlighted]:text-violet-1 data-[state=open]:text-violet-11 ltr:pl-[25px] rtl:pl-[0px]  "
            >
              More Tools
              <div
                className="ltr:ml-auto rtl:pr-[5px]  ltr:pl-[0px] text-mauve-11 group-data-[disabled]:text-mauve-8 group-data-[highlighted]:text-white
               rtl:mr-auto rtl:rotate-180 rtl:pl-[0px]"
              >
                {/* <ChevronRightIcon /> */}
                <svg
                  aria-label="Chevron Right Icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[220px] rounded-inner bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-inner px-[5px] pl-[25px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8 data-[highlighted]:text-violet-1">
                  Save Page As…{" "}
                  <div className="ml-auto pl-[20px] text-mauve-11 group-data-[disabled]:text-mauve-8 group-data-[highlighted]:text-white">
                    ⌘+S
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-inner px-[5px] pl-[25px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8 data-[highlighted]:text-violet-1">
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-inner px-[5px] pl-[25px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8 data-[highlighted]:text-violet-1">
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="m-[5px] h-[1px] bg-violet-6" />
                <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-inner px-[5px] pl-[25px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8 data-[highlighted]:text-violet-1">
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="m-[5px] h-[1px] bg-violet-6" />

          {dropdownData.checkboxes.map((ch, i) => (
            <DropdownMenu.CheckboxItem
              key={i}
              className="group relative flex h-[25px] select-none items-center
             justify-between rounded-inner px-[5px] text-[13px] leading-none text-violet-11
              outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8
               data-[highlighted]:text-violet-1"
              //  ltr:pl-[25px] rtl:pr-[25px]
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <DropdownMenu.ItemIndicator className="absolute inline-flex w-[25px] items-center justify-center  ltr:left-0 rtl:right-0">
                <svg
                  aria-label="Check Mark"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="0.60em"
                  width="0.60em"
                >
                  <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                </svg>{" "}
              </DropdownMenu.ItemIndicator>
              {/* Show Bookmarks{" "} */}
              {ch.label}
              <div className=" text-mauve-11  group-data-[disabled]:text-mauve-8 group-data-[highlighted]:text-white">
                {/* ml-auto pl-[20px] */}
                {/* ⌘+B */}
                {ch.shortcut}
              </div>
            </DropdownMenu.CheckboxItem>
          ))}
          {/*         
          <DropdownMenu.CheckboxItem
            className="relative flex h-[25px] select-none items-center rounded-inner px-[5px] pl-[25px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8 data-[highlighted]:text-violet-1"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
              <svg
                aria-label="Check Mark"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="0.60em"
                width="0.60em"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>{" "}
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem> */}

          <DropdownMenu.Separator className="m-[5px] h-[1px] bg-violet-6" />

          <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve-11">
            People
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className="relative flex h-[25px] select-none items-center rounded-inner px-[5px] pl-[25px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8 data-[highlighted]:text-violet-1"
              value="pedro"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <svg
                  aria-label="Filled Dot"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="relative flex h-[25px] select-none items-center rounded-inner px-[5px] pl-[25px] text-[13px] leading-none text-violet-11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet-9 data-[disabled]:text-mauve-8 data-[highlighted]:text-violet-1"
              value="colm"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                <svg
                  aria-label="Filled Dot"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
    // <Command label="Command Menu" className="bg-gray-100 drop-shadow-lg w-fit rounded">
    //   <Command.Input className="rounded-t-inner" />
    //   <Command.List className="p-1">
    //     <Command.Empty>No results found.</Command.Empty>

    //     <Command.Group heading="Letters">
    //       <Command.Item className="hover:bg-gray-200 p-1 px-2 text-sm rounded">a</Command.Item>
    //       <Command.Item className="hover:bg-gray-200 p-1 px-2 text-sm rounded">b</Command.Item>
    //       <Command.Separator />
    //       <Command.Item className="hover:bg-gray-200 p-1 px-2 text-sm rounded">c</Command.Item>
    //     </Command.Group>

    //     <Command.Item className="hover:bg-gray-200 p-1 px-2 text-sm rounded">Apple</Command.Item>
    //   </Command.List>
    // </Command>
  )
}
