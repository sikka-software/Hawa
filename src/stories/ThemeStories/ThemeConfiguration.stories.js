// import React, { useEffect } from "react";
// import { UpdateHawaTheme } from "../../theme";

// export default {
//   title: "Theme/Theme Configuration",
//   component: [ThemeConfiguration]
// };

// export const ThemeConfiguration = (args, { ...rest }) => {
//   useEffect(() => {
//     UpdateHawaTheme(
//       rest.theme,
//       args.borderRadius,
//       args.primaryActionColor,
//       args.primaryLayoutColor,
//       args.primaryActionTextColor,
//       args.fontFamily
//     );
//   }, [args]);

//   return (
//     <div
//       style={{
//         width: "100%",
//         padding: 10,
//         borderRadius: args.borderRadius,
//         backgroundColor: args.primaryActionColor,
//         color: args.primaryActionTextColor,
//         fontFamily: args.mainFont
//       }}
//     >
//       <p>Here goes text</p>
//     </div>
//   );
// };

// ThemeConfiguration.args = {
//   borderRadius: 10,
//   primaryActionColor: "#3b28cc",
//   primaryLayoutColor : "#ADD7F6",
//   primaryActionTextColor: "#ffffff",
//   fontFamily: "Roboto"
// };
