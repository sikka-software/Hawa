// import * as Alert from "@material-ui/lab/Alert";
// import styles from "../styles/Theme.module.css";

export const StyledAlert = (props) => {
  return (
    <div>{props.text}</div>
    // <Alert
    //   {...props}
    //   // className={styles.styled_alert}
    //   // style={{ borderRadius: "var(--borderR)" }}
    // >
    //   {props.children}
    // </Alert>
  );
};
