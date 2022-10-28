// import React from "react";
// import { Controller, useFormContext } from "react-hook-form";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

// export const StyledRadioBox = (props) => {
//   const { control } = useFormContext();
//   const { name, defaultValue, rules, shouldUnregister } = props;

//   return (
//     <React.Fragment>
//       <Controller
//         render={({ field }) => (
//           <FormControlLabel
//             control={<Checkbox />}
//             {...props}
//             {...field}
//             checked={field.value}
//           />
//         )}
//         name={name}
//         rules={rules}
//         control={control}
//         defaultValue={defaultValue}
//         shouldUnregister={shouldUnregister}
//       />
//     </React.Fragment>
//   );
// };
