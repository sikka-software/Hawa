import type { Meta, StoryObj } from "@storybook/react";
import { FileDropzone } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Elements/FileDropzone",
  component: FileDropzone,
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<FileDropzone/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileDropzone>;

export default meta;
type Story = StoryObj<typeof FileDropzone>;

const Template = (args: any, props: any) => {
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
              <span className="text-sm">or click to browse your computer</span>
            </>
          ),
        }}
        {...args}
      />
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
