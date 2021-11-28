import InputLabel from "@material-ui/core/InputLabel";

export const  StyledInputLabel = (props) => {
  return (
    <InputLabel
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 15,
        marginRight: 0,
        marginLeft: 0
      }}
    >
      <div style={{ fontSize: 15, color: "black" }}>{props.label}</div>

      {props.multiLang ? (
        <div
          style={{
            backgroundColor: "var(--light)",
            fontSize: 10,
            padding: 10,
            borderRadius: "var(--borderR)",
            width: "auto"
          }}
        >
          <span style={{ padding: 5 }}>EN</span>
          <span style={{ padding: 5 }}>AR</span>
        </div>
      ) : null}
    </InputLabel>
  );
};

