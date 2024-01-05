import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FileDropzone } from "@sikka/hawa/elements/fileDropzone";

const meta = {
  title: "Elements/FileDropzone",
  component: FileDropzone,
  parameters: { layout: "centered" }
} satisfies Meta<typeof FileDropzone>;

export default meta;
type Story = StoryObj<typeof FileDropzone>;

export const Default: Story = {
  render: (args: any, props: any) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    return (
      <div>
        <FileDropzone
          errorMessages={"error msg here"}
          maxFiles={5}
          maxSize={5000000}
          showPreview={true}
          accept={".jpeg, .jpg, .png"}
          disclaimer={true}
          termsLink={"https://sikka.io"}
          privacyLink={"https://sikka.io"}
          onDeleteFile={() => {}}
          onClearFiles={() => {}}
          label={"Company Logo"}
          setFiles={(e: any) => setUploadedFiles(e)}
          files={uploadedFiles}
          texts={{
            tooManyFiles: "Too many files",
            fileTooLarge: "File too large",
            invalidFileType: "Invalid File Type",
            errorUploading: "Error Uploading Files",
            maxFileSize: "Max File Size ",
            acceptedFileTypes: "Accepted File Types:",
            clickHereToUpload: () => (
              <>
                Drag & Drop files here <br />
                <span className="text-sm">
                  or click to browse your computer
                </span>
              </>
            )
          }}
          {...args}
        />
      </div>
    );
  }
};
