import { useState } from "@storybook/addons"
import { FC, ReactNode } from "react"
import clsx from "clsx"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FaSnapchat, FaSnapchatGhost, FaTiktok } from "react-icons/fa"

type FooterTypes = {
  logoText?: string
  logoURL?: string
  socialLinks?: {
    twitter?: string
    instagram?: string
    tiktok?: string
    snapchat?: string
  }
  footerLinks?: {
    title: string
    pages: {
      label: string
      link: string
    }[]
  }[]
}

export const Footer: React.FunctionComponent<FooterTypes> = ({ ...props }) => {
  return (
    <div className="sticky  left-0 bottom-0 flex w-full flex-row gap-8  bg-blue-200 p-4">
      {props.logoText && (
        <div>
          <div className="text-2xl font-bold">{props.logoText}</div>
        </div>
      )}
      {props.footerLinks?.map((pagesSection) => (
        <div className="flex w-32 flex-col gap-2">
          <div className="text-lg font-bold">{pagesSection.title}</div>
          <div className="flex flex-col gap-1">
            {pagesSection.pages.map((singlePage) => (
              <a
                className="transition-all hover:font-bold"
                href={singlePage.link}
              >
                {singlePage.label}
              </a>
            ))}
          </div>
        </div>
      ))}
      {props.socialLinks && (
        <div className="flex flex-row gap-2">
          {props.socialLinks.twitter && (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white">
              <BsTwitter />
            </div>
          )}
          {props.socialLinks.instagram && (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white">
              <BsInstagram />
            </div>
          )}
          {props.socialLinks.tiktok && (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white">
              <FaTiktok />
            </div>
          )}
          {props.socialLinks.snapchat && (
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white">
              <FaSnapchatGhost />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
