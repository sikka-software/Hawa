import React from "react";
// import { Box } from "../../layout";
// import {
//   HawaTextField,
//   ActionButton,
//   HawaAlert,
//   HawaTypography,
//   HawaLogoButton
// } from "../../ui";
// import PropTypes from "prop-types";
// import { FormProvider, useForm } from "react-hook-form";
// import PersonIcon from "@mui/icons-material/PermIdentityOutlined";
// import InputAdornment from "@mui/material/InputAdornment";
// import EmailIcon from "@mui/icons-material/MailOutline";
// import PasswordIcon from "@mui/icons-material/HttpsOutlined";
// import { Alert, AlertTitle, Box, Card, Container, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
// import { styled } from "@mui/system";

// const StyledBox = styled(Box)(({ theme }) => {
//   console.log("syled box theme is ", theme);
//   return {
//     // backgroundColor: theme.palette.primary.mytheme
//   };
// });
export const SignUpForm = (props) => {
  return (
    <Container
    // sx={{
    //   backgroundColor: "blue",
    //   padding: 2
    // }}
    >
      <Typography>Testing here</Typography>
      <Button variant="contained">test</Button>
    </Container>
  );
};
// export const SignUpForm = (props) => {
//   const methods = useForm();
//   const {
//     formState: { errors },
//     handleSubmit
//   } = methods;

//   return (
//     <Container
//     //  maxWidth={400} noColor noMargin noPadding
//     // sx={{
//     //   backgroundColor: "primary.main"
//     // }}
//     >
//       {/* <StyledBox
//       // noMargin
//       >
//         {/* {props.error && (
//           <Alert>
//             {props.title && <AlertTitle>{props.title}</AlertTitle>}
//             {props.text}
//           </Alert>
//         )} */}
//       {/* {props.error && (
//           <HawaAlert text="This is a sign in alert" severity="error" />
//         )} */}
//       <FormProvider {...methods}>
//         <form onSubmit={handleSubmit(props.handleSignUp)}>
//           <HawaTextField
//             name="fullName"
//             placeholder={props.texts.fullNamePlaceholder}
//             type="text"
//             inputLabel={props.texts.fullNameLabel}
//             startAdornment={
//               <InputAdornment position="start">
//                 <PersonIcon />
//               </InputAdornment>
//             }
//             rules={{
//               required: "Full name rquired"
//             }}
//             helperText={errors.fullName?.message}
//           />

//           <HawaTextField
//             type="text"
//             inputLabel={props.texts.emailLabel}
//             placeholder={props.texts.emailPlaceholder}
//             name="email"
//             startAdornment={
//               <InputAdornment position="start">
//                 <EmailIcon />
//               </InputAdornment>
//             }
//             rules={{
//               required: props.texts.emailRequiredText,
//               pattern: {
//                 value:
//                   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                 message: props.texts.emailInvalidText
//               }
//             }}
//             helperText={errors.email?.message}
//           />
//           <HawaTextField
//             name="password"
//             placeholder={props.texts.passwordPlaceholder}
//             type="password"
//             inputLabel={props.texts.passwordLabel}
//             startAdornment={
//               <InputAdornment position="start">
//                 <PasswordIcon />
//               </InputAdornment>
//             }
//             rules={{
//               required: props.texts.passwordRequiredText,
//               minLength: {
//                 value: 8,
//                 message: props.texts.passwordTooShortText
//               }
//             }}
//             helperText={errors.password?.message}
//           />

//           <ActionButton
//             fullWidth
//             type="submit"
//             text={props.texts.signUpText}
//             last
//           />
//         </form>
//       </FormProvider>

//       <HawaTypography
//         style={{
//           marginTop: 5,
//           // width: "max-content",
//           textAlign: "center",
//           padding: 5
//         }}
//       >
//         Existing user?{" "}
//         <span
//           onClick={props.handleRouteToSignIn}
//           style={{
//             cursor: "pointer",
//             color: "blue",
//             textAlign: "center"
//           }}
//         >
//           {props.texts.signInText}
//         </span>
//       </HawaTypography>
//       {props.viaGoogle && (
//         <HawaLogoButton
//           logo="google"
//           buttonText={props.texts.googleButtonLabel}
//           onClick={props.handleGoogleSignUp}
//         />
//       )}
//       {props.viaGithub && (
//         <HawaLogoButton
//           logo="github"
//           buttonText={props.texts.githubButtonLabel}
//           onClick={props.handleGithubSignUp}
//         />
//       )}
//       {props.viaTwitter && (
//         <HawaLogoButton
//           logo="twitter"
//           buttonText={props.texts.twitterButtonLabel}
//           onClick={props.handleTwitterSignUp}
//         />
//       )}
//     </Container>
//   );
// };

// SignUpForm.propTypes = {
//   theme: PropTypes.oneOf(["secondary", "primary"])
//   // buttonLabel: PropTypes.string,
//   // danger: PropTypes.bool,
//   // disabled: PropTypes.bool,
//   // showText: PropTypes.bool
// };
