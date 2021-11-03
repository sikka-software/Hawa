import { motion } from "framer-motion";
import ExpandIcon from "@material-ui/icons/ArrowBackIos";

export const Loah = (props) => {
  let directionStyle = {
    backgroundColor: props.bgColor,
    color: props.buttonsColor,
    position: "absolute",
    overflow: "hidden",
    zIndex: 10
  };

  let tabPanelStyle = {
    // backgroundColor: props.bgColor,
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
      tabPanelStyle = {
        // height: '100%',
        ...tabPanelStyle,
        height: 300,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 9,
        backgroundColor: "orange",
        width: 0,
        overflow: "hidden"
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
        animate={props.expended ? { width: 200 } : { width: 60 }}
      >
        <div
          // onClick={props.handleExpand}
          onClick={props.handleExpand}
          id="expandButton"
          style={{
            // backgroundColor: 'blue',
            height: 60,
            width: 60,
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            paddingLeft: 5
          }}
        >
          <ExpandIcon />
        </div>
        {props.buttons?.map((btn, k) => {
          return (
            <div
              key={k}
              style={{
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "green",
                height: 60,
                width: "100%",
                zIndex: 10
                // justifyContent: 'center',
                // alignItems: 'center'
                // outline: "1px solid black"
              }}
            >
              {btn.icon ? (
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
              ) : null}
              {props.expended ? (
                <motion.div
                  onClick={() => console.log("clicking ", btn.name)}
                  style={{
                    backgroundColor: "yellow",
                    // margin: 5
                    cursor: "pointer",
                    color: "green",
                    height: "auto",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    padding: 20
                    // justifyContent:'center'
                    // textAlign: 'center'
                  }}
                  initial={{ opacity: 0, width: 0 }}
                  animate={
                    props.expended
                      ? { opacity: 1, width: "90%" }
                      : { opacity: 0, width: 0 }
                  }
                >
                  {btn.name}
                </motion.div>
              ) : null}
            </div>
          );
        })}

        {props.expended && props.footer ? (
          <motion.div
            style={{
              bottom: 0,
              position: "absolute",
              // backgroundColor: "blue",
              width: "100%",
              paddingTop: 10,
              paddingBottom: 10,
              textAlign: "center"
              // color: "white"
            }}
            initial={{ opacity: 0, width: 0 }}
            animate={
              props.expended
                ? { opacity: 1, width: "100%" }
                : { opacity: 0, width: 0 }
            }
          >
            {props.footer}
          </motion.div>
        ) : null}
      </motion.div>
      <motion.div
        initial={{ ...tabPanelStyle }}
        animate={props.expended ? { width: 300 } : { width: 0 }}
      >
        {props.expended && props.content ? <div>tab content</div> : null}
      </motion.div>
    </div>
  );
};
