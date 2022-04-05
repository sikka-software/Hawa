import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { HawaPopMenu } from "../elements/HawaPopMenu";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme, direction }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: direction === "rtl" ? "flex-start" : "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open, direction }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),

  ...(open && {
    marginLeft: direction === "rtl" ? 0 : drawerWidth,
    marginRight: direction === "rtl" ? drawerWidth : 0,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export function HawaAppLayout(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const isArabic = props.lang === "ar";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  useEffect(() => {
    setOpen(!open);
  }, []);
  return (
    <Box sx={{ display: "flex", direction: isArabic ? "rtl" : "ltr" }}>
      <AppBar
        variant="appbar"
        position="fixed"
        open={open}
        direction={isArabic ? "rtl" : "ltr"}
      >
        <Toolbar
          variant="appbar"
          sx={{ paddingLeft: { xs: 3 }, paddingRight: { xs: 3 } }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            s
            sx={{
              marginRight: 5,
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: 0
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: open ? "none" : "flex",
                  sm: "flex"
                }
              }}
            >
              {props.pageTitle}
            </Typography>

            <Box style={{ position: "absolute", right: 10 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  // sx={{ p: 0 }}
                  size="small"
                >
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    fontSize="inherit"
                  />
                </IconButton>
              </Tooltip>
              <HawaPopMenu
                menuItems={props.accountMenu}
                anchor={anchorElUser}
                handleClose={handleCloseUserMenu}
              />
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        // anchor="left"

        variant="permanent"
        open={open}
        // sx={{ display: { xs: open ? "flex" : "none", md: "flex" } }}
      >
        <DrawerHeader direction={isArabic ? "rtl" : "ltr"}>
          {props.logo}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List
        // sx={{
        //   display: {
        //     xs: open ? "flex" : "none",
        //     sm: open ? "flex" : "none",
        //     md: "flex"
        //   },
        //   flexDirection: "column",
        //   padding: 0
        // }}
        >
          {props.pages.map((p, jk) => {
            return (
              <Tooltip
                title={p.text}
                key={jk}
                placement={"right"}
                arrow={true}
                PopperProps={{ style: { opacity: open ? 0 : 1 } }}
              >
                <ListItemButton
                  variant={
                    props.pageName?.toLowerCase() === p.slug?.toLowerCase() &&
                    "clicked"
                  }
                  onClick={p.action}
                  key={p.text}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5
                  }}
                >
                  <p.icon />
                  <div style={{ width: 20 }} />
                  <ListItemText
                    primary={p.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            );
          })}
        </List>
      </Drawer>
      <Box
        onClick={open && (() => setOpen(false))}
        sx={{
          flexGrow: 1,
          p: 3,
          position: "absolute",
          left: {
            xs: open ? 4 : 4,
            sm: open ? drawerWidth + 4 : 70
          },
          right: { xs: 4 }
        }}
      >
        <DrawerHeader />
        <div style={{ marginTop: -10 }}>{props.children}</div>
      </Box>
    </Box>
  );
}
