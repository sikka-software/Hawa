import InputLabel from "@material-ui/core/InputLabel";

export const StyledInputLabel = (props) => {
  return (
    <InputLabel
      style={{
        margin: 15,
        marginRight: 0,
        marginLeft: 0
      }}
    >
      <div style={{ fontSize: 15, color: "black" }}>{props.label}</div>
    </InputLabel>
  );
};
