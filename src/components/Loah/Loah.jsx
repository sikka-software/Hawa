import { motion } from "framer-motion"
// import ExpandIcon from "@material-ui/icons/ArrowBackIos";
import tinycolor from "tinycolor2"
import { useState } from "react"

export const Loah = (props) => {
  const [expand, setExpand] = useState(false)
  let rootStyle = {
    zIndex: 10,
    fontFamily: "Roboto",
    fontWeight: 600,
  }
  let directionStyle = {
    backgroundColor: props.bgColor || tinycolor("lightgrey"),
    color: tinycolor(props.buttonsColor),
    position: "absolute",
    overflow: "hidden",
    zIndex: 10,
  }
  let tabPanelStyle = {
    color: props.buttonsColor,
    position: "absolute",
    overflow: "hidden",
    zIndex: 10,
  }
  let expandButtonStyle = {
    height: 60,
    width: 60,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingLeft: 5,
  }
  let itemIconStyle = {
    height: 60,
    width: 60,
    padding: 0,
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  switch (props.direction) {
    case "right":
      directionStyle = {
        ...directionStyle,
        top: 0,
        right: 0,
        height: "100%",
        width: 60,
      }
      tabPanelStyle = {
        // height: '100%',
        ...tabPanelStyle,
        height: 300,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 9,
        width: 0,
        overflow: "hidden",
      }
      break
    case "left":
      directionStyle = {
        ...directionStyle,
        top: 0,
        left: 0,
        width: 60,
        height: "100%",
      }
      break
    case "top":
      directionStyle = {
        ...directionStyle,
        top: 0,
        left: 0,
        width: "100%",
        height: 60,
      }
      break
    case "bottom":
      directionStyle = {
        ...directionStyle,
        bottom: 0,
        left: 0,
        height: 60,
        width: "100%",
      }
      break
    default:
      directionStyle = {
        ...directionStyle,
        top: 0,
        right: 0,
        height: "100%",
        width: 60,
      }
  }
  return (
    <div style={rootStyle}>
      <motion.div
        initial={directionStyle}
        transition={{
          stiffness: 100,
        }}
        animate={expand ? { width: 200 } : { width: 60 }}
      >
        <motion.div
          id="expandButton"
          initial={expandButtonStyle}
          animate={expand ? { rotate: "180deg" } : {}}
          onClick={() => setExpand(!expand)}
        >
          {/* <ExpandIcon /> */}
          EXP
        </motion.div>

        <div
          style={{
            height: "100%",
            // overflow: expand ? "scroll" : "hidden"
          }}
        >
          {props.buttons
            ? props.buttons.map((btn, k) => {
                return (
                  <motion.div
                    onClick={btn.action}
                    key={k}
                    initial={{
                      display: "flex",
                      flexDirection: "row",
                      height: 60,
                      width: "100%",
                      zIndex: 10,
                      backgroundColor: props.bgColor
                        ? tinycolor(props.bgColor)
                        : tinycolor("lightgrey"),
                    }}
                    animate={
                      props.activeItem === btn.slug
                        ? {
                            backgroundColor: tinycolor(props.bgColor).lighten(
                              60
                            ),
                          }
                        : {}
                    }
                    whileHover={
                      props.activeItem === btn.slug
                        ? {
                            backgroundColor: tinycolor(props.bgColor).lighten(
                              60
                            ),
                          }
                        : {
                            backgroundColor: tinycolor(props.bgColor).lighten(
                              75
                            ),
                          }
                    }
                  >
                    {btn.icon ? (
                      <motion.div
                        style={itemIconStyle}
                        initial={{
                          height: 60,
                          width: 60,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                        }}
                        animate={{ width: 60 }}
                      >
                        {btn.icon}
                      </motion.div>
                    ) : null}
                    {expand ? (
                      <motion.div
                        style={{
                          cursor: "pointer",
                          height: "auto",
                          display: "flex",
                          alignItems: "center",
                          padding: 20,
                          color:
                            tinycolor(props.textColor) || tinycolor("black"),
                        }}
                        transition={{ delay: k * 0.05, bounce: 0 }}
                        initial={{ opacity: 0, x: 100, padding: 20 }}
                        animate={
                          expand
                            ? {
                                opacity: 1,
                                x: 0,
                                padding: btn.icon ? 0 : 20,
                              }
                            : { opacity: 0 }
                        }
                      >
                        {btn.name}
                      </motion.div>
                    ) : null}
                  </motion.div>
                )
              })
            : null}
          {/* {props.buttons?.map((btn, k) => {
            return (
              <motion.div
                onClick={btn.action}
                key={k}
                initial={{
                  display: "flex",
                  flexDirection: "row",
                  height: 60,
                  width: "100%",
                  zIndex: 10,
                  backgroundColor: props.bgColor
                    ? tinycolor(props.bgColor)
                    : tinycolor("lightgrey")
                }}
                animate={
                  props.activeItem === btn.slug
                    ? { backgroundColor: tinycolor(props.bgColor).lighten(60) }
                    : {}
                }
                whileHover={
                  props.activeItem === btn.slug
                    ? {
                        backgroundColor: tinycolor(props.bgColor).lighten(60)
                      }
                    : {
                        backgroundColor: tinycolor(props.bgColor).lighten(75)
                      }
                }
              >
                {btn.icon ? (
                  <motion.div
                    style={itemIconStyle}
                    initial={{
                      height: 60,
                      width: 60
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100
                    }}
                    animate={{ width: 60 }}
                  >
                    {btn.icon}
                  </motion.div>
                ) : null}
                {expand ? (
                  <motion.div
                    style={{
                      cursor: "pointer",
                      height: "auto",
                      display: "flex",
                      alignItems: "center",
                      padding: 20,
                      color: tinycolor(props.textColor) || tinycolor("black")
                    }}
                    transition={{ delay: k * 0.05, bounce: 0 }}
                    initial={{ opacity: 0, x: 100, padding: 20 }}
                    animate={
                      expand
                        ? {
                            opacity: 1,
                            x: 0,
                            padding: btn.icon ? 0 : 20
                          }
                        : { opacity: 0 }
                    }
                  >
                    {btn.name}
                  </motion.div>
                ) : null}
              </motion.div>
            );
          })} */}
        </div>

        {expand && props.footer ? (
          <motion.div
            style={{
              bottom: 0,
              position: "absolute",
              width: "100%",
              paddingTop: 10,
              paddingBottom: 10,
              textAlign: "center",
            }}
            initial={{ opacity: 0, width: 0 }}
            animate={
              expand ? { opacity: 1, width: "100%" } : { opacity: 0, width: 0 }
            }
          >
            {props.footer}
          </motion.div>
        ) : null}
      </motion.div>
      <motion.div
        initial={{ ...tabPanelStyle }}
        animate={expand ? { width: 300 } : { width: 0 }}
      >
        {expand && props.content ? <div>tab content</div> : null}
      </motion.div>
    </div>
  )
}
