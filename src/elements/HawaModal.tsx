import React, { ReactElement, useEffect, FC } from "react"
import clsx from "clsx"

type ModalTypes = {
  /**   * The boolean to open and close the modal   */
  open: boolean
  /**   * The title of the modal, it will appear in the header of the modal   */
  title: string
  /**
   * a function that's triggered when the modal is closed either by the clicking the close button or outside the modal.
   * @returns void
   */
  onClose: () => void
  /**   * Boolean to enable/disable closing the modal upon clicking outside the modal   */
  closeOnClickOutside?: boolean
  /**   * The id of the modal   */
  modalID?: string
  children: ReactElement
  /**   * The array of actions for the modal, it will appear in the footer of the modal   */
  actions: any
}
export const HawaModal: FC<ModalTypes> = ({
  open,
  title,
  onClose,
  closeOnClickOutside = true,
  ...props
}) => {
  let defaultStyle =
    "absolute top-1/2 left-1/2 w-full h-screen flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/2 transition-all"
  useEffect((): any => {
    if (closeOnClickOutside && open) {
      window.onclick = (e) => {
        e.stopPropagation()
        onClose()
      }
    }
    return () => (window.onclick = null)
  }, [open])
  return (
    <div
      className={clsx(
        defaultStyle,
        open ? "z-10  opacity-100 " : "invisible -z-10 opacity-0"
      )}
    >
      <div
        className={clsx(
          "absolute h-screen w-full bg-gray-500 opacity-50",
          open ? "opacity-50" : "opacity-0"
        )}
      ></div>

      <div className="relative w-1/2 max-w-md rounded bg-white p-1 shadow-lg dark:bg-gray-700">
        <div className="flex items-start justify-between rounded-t p-3 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            type="button"
            className="inline-flex items-center rounded bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="space-y-6 p-3">{props.children}</div>
        <div className="mx-2 flex items-center justify-end space-x-1  p-0  dark:border-gray-600">
          {props.actions}
        </div>
      </div>
    </div>
  )
}
