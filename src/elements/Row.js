export const Row = (props) => {
  return (
    <div
      style={{
        backgroundColor: "var(--light)",
        // borderRadius: "var(--borderR)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        padding: 10,
        marginBottom: 20,
        width: "100%"
      }}
    >
      <div style={{ fontWeight: 800 }}>{props.title}</div>
      {props.actionComponent}
    </div>
  );
};
