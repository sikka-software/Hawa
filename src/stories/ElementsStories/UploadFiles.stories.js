import { Container } from "@mui/material";
import React, { useState } from "react";
import { DragDropImages } from "../../elements";

export default {
  title: "Elements/DragAndDropFiles",
  component: [DragDropImages],
  argTypes: {
    accept: {
      name: "accept",
      type: { name: "string", required: false },
      description: "file's type, splited by ,",
      defaultValue: "image/*,application/pdf"
    }
  },
};

const DragAndDropFiles = (args) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  console.log(args.accept.split(","));
  return (
    <Container>
      <DragDropImages
        setFiles={(e) => setUploadedFiles(e)}
        files={uploadedFiles}
        maxFiles={args.maxFiles}
        maxSize={args.maxSize}
        accept={args.accept ? args.accept.split(",") : null}
        onDeleteFile={args.onRemoveFile}
        onClearFiles={args.onClearAll}
        showPreview={args.showPreview}
        errorMessages={args.errorMessage}
        texts={{
          tooManyFiles: "Too many files",
          fileTooLarge : "File too large"
        }}
      />
    </Container>
  );
};

export const Default = DragAndDropFiles.bind({});

Default.args = {
  maxFiles: 5,
  maxSize: 5000000,
  showPreview: true,
  onRemoveFile : () => {},
  onClearAll : () => {}
};