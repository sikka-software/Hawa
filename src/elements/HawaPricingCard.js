import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/CheckCircleOutlined";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";

export const HawaPricingCard = (props) => {
  let isArabic = props.lang === "ar";
  let cycleTextsArabic = {
    monthly: "شهرياً",
    "3-months": "كل 3 أشهر",
    "6-months": "كل 6 أشهر",
    annually: "سنوياً"
  };
  let cycleTextsEnglish = {
    monthly: "Monthly",
    "3-months": "3 Months",
    "6-months": "6 Months",
    annually: "Annually"
  };
  let currencyMapping = {
    usd: isArabic ? "دولار" : "$",
    sar: isArabic ? "ريال" : "SAR"
  };
  let featuresMapping = isArabic ? props.features_ar : props.features;
  let chipSpacing = isArabic ? { left: 10 } : { right: 10 };
  return (
    <Container
      maxWidth="xs"
      variant={props.selectedPlan ? "selected-plan-card" : "plan-card"}
      style={{ direction: isArabic ? "rtl" : "ltr" }}
    >
      <Container variant="plan-header">
        {props.discount && (
          <Chip
            label={props.discount}
            variant="standard"
            style={{
              maxWidth: "fit-content",
              position: "absolute",
              bottom: 10,
              ...chipSpacing
            }}
            color="success"
          />
        )}
        <Typography variant="h3" fontWeight={500}>
          {isArabic ? props.title_ar : props.title}
        </Typography>
        <Typography variant="caption">
          {isArabic ? props.subtitle_ar : props.subtitle}
        </Typography>
        <br />
        <Typography
          variant="h4"
          fontWeight={500}
          style={{ display: "flex", alignItems: "center" }}
        >
          {props.lang === "ar" ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                {props.price}
                <div style={{ width: 5 }} />
                {/* <Typography>{props.currency?.toUpperCase()}</Typography> */}
                <Typography>
                  {currencyMapping[props.currency?.toLowerCase()]}
                </Typography>
              </div>
              <Typography style={{ fontSize: 14, margin: 5 }}>
                {isArabic
                  ? cycleTextsArabic[props.cycleText]
                  : cycleTextsEnglish[props.cycleText]}
              </Typography>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography>
                  {currencyMapping[props.currency?.toLowerCase()]}
                </Typography>
                {/* <Typography>{props.currency?.toUpperCase()}</Typography> */}
                <div style={{ width: 5 }} />
                {props.price}
              </div>
              <Typography style={{ fontSize: 14, margin: 5 }}>
                {props.lang === "ar"
                  ? cycleTextsArabic[props.cycleText]
                  : cycleTextsEnglish[props.cycleText]}
              </Typography>
            </div>
          )}
        </Typography>
      </Container>

      <div
        style={{ padding: 20, color: props.selectedPlan ? "white" : "black" }}
      >
        {featuresMapping?.map((feature) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 10,
                width: "100%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  width: "10%"
                }}
              >
                <CheckIcon fontSize="small" />
              </div>
              <div style={{ width: 10 }} />
              <Typography variant="subtitle2">{feature}</Typography>
            </div>
          );
        })}
      </div>
      <Button
        onClick={props.selectPlan}
        variant={props.selectedPlan ? "outlined" : "contained"}
        style={{ margin: 20 }}
      >
        {props.buttonText}
      </Button>
    </Container>
  );
};

HawaPricingCard.propTypes = {
  lang: PropTypes.string,
  buttonText: PropTypes.string,
  selectedPlan: PropTypes.string,
  title: PropTypes.string,
  title_ar: PropTypes.string,
  subtitle: PropTypes.string,
  subtitle_ar: PropTypes.string,
  features: PropTypes.array,
  features_ar: PropTypes.array,
  currency: PropTypes.oneOf(["sar", "usd"]),
  cycleText: PropTypes.oneOf(["monthly", "3-months", "6-months", "annually"])
};
