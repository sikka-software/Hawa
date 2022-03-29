import React from "react";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";

export const HawaItemCard = (props) => {
  let isArabic = props.lang === "ar";
  const handleParentClick = (e) => {
    e.stopPropagation();
    props.onCardClick();
  };
  return (
    <Container
      onClick={handleParentClick}
      maxWidth="xs"
      variant="card-container"
      dataValue="parent"
      //   variant={props.selectedPlan ? "selected-plan-card" : "plan-card"}
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      {props.header && (
        <Container style={{ zIndex: 20 }} variant="card-header">
          {props.headerActions && (
            <div
              style={{
                margin: 0,
                marginRight: -20,
                marginLeft: -20,
                marginBottom: -20,
                // backgroundColor: "red",
                display: "flex",
                paddingTop: 5,
                paddingLeft: 5,
                paddingRight: 5,
                justifyContent: "flex-end"
              }}
            >
              {props.headerActions}
            </div>
          )}
          {props.header}
        </Container>
      )}
      {props.content && (
        <Container style={{ zIndex: 20 }} variant="card-content">
          {props.content}
        </Container>
      )}

      {props.actions && (
        <Container style={{ zIndex: 20 }} variant="card-actions">
          {props.actions}
        </Container>
      )}
    </Container>
  );
};
HawaItemCard.propTypes = {
  lang: PropTypes.string,
  onCardClick: PropTypes.func,
};
