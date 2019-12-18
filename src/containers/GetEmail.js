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

  return (
    <>
      <Header />
      <div>
        idx {stepScreen} - screen {Data[stepScreen].screen} -
        {!Data[stepScreen].isChecked ? "false" : "true"}
      </div>
      <div className="wrapper">
        <h2>{Data[stepScreen].text}</h2>
        <div>
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
            className="inputEmail"
            type="email"
            autoComplete="off"
            size="50"
            ref={React.createRef()}
            value={email}
            onChange={event => {
              console.log("GetEmail->input1->", event.target.value);
              setEmail(event.target.value);
            }}
          ></input>
          <span>€</span>
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
