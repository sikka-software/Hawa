import { DirectionType } from "@_types/commonTypes";
import { Toaster as SonnerToaster, toast, ToastT } from "sonner";

type SonnerProps = React.ComponentProps<typeof SonnerToaster> & {
  direction?: DirectionType;
};

const Sonner = ({ ...props }: SonnerProps) => {
  return (
    <SonnerToaster
      // theme={theme as SonnerProps["theme"]}

      dir={props.direction}
      position={props.direction === "rtl" ? "bottom-left" : "bottom-right"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:hawa-bg-background group-[.toaster]:hawa-text-foreground group-[.toaster]:hawa-border-border group-[.toaster]:hawa-shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:hawa-bg-primary group-[.toast]:hawa-text-primary-foreground",
          cancelButton:
            "group-[.toast]:hawa-bg-muted group-[.toast]:hawa-text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

const createSonner: typeof toast = toast;

export { Sonner, createSonner };
