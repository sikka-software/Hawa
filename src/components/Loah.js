import ExpandIcon from "@material-ui/icons/ArrowBackIos";
import { motion } from "framer-motion";

const Loah = (props) => {
  let directionStyle = {
    backgroundColor: props.bgColor,
    color: props.buttonsColor,
    position: "absolute",
    overflow: "hidden",
    zIndex: 10
  };
  switch (props.direction) {
    case "right":
      directionStyle = {
        ...directionStyle,
        top: 0,
        right: 0,
        height: "100%",
        width: 60
      };
      break;
    case "left":
      directionStyle = {
        ...directionStyle,
        top: 0,
        left: 0,
        width: 60,
        height: "100%"
      };
      break;
    case "top":
      directionStyle = {
        ...directionStyle,
        top: 0,
        left: 0,
        width: "100%",
        height: 60
      };
      break;
    case "bottom":
      directionStyle = {
        ...directionStyle,
        bottom: 0,
        left: 0,
        height: 60,
        width: "100%"
      };
      break;
    default:
      directionStyle = {
        ...directionStyle,
        top: 0,
        right: 0,
        height: "100%",
        width: 60
      };
  }
  return (
    <div style={{ zIndex: 10 }}>
      <motion.div
        style={directionStyle}
        animate={props.expanded ? { width: 200 } : { width: 60 }}
      >
        <div
          onClick={props.handleExpand}
          style={{
            backgroundColor: "green",
            height: 60,
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            // outline: "1px solid black"
          }}
        >
          <ExpandIcon />
        </div>
        {props.buttons?.map((btn) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "green",
                height: 60,
                width: "100%",
                zIndex: 10,
                justifyContent: "center",
                alignItems: "center"
                // outline: "1px solid black"
              }}
            >
              <div
                style={{
                  // backgroundColor: "green",
                  height: 60,
                  width: 60,
                  zIndex: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                  // outline: "1px solid black"
                }}
              >
                {btn.icon}
              </div>
              {props.expanded ? (
                <motion.div
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    height: "100%",
                    display: "flex",
                    alignItems: "center"
                  }}
                  initial={{ opacity: 0, width: 0 }}
                  animate={
                    props.expanded
                      ? { opacity: 1, width: "100%" }
                      : { opacity: 0, width: 0 }
                  }
                >
                  {btn.name}
                </motion.div>
              ) : null}
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 9,
          backgroundColor: "orange",
          width: 0,
          overflow: "hidden"
        }}
        animate={
          props.expanded
            ? {
                width: 300
              }
            : {
                width: 0
              }
        }
      >
        {props.expanded ? <div>tab content</div> : null}
      </motion.div>
    </div>
  );
};

export default Loah;
