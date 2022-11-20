// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open, direction }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     marginLeft: direction === "rtl" ? 0 : `-${drawerWidth}px`,
//     marginRight: direction === "rtl" ? `-${drawerWidth}px` : 0,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen
//       }),
//       marginLeft: direction === "ltr" && 0,
//       marginRight: direction === "rtl" && 0
//     })
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open"
// })(({ theme, open, direction }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: direction === "rtl" ? 0 : `${drawerWidth}px`,
//     marginRight: direction === "rtl" ? `${drawerWidth}px` : 0,
//     // marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   })
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end"
// }));

// export const HawaAppLayout = (props) => {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const isArabic = props.lang === "ar";
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         open={open}
//         direction={isArabic ? "rtl" : "ltr"}
//         style={{
//           alignItems: isArabic ? "flex-end" : "flex-start",
//           justifyContent: "center"
//         }}
//       >
//         <Toolbar>
//           {isArabic ? (
//             <>
//               <Typography variant="h6" noWrap component="div">
//                 Persistent drawer
//               </Typography>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={handleDrawerOpen}
//                 edge={isArabic ? "end" : "start"}
//                 sx={{ mr: 2, ...(open && { display: "none" }) }}
//               >
//                 <MenuIcon />
//               </IconButton>
//             </>
//           ) : (
//             <>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={handleDrawerOpen}
//                 edge={isArabic ? "end" : "start"}
//                 sx={{
//                   marginRight: isArabic ? 0 : 2,
//                   marginLeft: isArabic ? 2 : 0,
//                   ...(open && { display: "none" })
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6" noWrap component="div">
//                 Persistent drawer
//               </Typography>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       {!isArabic ? (
//         <>
//           <Drawer
//             sx={{
//               width: drawerWidth,
//               flexShrink: 0,
//               "& .MuiDrawer-paper": {
//                 width: drawerWidth,
//                 boxSizing: "border-box"
//               }
//             }}
//             variant="persistent"
//             anchor={isArabic ? "right" : "left"}
//             open={open}
//           >
//             <DrawerHeader>
//               <IconButton onClick={handleDrawerClose}>
//                 {theme.direction === "ltr" ? (
//                   <ChevronLeftIcon />
//                 ) : (
//                   <ChevronRightIcon />
//                 )}
//               </IconButton>
//             </DrawerHeader>
//             <Divider />
//             <List>
//               {["Inbox", "Starred", "Send email", "Drafts"].map(
//                 (text, index) => (
//                   <ListItem button key={text}>
//                     <ListItemIcon>
//                       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                   </ListItem>
//                 )
//               )}
//             </List>
//             <Divider />
//             <List>
//               {["All mail", "Trash", "Spam"].map((text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>
//           </Drawer>
//           <Main open={open} direction={isArabic ? "rtl" : "ltr"}>
//             <DrawerHeader />
//             {props.children}
//           </Main>
//         </>
//       ) : (
//         <>
//           <Main open={open} direction={isArabic ? "rtl" : "ltr"}>
//             <DrawerHeader />
//             {props.children}
//           </Main>
//           <Drawer
//             sx={{
//               width: drawerWidth,
//               flexShrink: 0,
//               "& .MuiDrawer-paper": {
//                 width: drawerWidth,
//                 boxSizing: "border-box"
//               }
//             }}
//             variant="persistent"
//             anchor={isArabic ? "right" : "left"}
//             open={open}
//           >
//             <DrawerHeader>
//               <IconButton onClick={handleDrawerClose}>
//                 {theme.direction === "ltr" ? (
//                   <ChevronLeftIcon />
//                 ) : (
//                   <ChevronRightIcon />
//                 )}
//               </IconButton>
//             </DrawerHeader>
//             <Divider />
//             <List>
//               {["Inbox", "Starred", "Send email", "Drafts"].map(
//                 (text, index) => (
//                   <ListItem button key={text}>
//                     <ListItemIcon>
//                       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                   </ListItem>
//                 )
//               )}
//             </List>
//             <Divider />
//             <List>
//               {["All mail", "Trash", "Spam"].map((text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>
//           </Drawer>
//         </>
//       )}
//     </Box>
//   );
// };
