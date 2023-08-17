import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { HawaAlert } from "./HawaAlert"
import { HawaButton } from "./HawaButton"
import clsx from "clsx"

//TODO: This element needs more improvements and testing

type DragDropImagesTypes = {
  /**  The text label above the component. Consistant with the other form input fields   */
  label?: string
  files: [File]
  setFiles: any
  setDeletedFiles: any
  maxFiles: number
  accept: string
  onAcceptedFiles: any
  showPreview: any
  onDeleteFile: any
  onClearFiles: any
  maxSize: number
  errorMessages: string
  /** The translation object, use this to replace the default text with any translated text you want.*/
  texts: {
    errorUploading: any
    clickHereToUpload: any
    maxFileSize: any
    tooManyFiles: any
    fileTooLarge: any
    acceptedFileTypes: any
    invalidFileType: any
  }
}

export const DragDropImages: React.FunctionComponent<DragDropImagesTypes> = ({
  texts,
  files,
  setFiles,
  setDeletedFiles,
  onAcceptedFiles,
  errorMessages,
  maxFiles,
  accept,
  showPreview,
  onDeleteFile,
  onClearFiles,
  maxSize,
  label,
}) => {
  const [cmp, setCmp] = useState(0)
  const [max, setMax] = useState<any>(0)

  const {
    getRootProps,
    getInputProps,
    fileRejections,
    acceptedFiles,
    isDragActive,
  } = useDropzone({
    multiple: true,
    accept: accept,
    maxSize: maxSize,
    maxFiles: maxFiles,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file, index) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })
  useEffect(
    () => () => {
      files?.forEach((file: any) => {
        URL.revokeObjectURL(file.preview)
      })
    },
    [files]
  )
  useEffect(() => {
    setFiles(acceptedFiles)
  }, [acceptedFiles, cmp])
  onClearFiles = () => {
    acceptedFiles.length = 0
    acceptedFiles.splice(0, acceptedFiles.length)
    setFiles([])
  }

  const clearAllFiles = () => {
    acceptedFiles.length = 0
    setFiles([])
  }

  useEffect(() => {
    if (maxSize > 0) {
      const k = 1024
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      const i = Math.floor(Math.log(maxSize) / Math.log(1024))

      setMax(
        parseFloat((maxSize / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i]
      )
    }
  }, [maxSize])
  const errs = fileRejections.map((rej, i) => {
    switch (rej.errors[0].code) {
      case "file-too-large":
        return (
          <HawaAlert
            text={rej.file.name}
            title={texts.fileTooLarge}
            severity="error"
          />
        )
      case "too-many-files":
        return (
          <HawaAlert
            text={rej.file.name}
            title={texts.tooManyFiles}
            severity="error"
          />
        )
      case "file-invalid-type":
        return (
          <HawaAlert
            text={rej.file.name}
            title={texts.invalidFileType}
            severity="error"
          />
        )

      default:
        return (
          <HawaAlert
            text={rej.file.name}
            title={rej.errors[0].code}
            severity="error"
          />
        )
    }
  })
  const thumbs = files?.map((file: any, index: any) => (
    <div className="relative rounded">
      <button
        onClick={(e) => {
          e.stopPropagation()
          acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
          setCmp(Math.random)
          onDeleteFile(file)
        }}
        type="button"
        className="absolute left-0 ml-auto inline-flex items-center rounded-inner rounded-bl-none rounded-tr-none bg-gray-900 p-1.5 text-sm text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-toggle="defaultModal"
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: 100,
          width: 100,
          backgroundImage: `url(${file.preview})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid black",
        }}
        className="rounded-lg"
        key={file.name}
      />
    </div>
  ))

  return (
    <div>
      {label && (
        <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </div>
      )}
      <div
        className={clsx(
          "flex flex-col justify-center rounded border border-dashed border-black  transition-all hover:bg-gray-100 ",
          isDragActive ? "bg-layoutPrimary-500" : "bg-white"
        )}
      >
        <div {...getRootProps({})}>
          <p {...getInputProps()} />
          <div className="flex flex-col items-center justify-center gap-2 pt-4 text-center">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1.5em"
              width="1.5em"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
              <path d="M13 13l9 3l-4 2l-2 4l-3 -9"></path>
              <path d="M3 3l0 .01"></path>
              <path d="M7 3l0 .01"></path>
              <path d="M11 3l0 .01"></path>
              <path d="M15 3l0 .01"></path>
              <path d="M3 7l0 .01"></path>
              <path d="M3 11l0 .01"></path>
              <path d="M3 15l0 .01"></path>
            </svg>
            {<texts.clickHereToUpload />}
          </div>
          <div className="pt-2 text-center text-xs">
            {texts.acceptedFileTypes} {accept.split(",")}
          </div>
          <div className="pb-2 pt-1 text-center text-xs">
            {texts.maxFileSize} {max}
          </div>
        </div>
        {acceptedFiles.length > 0 && (
          <div className="flex justify-center rounded-lg  p-2 ">
            <HawaButton onClick={clearAllFiles}>Clear All</HawaButton>
          </div>
        )}
        {acceptedFiles.length > 0 && thumbs && showPreview ? (
          <aside className="flex flex-row flex-wrap justify-center  gap-2 rounded-lg  p-2">
            {thumbs}
          </aside>
        ) : null}
        <div className="px-4">{fileRejections[0]?.errors[0]?.code && errs}</div>
      </div>
    </div>
  )
}
