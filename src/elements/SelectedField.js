// import React from "react";
// import { Controller, useFormContext } from "react-hook-form";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";

// const MuiSelect = (props) => {
//   const { name, options, required, error } = props;
//   let isError = false;
//   let errorMessage = "";
//   if (error && error.hasOwnProperty(name)) {
//     isError = true;
//     errorMessage = error[name].message;
//   }

//   return (
//     <FormControl fullWidth={true} error={isError}>
//       {label} {required ? <span className="req-label">*</span> : null}
//       <Select id={name} {...props}>
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//         {options.map((item) => (
//           <MenuItem key={item.id} value={item.id}>
//             {item.label}
//           </MenuItem>
//         ))}
//       </Select>
//       <FormHelperText>{errorMessage}</FormHelperText>
//     </FormControl>
//   );
// };

// export const SelectField = (props) => {
//   const { control } = useFormContext();
//   return (
//     <React.Fragment>
//       <Controller
//         control={control}
//         render={(field) => <MuiSelect {...props} {...field} />}
//         {...props}
//       />
//     </React.Fragment>
//   );
// };
