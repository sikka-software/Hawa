import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { HawaAlert } from "./HawaAlert"
import { HawaButton } from "./HawaButton"

type DragDropImagesTypes = {
  label?: string
  files: [File]
  setFiles: any
  setDeletedFiles: any
  maxFiles: number
  accept: string
  onAcceptedFiles: any
  showPreview: any
  onDeleteFile: any
  texts: {
    clickHereToUpload: string
    maxFileSize: string
    tooManyFiles: string
    fileTooLarge: string
  }
  onClearFiles: any
  maxSize: number
  errorMessages: string
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
  //const [thumbs, setThumbs] = useState("");
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
    return (
      <HawaAlert
        text={rej.file.name}
        title={rej.errors[0].code}
        severity="error"
      />
    )
  })
  const thumbs = files?.map((file: any, index: any) => (
    <div className="relative m-3 rounded ">
      <button
        onClick={(e) => {
          e.stopPropagation()
          acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
          setCmp(Math.random)
          onDeleteFile(file)
        }}
        type="button"
        className="absolute left-0 ml-auto inline-flex items-center rounded rounded-tr-none rounded-bl-none bg-gray-900 p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-toggle="defaultModal"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
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
        {...getRootProps({})}
        className="flex flex-col justify-center rounded border border-dashed border-black bg-white transition-all hover:bg-gray-100 "
      >
        <input {...getInputProps()} />
        <div className="pt-4 text-center">{texts.clickHereToUpload}</div>
        <div className="pb-4 text-center text-xs">
          {texts.maxFileSize} {max}
        </div>
        <div className="flex justify-center ">
          {acceptedFiles.length > 0 && (
            <HawaButton
              onClick={(e) => {
                e.stopPropagation()
                onClearFiles(acceptedFiles)
              }}
            >
              Clear All
            </HawaButton>
          )}
        </div>
        {thumbs && showPreview ? (
          <aside
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              // marginTop: 10,
            }}
            className="rounded-lg border-red-500"
          >
            {thumbs}
          </aside>
        ) : null}
        <div className="px-2">
          {fileRejections[0]?.errors[0]?.code === "too-many-files" ? (
            <HawaAlert text={texts.tooManyFiles} severity="error" />
          ) : fileRejections[0]?.errors[0]?.code === "file-too-large" ? (
            <HawaAlert text={texts.fileTooLarge} severity="error" />
          ) : (
            errs
          )}
        </div>
        {}
      </div>
    </div>
  )
}
