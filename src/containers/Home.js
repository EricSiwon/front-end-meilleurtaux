import React, { useState } from "react";

import Header from "../components/Header";
import Items from "../components/Items";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import CodePost from "../containers/CodePost";

import "../../src/App.css";

export default function Home({ Data }) {
  console.log("Home->", Data);

  const [stepScreen, setStepScreen] = useState(0);
  const [previous, setPrevious] = useState(false);
  const [progress, setProgress] = useState(0);
  const [nextStep, setNextStep] = useState(false);

  console.log("Home->screen", Data[stepScreen].screen, stepScreen, Data.length);

  return (
    <>
      {Data[stepScreen].screen === "codepost" ? (
        <CodePost
          Data={Data}
          stepScreen={stepScreen}
          setStepScreen={setStepScreen}
        />
      ) : (
        <div>
          <Header />
          <div>
            idx {stepScreen} - screen {Data[stepScreen].screen} -
            {!Data[stepScreen].isChecked ? "false" : "true"}
          </div>
          <div>
            <Items
              Data={Data}
              stepScreen={stepScreen}
              setStepScreen={setStepScreen}
              setPrevious={setPrevious}
            />
          </div>
          <Footer
            Data={Data}
            stepScreen={stepScreen}
            setStepScreen={setStepScreen}
          />
          <Mentions />
        </div>
      )}
    </>
  );
}
