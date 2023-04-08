import React from "react"

interface Props {
  isOpen: boolean
  onClose: () => void
  items: { label: string; onClick: () => void }[]
}

export const AppSidebar: React.FC<Props> = ({ isOpen, onClose, items }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-40 flex bg-gray-600 bg-opacity-75">
      <div className="w-1/3 rounded-l-lg bg-gray-800 shadow-2xl">
        <button
          onClick={onClose}
          className="p-4 text-gray-400 hover:text-white focus:text-white focus:outline-none"
        >
          Close
        </button>
        <nav>
          {items.map((item, i) => (
            <a
              key={i}
              href="#"
              onClick={item.onClick}
              className="block p-4 font-bold text-white hover:bg-gray-700 hover:text-gray-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="w-2/3 bg-gray-50"></div>
    </div>
  )
}
