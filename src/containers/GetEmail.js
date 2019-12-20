import React, { useState } from "react";
import "../../src/App.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import imgvisuel from "../images/visuel-desktop-email.jpg";

export default function GetEmail({ Data, stepScreen, setStepScreen }) {
  console.log("GetEmail->");

  const [email, setEmail] = useState(
    Data[stepScreen].isChecked === true ? Data[stepScreen].email : null
  );
  const [condition, SetCondition] = useState(false);
  const [isErrorMessageDisplayed, setIsErrorMessageDisplayed] = useState(false);

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
              isErrorMessageDisplayed === true && email === ""
                ? "inputEmail inputEmailRed"
                : "inputEmail"
            }
            type="email"
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
            }}
          ></input>
          {isErrorMessageDisplayed === true && email === "" && (
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
            }}
          ></input>
          <label htmlFor="condition">{Data[stepScreen].check1.text}</label>
        </div>
      </div>

      <Footer
        Data={Data}
        stepScreen={stepScreen}
        setStepScreen={setStepScreen}
      />
      <Mentions />
    </>
  );
}
