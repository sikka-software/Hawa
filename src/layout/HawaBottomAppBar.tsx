import React from "react"

type BottomAppBarTypes = {
  sx: any
  color: any
  appBarContent: any
}
export const HawaBottomAppBar: React.FunctionComponent<BottomAppBarTypes> = (
  props
) => {
  return (
    <div className="fixed bottom-0 top-auto left-0 m-0 w-full max-w-full  p-1">
      <div
        //   elevation={3}
        // style={{
        //   width: "100%",
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-evenly",
        //   borderRadius: 10,
        //   alignContent: "center",
        //   padding: 10,
        // }}
        className="flex w-full flex-row items-center justify-evenly rounded bg-gray-200"
        //   variant="outlined"
      >
        {props.appBarContent.map((singleContent: any) => (
          <div
            className="m-1 flex h-full w-full flex-col items-center justify-center rounded p-2 transition-all hover:cursor-pointer hover:bg-buttonPrimary-700 hover:text-white"
            onClick={singleContent.action}
          >
            <div
            //   sx={{
            //     ml: 1,
            //     "&.MuiButtonBase-root:hover": {
            //       color: "blue",
            //       bgcolor: "transparent",
            //     },
            //   }}
            >
              {singleContent.icon}
            </div>
            <div
              // sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              className="mt-2 text-sm"
            >
              {singleContent.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
