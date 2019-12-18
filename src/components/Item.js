import React from "react";
import "../../src/App.css";

import Cookies from "js-cookie";

export default function Item({
  Data,
  questionIdx,
  stepScreen,
  setStepScreen,
  setPrevious
}) {
  console.log("Item-->text-->", Data[stepScreen].questions[questionIdx].text);
  let questionName = Data[stepScreen].questions[questionIdx].text;
  return (
    <div
      className={
        Data[stepScreen].questions[questionIdx].isChecked
          ? "item itemChecked"
          : "item"
      }
      onClick={() => {
        // Set all questions to false
        Data[stepScreen].questions.map((q, i) => {
          console.log("=====>", q, i);
          Data[stepScreen].questions[i].isChecked = false;
        });
        // Set checked question to true
        Data[stepScreen].questions[questionIdx].isChecked = true;
        Data[stepScreen].isChecked = true;
        Cookies.set("meilleurtaux", Data, { expires: 1, path: "/" });
        Cookies.set("stepscreen", stepScreen, { expires: 1, path: "/" });
        setStepScreen(stepScreen + 1);
        // setPrevious(true);
        console.log("clicked", questionName);
      }}
    >
      <div className="itemText">
        <span>*</span>-{questionName}
      </div>
    </div>
  );
}
