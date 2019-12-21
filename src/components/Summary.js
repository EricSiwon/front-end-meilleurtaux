import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../src/App.css";

import axios from "axios";
import Cookies from "js-cookie";
import { Person, Update } from "@material-ui/icons";

import Devis from "../components/Devis";

export default function Summary({ setUser, user, setIsModalDisplayed }) {
  const [isLoading, setIsLoading] = useState(true);
  const [devisList, setDevisList] = useState();
  const history = useHistory();

  const fetchDevis = async () => {
    let Url = "https://esi-meilleurtaux.herokuapp.com/devis";
    // let Url = "http://localhost:4000/devis";
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
  }, [user]);

  return (
    <>
      <div className="pull-right">
        <h2>liste des demandes</h2>
        <div className="auth-container">
          {user.token ? (
            <>
              <Person fontSize="large" />
              <span
                onClick={() => {
                  setUser({});
                  Cookies.remove("token");
                  setIsModalDisplayed(true);
                  history.push("/admin/LeReacteur");
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
        <div></div>
      </div>
      {isLoading === true ? (
        <div>Chargement en cours ...</div>
      ) : (
        <>
          <div className="container1">
            <div className="row0">
              <div className="td1">Lieu</div>
              <div className="td2">Mail</div>
              <div className="td3">Type de bien</div>
              <div className="td4">Etat du bien</div>
              <div className="td5">Total Opération</div>
            </div>
            <span className="td6"></span>
            <div
              className="td7"
              onClick={() => {
                fetchDevis();
              }}
            >
              <Update />
            </div>
          </div>
          {devisList.map((item, index) => {
            console.log("Summary-->map", item);
            return <Devis key={index} item={item} fetchDevis={fetchDevis} />;
          })}
        </>
      )}
    </>
  );
}
