import React, { useState, useEffect } from "react";
import "../../src/App.css";

import axios from "axios";
import Cookies from "js-cookie";

import Header from "../components/Header";
import Mentions from "../components/Mentions";

export default function SendEmail({ Data, stepScreen }) {
  console.log("SenEmail->Data", Data);

  const [isLoading, setIsLoading] = useState(true);
  const [devis, setDevis] = useState();

  useEffect(() => {
    const fetchDevis = async () => {
      const data = new FormData();
      Data.map((screen, index) => {
        if (index === 0) {
          screen.questions.map((question, index) => {
            if (question.isChecked === true) {
              data.append("TypeTextProperty", screen.text);
              data.append("TypeRepProperty", question.text);
            }
          });
        }
        if (index === 1) {
          screen.questions.map((question, index) => {
            if (question.isChecked === true) {
              data.append("StatusTextProperty", screen.text);
              data.append("StatusRepProperty", question.text);
            }
          });
        }
        if (index === 2) {
          screen.questions.map((question, index) => {
            if (question.isChecked === true) {
              data.append("UsageTextProperty", screen.text);
              data.append("UsageRepProperty", question.text);
            }
          });
        }
        if (index === 3) {
          screen.questions.map((question, index) => {
            if (question.isChecked === true) {
              data.append("SituationTextProperty", screen.text);
              data.append("SituationRepProperty", question.text);
            }
          });
        }
        if (index === 4) {
          if (screen.isChecked === true && screen.input2.isChecked === true) {
            data.append("zipcode", screen.input2.zipcode);
          }
        }
        if (index === 5) {
          if (screen.isChecked === true) {
            //&& screen.input1.isChecked === true
            data.append("amount1", screen.input1.amount);
            data.append("amount2", screen.input2.amount);
            data.append("amount3", screen.input3.amount);
            data.append("amount4", screen.input4.amount);
          }
        }
        if (index === 6) {
          data.append("email", screen.email);
        }
      });

      let Url = "http://localhost:4000/devis/create";
      try {
        const response = await axios.post(Url, data);
        console.log(response.data);
        setDevis(response.data.numdevis);
        setIsLoading(false);
        // console.log(Cookies.remove("meilleurtaux"));
        // console.log(Cookies.remove("stepscreen"));
        // console.log(Cookies.remove("PropertyPurchase"));
      } catch (error) {
        console.log("SenEmail->Error", error);
        if (error.response === undefined) {
          alert(" Network Error \n Unavailable Server");
        } else {
          alert(error.message);
        }
      }
    };
    fetchDevis();
  }, []);

  return (
    <>
      <Header />
      <div>
        idx {stepScreen} - screen {Data[stepScreen].screen} -
        {!Data[stepScreen].isChecked ? "false" : "true"}
      </div>
      <div className="wrapper">
        <h2>{Data[stepScreen].text}</h2>
        {isLoading === true ? (
          <h3>Demande en cours d'envois ...</h3>
        ) : (
          <div className="result">
            <h3>
              {Data[stepScreen].input1.text}
              <span className="resultDossier">{devis}</span>
            </h3>
          </div>
        )}
      </div>
      <Mentions />
    </>
  );
}
