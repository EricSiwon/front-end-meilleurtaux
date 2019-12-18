import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import "../../src/App.css";

export default function SendEmail({ Data, stepScreen, setStepScreen }) {
  console.log("CodePost->");
  return (
    <>
      <Header />
      <div>SendEmail</div>
      <Footer
        Data={Data}
        stepScreen={stepScreen}
        setStepScreen={setStepScreen}
      />
      <Mentions />
    </>
  );
}
