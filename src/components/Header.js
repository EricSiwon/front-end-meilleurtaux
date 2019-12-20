import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../../src/App.css";

export default function Header({user}) {
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
