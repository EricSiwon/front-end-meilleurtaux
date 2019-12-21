import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

import logo from "../images/logo.jpg";

export default function Header() {
  return (
    <>
      <div className="wrapper">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="Meilleurs Taux.com"></img>
          </Link>
          <div className="header-subTitle">
            Crédit immobilier : 5 mn pour obtenir le meilleur taux
          </div>
        </div>
      </div>
    </>
  );
}
