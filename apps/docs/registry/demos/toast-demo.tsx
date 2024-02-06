"use client";

import { Button } from "@sikka/hawa/button";
import { useToast } from "@sikka/hawa/hooks";

export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Default toast",
            description: "This is an example of a default toast."
          });
        }}
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            severity: "success",
            title: "Account created!",
            description: "This is an example of a success toast."
          });
        }}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            severity: "warning",
            title: "Please confirm your email address before proceeding.",
            description: "This is an example of a warning toast."
          });
        }}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            severity: "info",
            title: "A new version of Hawa is available!",
            description: "This is an example of a info toast"
          });
        }}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            severity: "error",
            title: "Something went wrong!",
            description: "This is an example of an error toast"
          });
        }}
      >
        Error
      </Button>
    </div>
  );
}
