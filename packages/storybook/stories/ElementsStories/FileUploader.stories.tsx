import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Upload } from "lucide-react";

import { Button } from "@sikka/hawa/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@sikka/hawa/card";
import { FileUploader } from "@sikka/hawa/fileUploader";

import { cn } from "../../../components/util";

const meta = {
  title: "Elements/FileUploader",
  component: FileUploader
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  render: (args: any, props: any) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Button className="hawa-relative">
          <FileUploader
            className={cn("hawa-absolute hawa-h-full hawa-w-full hawa-rounded")}
          />
          <Upload className="hawa-icon hawa-mr-2" /> <span>Upload</span>
        </Button>
        <Button className="hawa-relative" size={"icon"}>
          <FileUploader
            className={cn("hawa-absolute hawa-h-full hawa-w-full hawa-rounded")}
          />
          <Upload className="hawa-icon" />
        </Button>
        <Card className="hawa- hawa-relative">
          <FileUploader
            className={cn("hawa-absolute hawa-h-full hawa-w-full hawa-rounded")}
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
  }
};
