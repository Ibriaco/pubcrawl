import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export const CustomizedSteppers = ({ isMobile, isMiniMobile }) => {
  const steps = [
    "JOY",
    "Birrificio Lambrate",
    "Au Vieux Strasb.",
    "Union Club",
    "Bar Picchio",
  ];

  return (
    <Stepper
      alternativeLabel
      activeStep={""}
      style={{
        padding: isMobile ? "0" : "20px 30px 0 0",
      }}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>
            <p
              style={{
                fontWeight: 600,
                color: "#575757",
                fontSize: isMiniMobile ? "9px" : "12px",
              }}
            >
              {label}
            </p>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
