import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import "../../src/App.css";

export default function GetEmail({ Data, stepScreen, setStepScreen }) {
  console.log("CodePost->");
  return (
    <>
      <Header />
      <div>GetEmail</div>
      <Footer
        Data={Data}
        stepScreen={stepScreen}
        setStepScreen={setStepScreen}
      />
      <Mentions />
    </>
  );
}
