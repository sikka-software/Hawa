import { MenuItem, Typography } from "@mui/material";

export const HawaPopMenu = () => {
  return (
    <MenuItem key={setting.label} onClick={setting.action}>
      {setting.icon && <setting.icon />}
      <Typography textAlign="center">{setting.label}</Typography>
    </MenuItem>
  );
};
