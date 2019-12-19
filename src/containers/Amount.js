import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import "../../src/App.css";

export default function Amount({
  Data,
  stepScreen,
  setStepScreen,
  propertyPurchase
}) {
  console.log("Amount->");
  const [amount1, setAmount1] = useState(
    Data[stepScreen].isChecked === true ? Data[stepScreen].amount1 : null
  );
  const [amount2, setAmount2] = useState(
    Data[stepScreen].isChecked === true ? Data[stepScreen].amount2 : null
  );

  //Data[stepScreen].isChecked === true ? Data[stepScreen].amount1: null

  let tax = 0;
  propertyPurchase === "ancien" && (tax = 7.38);
  propertyPurchase === "neuf" && (tax = 1.8);

  // setTotalAmount()

  let taxAmount = amount1 !== undefined ? (amount1 / 100) * tax : Number(0);
  let buildingAmount = amount2 !== undefined ? amount2 : Number(0);
  let amountTotal =
    amount1 !== undefined
      ? Number(amount1) + Number(taxAmount) + Number(buildingAmount)
      : Number(0);

  Data[stepScreen].amount1 = amount1;
  Data[stepScreen].input1.amount = amount1;
  Data[stepScreen].amount2 = amount2;
  Data[stepScreen].input2.amount = amount2;
  Data[stepScreen].input3.amount = buildingAmount;
  Data[stepScreen].input4.amount = amountTotal;

  return (
    <>
      <Header />
      <div>
        idx {stepScreen} - screen {Data[stepScreen].screen} -
        {!Data[stepScreen].isChecked ? "false" : "true"} {propertyPurchase}
        {tax}
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
              console.log("Amount->input2->", event.target.value);
              setAmount2(event.target.value);
            }}
          ></input>
          <span>€</span>
        </div>
        <div className="inputRow row1">
          <div className="labelText">{Data[stepScreen].input3.text}</div>
          <div className="inputAmount">
            <div className="cal">{taxAmount}</div>
          </div>
          <span>€</span>
        </div>
        <div className="inputRow">
          <div className="labelText">{Data[stepScreen].input4.text}</div>
          <div className="inputAmount">
            <div className="cal">{amountTotal}</div>
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
