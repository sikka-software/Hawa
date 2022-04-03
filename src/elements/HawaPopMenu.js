import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

export const HawaPopMenu = (props) => {
  const theme = useTheme();
  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={props.anchor}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={Boolean(props.anchor)}
      onClose={props.handleClose}
      variant="themed"
      PaperProps={{
        style: {
          boxShadow: "none",
          borderRadius: theme.allBorderRadius,
          border: `1px solid ${theme.primaryActionColor}`
        }
      }}
    >
      {props.menuItems.map((item) => (
        <MenuItem key={item.label} onClick={item.action}>
          {item.icon && <item.icon />}
          {item.icon && <div style={{ width: 10 }} />}
          <Typography textAlign="center">{item.label}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

HawaPopMenu.propTypes = {
  anchor: PropTypes.any,
  handleClose: PropTypes.func,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      label: PropTypes.string,
      action: PropTypes.func
    })
  )
};
