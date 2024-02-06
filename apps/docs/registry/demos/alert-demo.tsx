import { Alert } from "@sikka/hawa/alert";

export default function AlertDemo() {
  return (
    <div>
      <Alert text="This is a persistent alert" persistent />
      <Alert text="This is a default alert" />
      <Alert severity="info" text="This is an info alert" />
      <Alert severity="success" text="This is a success alert" />
      <Alert severity="warning" text="This is a warning alert" />
      <div className="mb-2">Styles</div>
      <Alert severity="hyper" text="This is a hyper alert" />
      <Alert severity="oceanic" text="This is a oceanic alert" />
    </div>
  );
}
