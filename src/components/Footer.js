import React, { useState } from "react";
import "../../src/App.css";

import Cookies from "js-cookie";

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

      {Data[stepScreen].isChecked || stepScreen > 3 ? (
        <div
          className="nextButton"
          onClick={() => {
            setStepScreen(stepScreen + 1);
            if (stepScreen > 3) {
              Data[stepScreen].isChecked = true;
              const value = JSON.stringify(Data);
              Cookies.set("meilleurtaux", value, { expires: 1, path: "/" });
              Cookies.set("stepscreen", stepScreen, { expires: 1, path: "/" });
            }
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
