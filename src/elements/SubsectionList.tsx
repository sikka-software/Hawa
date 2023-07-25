import React, { useState, FC } from "react"
import clsx from "clsx"
import { HawaChip } from "./HawaChip"

type SubsectionListTypes = {
  align?: any
  subsections: [
    {
      title: string
      sections: [
        {
          label: string
          action: () => void
          icon?: any
          value?: any
        }
      ]
    }
  ]
}
export const SubsectionList: FC<SubsectionListTypes> = ({ subsections }) => {
  const [selectedSection, setSelectedSection] = useState(null)
  return (
    <div className="w-full max-w-2xs rounded bg-layoutPrimary-500 p-4 ">
      {subsections.map((ss, i) => (
        <div key={i} className="my-0">
          {ss.title && <div className="my-4 font-bold">{ss.title}</div>}
          {ss.sections.map((s, i) => (
            <SubsectionItem
              key={i}
              onItemClick={() => setSelectedSection(s.value)}
              selected={selectedSection}
              value={s.value}
              icon={s.icon}
              title={s.label}
              chip="Upgrade"
            />
          ))}
        </div>
      ))}
    </div>
  )
}

type TSubsectionItem = {
  chip?: string
  title: string
  value: string
  icon?: any
  selected?: any
  onItemClick?: () => void
}
const SubsectionItem: FC<TSubsectionItem> = ({
  title,
  value,
  icon,
  chip,
  selected,
  onItemClick,
}) => {
  return (
    <div
      onClick={onItemClick}
      className={clsx(
        "flex w-full cursor-pointer flex-row items-center justify-between gap-2 rounded p-2  transition-all ",
        selected === value
          ? "bg-buttonPrimary-500 text-white hover:bg-buttonPrimary-500"
          : "hover:bg-layoutPrimary-300"
      )}
    >
      <div className="flex w-full flex-row items-center justify-start  gap-2">
        {icon} <span>{title}</span>
      </div>
      {chip && <HawaChip label="Upgrade" size="normal" />}{" "}
    </div>
  )
}
