import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
// import styled from "@emotion/styled";
import { Button, Container, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { HawaAlert } from "./HawaAlert";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 10
};

export const DragDropImages = ({
  texts,
  files,
  setFiles,
  setDeletedFiles,
  maxFiles,
  accept,
  onAcceptedFiles,
  showPreview,
  onDeleteFile,
  onClearFiles,
  maxSize,
  errorMessages
}) =>
  // props
  {
    const [cmp, setCmp] = useState(0);
    const [max, setMax] = useState(0);
    //const [thumbs, setThumbs] = useState("");
    const theme = useTheme();
    const {
      getRootProps,
      getInputProps,
      fileRejections,
      acceptedFiles,
      isDragActive
    } = useDropzone({
      multiple: true,
      accept: accept,
      maxSize: maxSize,
      maxFiles: maxFiles,
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file, index) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    });
    useEffect(
      () => () => {
        files?.forEach((file) => {
          URL.revokeObjectURL(file.preview);
        });
      },
      [files]
    );

    useEffect(() => {
      setFiles(acceptedFiles);
    }, [acceptedFiles, cmp]);

    onClearFiles = () => {
      acceptedFiles.length = 0;
      acceptedFiles.splice(0, acceptedFiles.length);
      setFiles([]);
    };

    useEffect(() => {
      if (maxSize > 0) {
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(maxSize) / Math.log(1024));

        setMax(
          parseFloat((maxSize / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i]
        );
      }
    }, [maxSize]);
    const errs = fileRejections.map((rej, i) => {
      return (
        <div key={i}>
          <div>{rej.file.name}</div>
          <div>{rej.errors[0].code}</div>
        </div>
      );
    });
    const thumbs = files?.map((file, index) => (
      <div style={{ position: "relative", margin: 10 }}>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            acceptedFiles.splice(acceptedFiles.indexOf(file), 1);
            setCmp(Math.random);
            onDeleteFile(file);
          }}
          size="small"
          variant="contained"
          style={{
            position: "absolute",
            top: -10,
            right: -10,
            backgroundColor: theme.primaryActionColor,
            color: "white",
            padding: 3
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
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
            border: "1px solid black"
          }}
          key={file.name}
        />
      </div>
    ));

    console.log("error", fileRejections);

    return (
      <Container
        variant="drop-area"
        {...getRootProps({
          style: { backgroundColor: isDragActive && "white" }
        })}
      >
        <input {...getInputProps()} />
        <Typography>Click here or drop files here to upload</Typography>
        <Typography>Max file size is {max}</Typography>
        {acceptedFiles.length > 0 && (
          <Button
            style={{ color: "black" }}
            onClick={(e) => {
              e.stopPropagation();
              onClearFiles(acceptedFiles);
            }}
          >
            Clear All
          </Button>
        )}

        {thumbs && showPreview ? <aside style={thumbsContainer}>{thumbs}</aside> : null}
        {fileRejections[0]?.errors[0]?.code === "too-many-files" ? (
          // <Typography variant="">{texts.tooManyFiles}</Typography>
          <HawaAlert text={texts.tooManyFiles} severity="error" />
        ) : fileRejections[0]?.errors[0]?.code === "file-too-large" ? (
          <HawaAlert text={texts.fileTooLarge} severity="error" />
        ) : (
          errs
        )}
        {}
      </Container>
    );
  };
