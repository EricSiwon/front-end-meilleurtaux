import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import "../../src/App.css";

export default function CodePost({ Data, stepScreen, setStepScreen }) {
  console.log("CodePost->stepScreen:", stepScreen);

  const [isLoading, setIsLoading] = useState(true);
  const [codePost, setCodePost] = useState();
  const [zipCode, setZipCode] = useState(
    Data[stepScreen].input2.isChecked === true
      ? Data[stepScreen].input2.zipcode
      : null
  );
  // Data[stepScreen].input2.isChecked === true ? Data[stepScreen].input2.zipcode:null

  const [zipVisible, setZipVisible] = useState(true);

  const fetchData = async value => {
    try {
      if (value.length >= 2 && value.length <= 5) {
        const response = await axios.get(
          "https://vicopo.selfbuild.fr/cherche/" + value
        );
        console.log("CodePost-->Data:", response.data.cities);
        setCodePost(response.data.cities);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchData(zipCode);
  }, [zipCode]);

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
          {/* ######### Select country ######### */}

          <div className="inputRow row1">
            <label htmlFor="country">{Data[stepScreen].input1.text}</label>
            <div className="selectCountry">
              <select name="countrySelected" id="country">
                <option value="france">FRANCE</option>
              </select>
            </div>
          </div>

          {/* ######### Select zipcode ######### */}

          <div className="inputRow">
            <label htmlFor="findCodePost">{Data[stepScreen].input2.text}</label>
            <input
              id="findCodePost"
              className="inputCodePost"
              placeholder="Entrez un code postal ou une ville"
              autoComplete="off"
              size="50"
              ref={React.createRef()}
              value={zipCode}
              onChange={event => {
                console.log("CodePoste->input->", event.target.value);
                setZipCode(event.target.value);
              }}
            ></input>
          </div>
          {/* ######### display zipcode ######### */}
          <div className="relativePosition">
            {console.log("CodePoste->zipCodeList", codePost)}
            {isLoading === false && codePost.length && zipVisible ? (
              <ul className="zipCodeList">
                {codePost.map((value, index) => {
                  return (
                    <li
                      className="zipCodeSelected"
                      key={index}
                      onClick={() => {
                        setZipVisible(false);
                        setZipCode(value.city + " (" + value.code + ")");
                        setStepScreen(stepScreen + 1);
                        // Set checked question to true
                        Data[stepScreen].input1.isChecked = true;
                        Data[stepScreen].input2.isChecked = true;
                        Data[stepScreen].input2.zipcode =
                          value.city + " (" + value.code + ")";
                        Data[stepScreen].isChecked = true;
                        Cookies.set("meilleurtaux", Data, {
                          expires: 1,
                          path: "/"
                        });
                        Cookies.set("stepscreen", stepScreen, {
                          expires: 1,
                          path: "/"
                        });
                        console.log(
                          "CodePost->onClick->",
                          value.code,
                          value.city
                        );
                      }}
                    >
                      {value.code} {value.city}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="infoCodePost">
          <div>{Data[stepScreen].info1}</div>
          <div>{Data[stepScreen].info2}</div>
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
