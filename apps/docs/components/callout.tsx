import { Alert } from "@sikka/hawa/alert";

interface CalloutProps {
  icon?: string;
  title?: string;
  children?: React.ReactNode;
}

export function Callout({ title, children, icon, ...props }: CalloutProps) {
  return (
    <Alert
      title={title}
      text={children}
      //  {...props}
    >
      {/* {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription> */}
    </Alert>
  );
}
