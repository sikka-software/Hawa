import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import React from "react";
import { HawaTextField } from "./HawaTextField";

export const HawaSearchBar = (props) => {
  return (
    <HawaTextField
      endAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
      {...props}
    />
  );
};
