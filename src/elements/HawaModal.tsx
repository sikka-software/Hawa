import React, { ReactElement, useEffect } from "react"

type ModalTypes = {
  open: boolean
  title: string
  onClose: () => void
  // closeOnClickOutside: any
  modalID?: string
  children: ReactElement
  actions: any
}
export const HawaModal: React.FunctionComponent<ModalTypes> = ({
  open,
  title,
  onClose,
  ...props
}) => {
  // useEffect((): any => {
  //   if (closeOnClickOutside) {
  //     window.onclick = () => {
  //       console.log("open : ", open)
  //       if (open) {
  //         console.log("Im clicing")
  //         onClose()
  //       }
  //     }
  //   }
  //   return () => (window.onclick = null)
  // }, [open])
  return (
    <div
      id={props.modalID}
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        open ? "block" : "hidden"
      } h-modal fixed top-0 right-0 left-0 z-50 w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full`}
    >
      <div className="relative h-full w-full max-w-2xl p-4 md:h-auto">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={(e) => {
                onClose()
              }}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="space-y-6 p-6">{props.children}</div>
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
            {props.actions}
          </div>
        </div>
      </div>
    </div>
  )
}
