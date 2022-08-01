import React from "react";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export const NotFound = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography variant="h2" fontWeight={700}>
        404
      </Typography>
      <Typography variant="h5" fontWeight={700}>
        Page Not Found
      </Typography>
      <Container
        style={{
          maxWidth: 300,
          marginTop: 10,
          direction: props.lang === "ar" ? "rtl" : "ltr"
        }}
        maxWidth="xs"
      >
        <Typography textAlign={"center"}>
          If you're lost please contact us help@sikka.io{" "}
        </Typography>
        <Button style={{ marginTop: 5 }} variant="contained">
          Home
        </Button>
      </Container>
    </div>
  );
};
NotFound.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    emailLabel: PropTypes.string
  })
};
