import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import clsx from "clsx";

import { Alert } from "../alert/Alert";
import { Button } from "../button";

type FileDropzoneTypes = {
  /**  The text label above the component. Consistant with the other form input fields   */
  label?: string;
  files: [File];
  setFiles: any;
  setDeletedFiles: any;
  maxFiles: number;
  accept: any;
  onAcceptedFiles: any;
  showPreview: any;
  onDeleteFile: any;
  onClearFiles: any;
  maxSize: number;
  errorMessages: string;
  disclaimer?: boolean;
  termsLink?: string;
  privacyLink?: string;
  /** The translation object, use this to replace the default text with any translated text you want.*/
  texts: {
    errorUploading: any;
    clickHereToUpload: any;
    maxFileSize: any;
    tooManyFiles: any;
    fileTooLarge: any;
    acceptedFileTypes: any;
    invalidFileType: any;
    terms?: string;
    privacyPolicy?: string;
    disclaimer?: string;
    and?: string;
  };
};

export const FileDropzone: React.FunctionComponent<FileDropzoneTypes> = ({
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
  disclaimer,
  maxSize,
  label,
  termsLink,
  privacyLink,
}) => {
  const [cmp, setCmp] = useState(0);
  const [max, setMax] = useState<any>(0);

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
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any, index: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });
  useEffect(
    () => () => {
      files?.forEach((file: any) => {
        URL.revokeObjectURL(file.preview);
      });
    },
    [files],
  );
  useEffect(() => {
    setFiles(acceptedFiles);
  }, [acceptedFiles, cmp, setFiles]);
  onClearFiles = () => {
    acceptedFiles.length = 0;
    acceptedFiles.splice(0, acceptedFiles.length);
    setFiles([]);
  };

  const clearAllFiles = () => {
    acceptedFiles.length = 0;
    setFiles([]);
  };

  useEffect(() => {
    if (maxSize > 0) {
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(maxSize) / Math.log(1024));

      setMax(
        parseFloat((maxSize / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i],
      );
    }
  }, [maxSize]);
  const errs = fileRejections.map((rej: any, i: any) => {
    switch (rej.errors[0].code) {
      case "file-too-large":
        return (
          <Alert
            key={i}
            text={rej.file.name}
            title={texts.fileTooLarge}
            severity="error"
          />
        );
      case "too-many-files":
        return (
          <Alert
            key={i}
            text={rej.file.name}
            title={texts.tooManyFiles}
            severity="error"
          />
        );
      case "file-invalid-type":
        return (
          <Alert
            key={i}
            text={rej.file.name}
            title={texts.invalidFileType}
            severity="error"
          />
        );

      default:
        return (
          <Alert
            key={i}
            text={rej.file.name}
            title={rej.errors[0].code}
            severity="error"
          />
        );
    }
  });
  const thumbs = files?.map((file: any, index: any) => (
    <div className="hawa-relative hawa-rounded" key={index}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          acceptedFiles.splice(acceptedFiles.indexOf(file), 1);
          setCmp(Math.random);
          onDeleteFile(file);
        }}
        type="button"
        className="hawa-absolute hawa-left-0 hawa-ml-auto hawa-inline-flex hawa-items-center hawa-rounded-inner hawa-rounded-bl-none hawa-rounded-tr-none hawa-bg-gray-900 hawa-p-1.5 hawa-text-sm hawa-text-gray-400 hawa-transition-all hover:hawa-bg-gray-200 hover:hawa-text-gray-900 dark:hover:hawa-bg-gray-600 dark:hover:hawa-text-white"
        data-modal-toggle="defaultModal"
      >
        <svg
          aria-hidden="true"
          className="hawa-h-5 hawa-w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="hawa-sr-only">Close modal</span>
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
        className="hawa-rounded"
        key={file.name}
      />
    </div>
  ));

  return (
    <div>
      {label && (
        <div className="hawa-mb-2 hawa-block hawa-text-sm hawa-font-medium hawa-text-gray-900 dark:hawa-text-gray-300">
          {label}
        </div>
      )}
      <div
        className={clsx(
          "hawa-flex hawa-flex-col hawa-justify-center hawa-rounded hawa-border hawa-border-dashed hawa-p-6 hawa-transition-all",
          isDragActive
            ? "hawa-bg-muted"
            : "hawa-bg-muted/20 hover:hawa-bg-muted/50",
        )}
      >
        <div {...getRootProps({})}>
          <p {...getInputProps()} />
          <div className="hawa-flex hawa-flex-col hawa-items-center hawa-justify-center hawa-gap-2 hawa-pt-4 hawa-text-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            {typeof texts.clickHereToUpload === "function"
              ? texts.clickHereToUpload()
              : texts.clickHereToUpload}
          </div>
          <div className="hawa-select-none hawa-pt-2 hawa-text-center hawa-text-xs">
            {texts.acceptedFileTypes} {accept.split(",")}
          </div>
          <div className="hawa-select-none hawa-pb-2 hawa-pt-1 hawa-text-center hawa-text-xs">
            {texts.maxFileSize} {max}
          </div>
        </div>
        {acceptedFiles.length > 0 && (
          <div className="hawa-flex hawa-justify-center hawa-rounded-lg hawa-p-2">
            <Button onClick={clearAllFiles}>Clear All</Button>
          </div>
        )}
        {acceptedFiles.length > 0 && thumbs && showPreview ? (
          <aside className="hawa-flex hawa-flex-row hawa-flex-wrap hawa-justify-center hawa-gap-2 hawa-rounded-lg hawa-p-2">
            {thumbs}
          </aside>
        ) : null}
        <div className="px-4">{fileRejections[0]?.errors[0]?.code && errs}</div>
      </div>
      {disclaimer && (
        <div className="hawa-mt-2 hawa-text-sm hawa-text-muted-foreground/50">
          {texts.disclaimer ?? "By uploading a file you agree to our"}{" "}
          <a
            href={termsLink}
            className="clickable-link hawa-text-muted-foreground/50"
          >
            {texts.terms ?? "Terms"}
          </a>{" "}
          {texts.and ?? "and"}{" "}
          <a
            href={privacyLink}
            className="clickable-link hawa-text-muted-foreground/50"
          >
            {texts.privacyPolicy ?? "Privacy Policy"}
          </a>
        </div>
      )}
    </div>
  );
};
