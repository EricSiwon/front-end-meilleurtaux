import React, { useState, useEffect } from "react";
import "../../src/App.css";

import axios from "axios";
import Cookies from "js-cookie";
import { Person } from "@material-ui/icons";

import Devis from "../components/Devis";

export default function Summary({ setUser, user, setIsModalDisplayed }) {
  console.log("Summary->");

  const [isLoading, setIsLoading] = useState(true);
  const [devisList, setDevisList] = useState();

  const fetchDevis = async () => {
    let Url = "http://localhost:4000/devis";
    try {
      const response = await axios.get(Url);
      setDevisList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchDevis();
  }, []);

  return (
    <>
      <div className="pull-right">
        <div className="auth-container">
          {user.token ? (
            <>
              <Person fontSize="large" />
              <span
                onClick={() => {
                  setUser({});
                  Cookies.remove("token");
                }}
              >
                Se déconnecter
              </span>
            </>
          ) : (
            <>
              <Person fontSize="large" />
              <span
                onClick={() => {
                  setIsModalDisplayed(true);
                }}
              >
                Se connecter
              </span>
            </>
          )}
        </div>
      </div>
      {isLoading === true ? (
        <div>Chargement en cours ...</div>
      ) : (
        <>
          <div>Summary</div>
          <div className="container1">
            <div className="row0">
              <div className="td1">Lieu</div>
              <div className="td2">Mail</div>
              <div className="td3">Type de bien</div>
              <div className="td4">Etat du bien</div>
              <div className="td5">Total Opération</div>
            </div>
            <div className="td7">___</div>
          </div>
          {devisList.map((item, index) => {
            console.log("Summary-->map", item);
            return <Devis key={index} item={item} fetchDevis={fetchDevis}/>;
          })}
        </>
      )}
    </>
  );
}
