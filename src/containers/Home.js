import React, { useState, useEffect } from "react";
import "../../src/App.css";

import Cookies from "js-cookie";

import CodePost from "../containers/CodePost";
import Amount from "../containers/Amount";
import GetEmail from "../containers/GetEmail";
import SendEmail from "../containers/SendEmail";

import Header from "../components/Header";
import Items from "../components/Items";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

export default function Home({ Data }) {
  // console.log("Home->", Data);

  const [stepScreen, setStepScreen] = useState(0);
  const [propertyPurchase, setPropertyPurchase] = useState(0);

  /* Coookies :
     - the Stepscreen keep the step of screen
       this cookie are used for rework at the last step of 
     - the PropertyPurchase is save for calculation tax
  */

  useEffect(() => {
    const fetchcookies = async () => {
      //Loading Cookies StepScreen recorded
      let LoadCookies1 = Cookies.get("stepscreen");
      if (LoadCookies1) {
        setStepScreen(Number(LoadCookies1));
      }

      //Loading Cookies propertyPurchase recorded
      let LoadCookies2 = Cookies.get("PropertyPurchase");
      if (LoadCookies2) {
        setPropertyPurchase(LoadCookies2);
      }
    };

    fetchcookies();
  }, []);

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
          propertyPurchase={propertyPurchase}
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

          <Items
            Data={Data}
            stepScreen={stepScreen}
            setStepScreen={setStepScreen}
            setPropertyPurchase={setPropertyPurchase}
          />

          <Footer
            Data={Data}
            stepScreen={stepScreen}
            setStepScreen={setStepScreen}
            displayNext={true}
          />
          <Mentions />
        </div>
      )}
    </>
  );
}
