import React from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import PropTypes from "prop-types";

export const HawaAccordian = (props) => {
  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.content} </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
HawaAccordian.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};
