import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import "../../src/App.css";

export default function Amount({ Data, stepScreen, setStepScreen }) {
  console.log("Amount->");
  const [amount1, setAmount1] = useState();
  const [amount2, setAmount2] = useState();
  return (
    <>
      <Header />
      <div>
        idx {stepScreen} - screen {Data[stepScreen].screen} -
        {!Data[stepScreen].isChecked ? "false" : "true"}
      </div>
      <div className="wrapper">
        <h2>{Data[stepScreen].text}</h2>
        <div className="inputRow row1">
          <label htmlFor="amountTo">{Data[stepScreen].input1.text}</label>
          <input
            id="amountTo"
            className="inputAmount"
            type="number"
            autoComplete="off"
            size="50"
            ref={React.createRef()}
            value={amount1}
            onChange={event => {
              console.log("Amount->input1->", event.target.value);
              setAmount1(event.target.value);
            }}
          ></input>
          <span>€</span>
        </div>
        <div className="inputRow">
          <label htmlFor="amountTo">{Data[stepScreen].input2.text}</label>
          <input
            id="amountTo"
            className="inputAmount"
            type="number"
            autoComplete="off"
            size="50"
            ref={React.createRef()}
            value={amount2}
            onChange={event => {
              console.log("Amount->input1->", event.target.value);
              setAmount2(event.target.value);
            }}
          ></input>
          <span>€</span>
        </div>
        <div className="inputRow row1">
          <div className="labelText">{Data[stepScreen].input3.text}</div>
          <div className="inputAmount">
            <div className="cal">1234</div>
          </div>
          <span>€</span>
        </div>
        <div className="inputRow">
          <div className="labelText">{Data[stepScreen].input4.text}</div>
          <div className="inputAmount">
            <div className="cal">1234</div>
          </div>
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
