import React, { useState } from "react";
import { DragDropImages, HawaButton, HawaTextField } from "../../elements";

export default {
  title: "Elements/UploadFiles",
  component: [DragDropImages],
  argTypes: {
    accept: {
      name: "accept",
      type: { name: "string", required: false },
      description: "file's type, splited by ,",
      table: { defaultValue: ".pdf, .jpg" }
    }
  }
};

const DragAndDropFiles = (args, props) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <div>
      <DragDropImages
        label={"Company Logo"}
        setFiles={(e) => setUploadedFiles(e)}
        files={uploadedFiles}
        texts={{
          tooManyFiles: "Too many files",
          fileTooLarge: "File too large",
          invalidFileType: "Invalid File Type",
          errorUploading: "Error Uploading Files",
          maxFileSize: "Max File Size ",
          acceptedFileTypes: "Accepted File Types:",

          clickHereToUpload: () => {
            return (
              <>
                Drag & Drop files here <br />
                <span className="text-sm">
                  or click to browse your computer
                </span>
              </>
            );
          }
        }}
        {...args}
      />
    </div>
  );
};

export const UploadFiles = DragAndDropFiles.bind({});

UploadFiles.args = {
  errorMessages: "error msg here",
  maxFiles: 5,
  maxSize: 5000000,
  showPreview: true,
  accept: ".jpeg, .jpg, .png",
  disclaimer: true,
  termsLink: "https://sikka.io",
  privacyLink: "https://sikka.io",
  onDeleteFile: () => {},
  onClearFiles: () => {}
};
