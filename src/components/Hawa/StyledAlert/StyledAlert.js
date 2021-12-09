import Alert from "@material-ui/lab/Alert";
// import styles from "../styles/Theme.module.css";

export const StyledAlert = (props) => {
  return (
    <Alert
      {...props}
      // className={styles.styled_alert}
      style={{ borderRadius: "var(--borderR)" }}
    >
      {props?.children}
    </Alert>
  );
};

export default StyledAlert;
