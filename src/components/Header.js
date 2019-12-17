import React from "react";
import logo from "../images/logo.jpg";
import "../../src/App.css";

export default function Header() {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <img src={logo} alt="Meilleurs Taux.com"></img>
          <div className="header-subTitle">
            Crédit immobilier : 5 mn pour obtenir le meilleur taux
          </div>
        </div>
      </div>
    </>
  );
}
