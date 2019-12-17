import React, { useState } from "react";

import "../../src/App.css";

export default function Footer({ Data, stepScreen, setStepScreen }) {
  console.log("Footer->stepScreen", stepScreen);
  return (
    <div className="follower wrapper">
      {stepScreen > 0 ? (
        <div
          className="previous"
          onClick={() => {
            setStepScreen(stepScreen - 1);
            console.log(
              "Footer->clicked->",
              stepScreen,
              "-->from->",
              stepScreen - 1
            );
          }}
        >
          précédent
        </div>
      ) : (
        <div></div>
      )}

      <div className="progressBarre">
        Barre avancement:{stepScreen}/{Data.length}:
        {stepScreen > 0 ? (stepScreen / Data.length) * 100 : stepScreen}%
      </div>

      {Data[stepScreen].isChecked ? (
        <div
          className="nextButton"
          onClick={() => {
            setStepScreen(stepScreen + 1);
            console.log(
              "Footer->clicked->",
              stepScreen,
              "-->to->",
              stepScreen + 1
            );
          }}
        >
          Suivant
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
