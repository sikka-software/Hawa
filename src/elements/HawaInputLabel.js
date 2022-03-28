import InputLabel from "@mui/material/InputLabel";

export const HawaInputLabel = (props) => {
  return (
    <InputLabel>
      <div style={{ fontSize: 15 }}>{props.label}</div>
    </InputLabel>
  );
};
