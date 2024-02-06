import { Alert } from "@sikka/hawa/alert";

export default function AlertDemo() {
  return (
    <Alert
      severity="info"
      title="Information"
      text="This is an informational alert."
      // duration={5000}
      variant="normal"
      direction="ltr"
      actions={[
        {
          label: "Action",
          onClick: () => console.log("Action clicked"),
          variant: "default"
        }
      ]}
      persistent={false}
      onAlertClosed={() => console.log("Alert closed")}
    />
  );
}
