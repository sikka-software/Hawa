import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../token";
import { useDropzone } from "react-dropzone";
import useTranslation from "next-translate/useTranslation";
import Badge from "@material-ui/core/Badge";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styles/Theme.module.css";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 10
};

const DragDropItemImage = ({
  files,
  setFiles,
  itemId,
  setDeletedFiles,
  refetchSingleMenu
}) => {
  const token = getToken();
  const [cmp, setCmp] = useState(0);
  //const [thumbs, setThumbs] = useState("");
  const { t } = useTranslation("common");
  const { getRootProps, getInputProps, fileRejections, acceptedFiles } =
    useDropzone({
      multiple: token.Pack?.image_per_item_limit > 1,
      accept: "image/*",
      maxSize: 5000000,
      maxFiles: token.Pack?.image_per_item_limit,
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
        await axios.post(
          `${process.env.NEXT_PUBLIC_QAWAIM_API_URL}/deleteImages`,
          {
            deletedFiles: [
              {
                img_url: acceptedFiles[file]?.img_url,
                _id: acceptedFiles[file]?._id
              }
            ],
            itemId: itemId
          }
        );
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
      files.forEach((file) => {
        URL.revokeObjectURL(file.preview);
      });
    },

    [files]
  );
  useEffect(() => {
    if (files[0]?.hasOwnProperty("_id")) {
      files?.map((file, index) => {
        acceptedFiles.push({
          preview: `https://qawaim-images.s3-ap-southeast-1.amazonaws.com/${file.image_url}`,
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
      <div key={i} className={styles.upload_error_container}>
        <div>{rej.file.name}</div>
        <div>{t(rej.errors[0].code)}</div>
      </div>
    );
  });

  const thumbs = files.map((file, index) => (
    <Badge
      key={index}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Clicking", index);
        handleRemoveFile(index);
      }}
      badgeContent={<CloseIcon fontSize="small" />}
      color="primary"
      style={{
        margin: 10,
        width: 100,
        height: 100
      }}
    >
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
          backgroundPosition: "center"
        }}
        key={file.name}
      />
    </Badge>
  ));

  return (
    <section className={styles.upload_main_container}>
      <div
        {...getRootProps({
          onClick: (e) => {
            console.log("e : ", e);
            e.preventDefault(), console.log("khobza");
          },
          style: { height: "100%", width: "100%", padding: 10 }
        })}
      >
        <input {...getInputProps()} />
        <div style={{ fontSize: 13 }}>{t("drag-n-drop")}</div>
        <div style={{ fontSize: 13, marginTop: 5 }}>{t("max-file-size")}</div>
        {thumbs ? <aside style={thumbsContainer}>{thumbs}</aside> : null}
        {errs}
      </div>
    </section>
  );
};

export default DragDropItemImage;
