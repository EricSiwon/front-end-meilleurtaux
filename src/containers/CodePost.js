import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Mentions from "../components/Mentions";

import "../../src/App.css";

export default function CodePost({ Data, stepScreen, setStepScreen }) {
  console.log("CodePost->", stepScreen);

  const [isLoading, setIsLoading] = useState(true);
  const [codePost, setCodePost] = useState();
  const [zipCode, setZipCode] = useState();

  const fetchData = async value => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + value
    );
    console.log("CodePost-->Data:", response.data.cities);
    setCodePost(response.data.cities);
    setIsLoading(false);
  };

  // Cet effet se déclenchera uniquement à la creation du composant (car deuxieme argument est un tableau vide)
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
      {isLoading === true ? (
        <h2>Chargement en cours ...</h2>
      ) : (
        <ul>
          {codePost.map((value, index) => {
            return (
              <li key={index}>
                {value.code} {value.city}
              </li>
            );
          })}
        </ul>
      )}
      <div className="wrapper">
        <h2>{Data[stepScreen].text}</h2>
        <div>
          {/* ######### Select country ######### */}

          <div className="Country">
            <label htmlFor="country">{Data[stepScreen].input1.text}</label>
            <div className="selectCountry">
              <select name="countrySelected" id="country">
                <option value="france">FRANCE</option>
              </select>
            </div>
          </div>

          {/* ######### Select zipcode ######### */}

          <div className="CodePost">
            <label htmlFor="findCodePost">{Data[stepScreen].input2.text}</label>
            <input
              id="findCodePost"
              className="inputCodePost"
              placeholder="Entrez un code postal ou une ville"
              autoComplete="off"
              size="50"
              value={zipCode}
              onChange={event => {
                console.log(event.target.value);
                event.target.value.length >= 3 &&
                  setZipCode(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="infoCodePost">
          <div>{Data[stepScreen].info1}</div>
          <div>{Data[stepScreen].info2}</div>
        </div>
      </div>
      <div>
        <ul>
          <li data-vicopo="#ville">
            <strong data-vicopo-code-postal></strong>
            <span data-vicopo-ville></span>
          </li>
        </ul>
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
