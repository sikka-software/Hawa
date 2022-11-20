// import { AppBar, Paper, Box, IconButton, Typography } from "@mui/material";

// export function HawaBottomAppBar({ args }) {
//   return (
//     <AppBar
//       position="fixed"
//       sx={args.sx}
//       style={{
//         bottom: 0,
//         top: "auto",
//         padding: 10,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-evenly"
//       }}
//       color={args.color}
//     >
//       <BottomAppBar appBarContent={args.appBarContent} />
//     </AppBar>
//   );
// }

// export function BottomAppBar(props) {
//   return (
//     <Paper
//       elevation={3}
//       style={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-evenly",
//         borderRadius: 10,
//         alignContent: "center",
//         padding: 10
//       }}
//       variant="outlined"
//     >
//       {props.appBarContent.map(({ label, icon, action }) => (
//         <SubAppBarContent label={label} icon={icon} action={action} />
//       ))}
//     </Paper>
//   );
// }

// function SubAppBarContent(props) {
//   return (
//     <Box
//       display="flex"
//       flexDirection="row"
//       justifyContent="center"
//       alignItems="center"
//       sx={{
//         "&:hover": {
//           cursor: "pointer",
//           color: "blue"
//         }
//       }}
//       onClick={props.action}
//     >
//       <IconButton
//         sx={{
//           ml: 1,
//           "&.MuiButtonBase-root:hover": {
//             color: "blue",
//             bgcolor: "transparent"
//           }
//         }}
//       >
//         {props.icon}
//       </IconButton>
//       <Typography sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
//         {props.label}
//       </Typography>
//     </Box>
//   );
// }
