import React from "react";
import "../../src/App.css";

import Cookies from "js-cookie";

export default function Item({
  Data,
  questionIdx,
  stepScreen,
  setStepScreen,
  setPropertyPurchase
}) {
  let questionName = Data[stepScreen].questions[questionIdx].text;
  return (
    <div
      className={
        Data[stepScreen].questions[questionIdx].isChecked
          ? "item itemChecked"
          : "item"
      }
      onClick={() => {
        /* Set all questions to false, 
           if user change response, the new response are recorded, to true
                                    the old responses are set to false
        */

        Data[stepScreen].questions.map((q, i) => {
          Data[stepScreen].questions[i].isChecked = false;
          return "";
        });

        // Set checked question to true
        Data[stepScreen].questions[questionIdx].isChecked = true;
        Data[stepScreen].isChecked = true;

        /* Cookies :
           - meilleurtaux : recorde all questions
           - stepscreen record the last screen validated 
           - PropertyPurchase record the property for calculation tax.
        */
        const value = JSON.stringify(Data);
        Cookies.set("meilleurtaux", value, { expires: 1, path: "/" });
        Cookies.set("stepscreen", stepScreen, { expires: 1, path: "/" });

        // set the property purchase (neuf/ancien) to calculate amount
        if (stepScreen === 1) {
          let value = Data[stepScreen].questions[questionIdx].text;
          setPropertyPurchase(value);
          Cookies.set("PropertyPurchase", value, { expires: 1, path: "/" });
        }

        // set the next screen
        setStepScreen(stepScreen + 1);
      }}
    >
      <div className="itemText">
        <span
          className={
            Data[stepScreen].questions[questionIdx].isChecked
              ? "dot dotChecked"
              : "dot"
          }
        ></span>
        <div>{questionName}</div>
      </div>
    </div>
  );
}
