import React from "react";
import logo from "../images/logo.jpg";
import { useParams } from "react-router-dom";

const Admin = props => {
  const { user } = useParams();
  return (
    <>
      <img src={logo} alt="Meilleurs Taux.com"></img>
      <div>Admin : {user} </div>
    </>
  );
};
export default Admin;
