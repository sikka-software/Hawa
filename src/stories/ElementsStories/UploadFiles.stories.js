import { Container } from "@mui/material";
import React, { useState } from "react";
import { DragDropImages } from "../../elements";

export default {
  title: "Elements/DragAndDropFiles",
  component: [DragDropImages]
};

export const DragAndDropFiles = (args) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  console.log("files are ", uploadedFiles);
  return (
    <Container>
      <DragDropImages
        setFiles={(e) => setUploadedFiles(e)}
        files={uploadedFiles}
        maxFiles={10}
        texts={{
          tooManyFiles: "Too many files"
        }}
      />
    </Container>
  );
};
