import React from "react";
import "../../src/App.css";
import Item from "./Item";

export default function Items({
  Data,
  stepScreen,
  setStepScreen,
  setCookies,
  setPrevious,
  setPropertyPurchase
}) {
  console.log("Items->", Data);
  return (
    <div className="wrapper">
      <h2>{Data[stepScreen].text}</h2>
      <div className="items">
        {Data[stepScreen].questions.map((item, index) => {
          console.log("Items->item-->", item);
          return (
            <Item
              Data={Data}
              key={index}
              questionIdx={index}
              name={item.text}
              stepScreen={stepScreen}
              setStepScreen={setStepScreen}
              setCookies={setCookies}
              setPrevious={setPrevious}
              setPropertyPurchase={setPropertyPurchase}
            />
          );
        })}
      </div>
    </div>
  );
}
