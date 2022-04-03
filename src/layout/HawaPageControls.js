import { Button, Container, Stack } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { HawaPopMenu } from "../elements/HawaPopMenu";
import MenuIcon from "@mui/icons-material/Menu";

export const HawaPageControls = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  return (
    <Container
      variant="page-controls"
      {...props}
      //   maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <Button variant="layout" onClick={props.backAction}>
        {props.backText}
      </Button>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {props.actionButtons.map((d) => {
          return <Button variant="layout">{d.label}</Button>;
        })}
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Button variant="layout" onClick={handleOpenUserMenu}>
          <MenuIcon />
        </Button>
        <HawaPopMenu
          handleClose={(e) => setAnchorElUser(null)}
          anchor={anchorElUser}
          menuItems={props.actionButtons}
        />
      </Stack>
    </Container>
  );
};

HawaPageControls.propTypes = {
  backText: PropTypes.string,
  backAction: PropTypes.func,
  actionButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func
    })
  )
};
