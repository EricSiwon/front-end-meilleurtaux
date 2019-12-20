import React, { useState } from "react";
import "../../src/App.css";

import Cookies from "js-cookie";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default function Footer({
  Data,
  stepScreen,
  setStepScreen,
  displayNext
}) {
  console.log(
    "Footer->stepScreen",
    stepScreen,
    Data[stepScreen].isChecked,
    displayNext
  );
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
        <Progress
          percent={(stepScreen / Data.length) * 100}
          status="default"
          theme={{
            default: {
              color: "#F89D23"
            }
          }}
        />
      </div>

      {/* <div>
        Barre avancement:{stepScreen}/{Data.length}:
        {stepScreen > 0 ? (stepScreen / Data.length) * 100 : stepScreen}%
      </div> */}

      {/* // display next button if 
      1=step of screen is checked to true
      2=displaynext = true (cheked by input information (zipcode,amount,email))
      
       (stepScreen > 3 && displayNext === true 
        Data[stepScreen].isChecked || 
      */}

      {Data[stepScreen].isChecked === true && displayNext === true ? (
        <div
          className="nextButton"
          onClick={() => {
            setStepScreen(stepScreen + 1);
            if (stepScreen > 3) {
              const value = JSON.stringify(Data);
              Cookies.set("meilleurtaux", value, { expires: 1, path: "/" });
              Cookies.set("stepscreen", stepScreen, {
                expires: 1,
                path: "/"
              });
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
