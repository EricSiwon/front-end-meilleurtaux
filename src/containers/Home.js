import React, { useState, useEffect } from "react";
import "../../src/App.css";

import Cookies from "js-cookie";

import Header from "../components/Header";
import Items from "../components/Items";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import CodePost from "../containers/CodePost";
import Amount from "../containers/Amount";
import GetEmail from "../containers/GetEmail";
import SendEmail from "../containers/SendEmail";

export default function Home({ Data }) {
  console.log("Home->", Data);

  const [stepScreen, setStepScreen] = useState(0);
  const [previous, setPrevious] = useState(false);
  const [progress, setProgress] = useState(0);
  const [nextStep, setNextStep] = useState(false);

  useEffect(() => {
    const fetchcookies = async () => {
      console.log("Home->GetCookies->", Cookies.get("stepscreen"));
      let ValueCookies = Cookies.get("stepscreen");
      if (ValueCookies) {
        setStepScreen(JSON.parse(ValueCookies));
      }
    };
    fetchcookies();
  }, []);

  console.log("Home->screen", Data[stepScreen].screen, stepScreen, Data.length);

  //Data[stepScreen].screen === "amount" ? ( <Amount/> ) :
  //Data[stepScreen].screen === "getemail" ? ( <GetEmail/> ):
  //Data[stepScreen].screen === "sendemail" ? ( <SendEmail/>):

  return (
    <>
      {Data[stepScreen].screen === "codepost" ? (
        <CodePost
          Data={Data}
          stepScreen={stepScreen}
          setStepScreen={setStepScreen}
        />
      ) : Data[stepScreen].screen === "amount" ? (
        <Amount
          Data={Data}
          stepScreen={stepScreen}
          setStepScreen={setStepScreen}
        />
      ) : Data[stepScreen].screen === "getemail" ? (
        <GetEmail
          Data={Data}
          stepScreen={stepScreen}
          setStepScreen={setStepScreen}
        />
      ) : Data[stepScreen].screen === "sendemail" ? (
        <SendEmail
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
