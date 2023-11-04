import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FileUploader,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";
import { cn } from "../../components/util";
import { Upload } from "lucide-react";

const meta = {
  title: "Elements/FileUploader",
  component: FileUploader,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<FileUploader/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof FileUploader>;

const Template = (args: any, props: any) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Button className="hawa-relative">
        <FileUploader
          className={cn("hawa-absolute hawa-rounded hawa-w-full hawa-h-full")}
        />
        <Upload className="hawa-icon hawa-mr-2" /> <span>Upload</span>
      </Button>
      <Button className="hawa-relative" size={"icon"}>
        <FileUploader
          className={cn("hawa-absolute hawa-rounded hawa-w-full hawa-h-full")}
        />
        <Upload className="hawa-icon" />
      </Button>
      <Card className="hawa-relative hawa-">
        <FileUploader
          className={cn("hawa-absolute hawa-rounded hawa-w-full hawa-h-full")}
        />
        <CardHeader>
          <CardTitle>Upload file</CardTitle>
          <CardDescription>
            Click anywhere on this card to upload a file
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Upload className="hawa-icon" />
        </CardFooter>
      </Card>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
