import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
// import styled from "@emotion/styled";
import { Container, IconButton, Typography } from "@mui/material";
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
  itemId,
  setDeletedFiles,
  refetchSingleMenu,
  maxFiles
}) =>
  // props
  {
    const [cmp, setCmp] = useState(0);
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
      accept: "image/*",
      maxSize: 5000000,
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
    const handleRemoveFile = async (file) => {
      console.log("fezafezaf", acceptedFiles[file]);
      if (acceptedFiles[file]?.isFromDB) {
        setDeletedFiles((old) => [
          ...old,
          {
            img_url: acceptedFiles[file]?.img_url,
            _id: acceptedFiles[file]?._id
          }
        ]);
        try {
          // await axios.post(
          //   `${process.env.NEXT_PUBLIC_QAWAIM_API_URL}/deleteImages`,
          //   {
          //     deletedFiles: [
          //       {
          //         img_url: acceptedFiles[file]?.img_url,
          //         _id: acceptedFiles[file]?._id
          //       }
          //     ],
          //     itemId: itemId
          //   }
          // );
          refetchSingleMenu();
          acceptedFiles.splice(file, 1);
          setFiles(acceptedFiles);
        } catch (err) {
          console.error(err);
        }
        console.log("accepted files after delete : ", acceptedFiles);
        setCmp((old) => old + 1);
        return;
      }
      // if (file.hasOwnProperty("_id")) {
      //   console.log("Yes");
      //   return;
      // }
      acceptedFiles.splice(file, 1);

      setFiles(
        acceptedFiles.map((f) =>
          Object.assign(f, { preview: URL.createObjectURL(f) })
        )
      );
      // setFiles(acceptedFiles);
    };
    useEffect(
      () => () => {
        files?.forEach((file) => {
          URL.revokeObjectURL(file.preview);
        });
      },
      [files]
    );
    useEffect(() => {
      if (files[0]?.hasOwnProperty("_id")) {
        files?.map((file, index) => {
          acceptedFiles.push({
            // preview: `https://qawaim-images.s3-ap-southeast-1.amazonaws.com/${file.image_url}`,
            isFromDB: true,
            _id: file._id,
            img_url: file.image_url
          });
        });
        console.log("accepted files : ", acceptedFiles);
        setFiles(acceptedFiles);
      }
      return () => {
        acceptedFiles.splice(0, acceptedFiles?.length);
      };
    }, []);
    const errs = fileRejections.map((rej, i) => {
      return (
        <div key={i}>
          <div>{rej.file.name}</div>
          <div>{rej.errors[0].code}</div>
        </div>
      );
    });
    console.log(fileRejections[0]?.errors[0]?.code);
    const thumbs = files?.map((file, index) => (
      <div style={{ position: "relative", margin: 10 }}>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            console.log("delete");
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

    return (
      <Container
        variant="drop-area"
        {...getRootProps({
          style: { backgroundColor: isDragActive && "white" }
        })}
      >
        <input {...getInputProps()} />
        <Typography>Click here or drop files here to upload</Typography>
        <Typography>Max file size is 5MB</Typography>
        {thumbs ? <aside style={thumbsContainer}>{thumbs}</aside> : null}
        {fileRejections[0]?.errors[0]?.code !== "too-many-files" ? (
          // <Typography variant="">{texts.tooManyFiles}</Typography>
          <HawaAlert text={texts.tooManyFiles} severity="error" />
        ) : (
          errs
        )}
      </Container>
    );
  };
