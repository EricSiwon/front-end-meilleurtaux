import React, { useState } from "react";
import "../../src/App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import imgvisuel from "../images/visuel-desktop-email.jpg";

export default function GetEmail({ Data, stepScreen, setStepScreen }) {
  console.log("GetEmail->");

  const [email, setEmail] = useState(
    Data[stepScreen].isChecked === true ? Data[stepScreen].email : undefined
  );
  const [condition, SetCondition] = useState(false);
  const [isErrorMessageDisplayed, setIsErrorMessageDisplayed] = useState(false);
  const [displayNext, SetDisplayNext] = useState(
    Data[stepScreen].isChecked === true ? true : false
  );

  console.log("GetEmail->email:", email);

  Data[stepScreen].email = email;
  Data[stepScreen].check1.isChecked = condition;

  return (
    <>
      <Header />
      <div>
        idx {stepScreen} - screen {Data[stepScreen].screen} -
        {!Data[stepScreen].isChecked ? "false" : "true"}
      </div>
      <div className="wrapper">
        <h2>{Data[stepScreen].text}</h2>
        <div className="textZone">
          <p>
            Un devis vous sera envoyé par mail avec un récapitulatif de votre
            demande.
          </p>
          <img
            className="imgGetEmail"
            src={imgvisuel}
            alt="Image Desktop Email"
          ></img>
        </div>
        <div className="inputRow row1">
          <label htmlFor="emailTo">{Data[stepScreen].input1.text}</label>
          <input
            id="emailTo"
            className={
              isErrorMessageDisplayed === true && email === undefined
                ? "inputEmail inputEmailRed"
                : "inputEmail"
            }
            type="email"
            pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
            required
            autoComplete="off"
            size="50"
            ref={React.createRef()}
            value={email}
            onBlur={() => {
              setIsErrorMessageDisplayed(true);
            }}
            onFocus={() => {
              setIsErrorMessageDisplayed(false);
            }}
            onChange={event => {
              console.log("GetEmail->input1->", event.target.value);
              setEmail(event.target.value);
              Data[stepScreen].input1.isChecked = true;
              if (Data[stepScreen].check1.isChecked === true) {
                Data[stepScreen].isChecked = true;
                SetDisplayNext(true);
              }
            }}
          ></input>
          {isErrorMessageDisplayed === true &&
            (email === undefined || email === "") && (
              <span className="emailError">Merci de saisir votre e-mail</span>
            )}
        </div>

        <div>
          <input
            id="condition"
            className="inputCondition"
            type="checkbox"
            value="condition"
            onClick={() => {
              console.log("GetEmail->condition->", condition);
              SetCondition(!condition);
              Data[stepScreen].check1.isChecked = true;
              if (Data[stepScreen].input1.isChecked === true) {
                Data[stepScreen].isChecked = true;
                SetDisplayNext(true);
              }
            }}
          ></input>
          <label htmlFor="condition">{Data[stepScreen].check1.text}</label>
          {isErrorMessageDisplayed === true && !condition && (
            <span className="conditionError">
              Veuillez accepter les conditions générales
            </span>
          )}
        </div>
      </div>

      <Footer
        Data={Data}
        stepScreen={stepScreen}
        setStepScreen={setStepScreen}
        displayNext={displayNext}
      />
      <Mentions />
    </>
  );
}
