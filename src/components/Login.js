import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../src/App.css";

import axios from "axios";
import Cookies from "js-cookie";
import PasswordStrengthBar from "react-password-strength-bar";

const Login = ({ setUser, setIsModalDisplayed }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Pour accéder à l'historique de navigation
  const history = useHistory();

  return (
    <div className="loginUser">
      <form
        onSubmit={async event => {
          event.preventDefault();
          try {
            const url = "http://localhost:4000/login";
            const response = await axios.post(url, {
              username: "LeReacteur",
              password: password
            });

            console.log("Login->response->", response.data);
            //   { _id: "5dfb6a3cf0994edf65cb0fd6",
            //   token: "SJEgX7rtjG1w331jnjDm1hgD3hLPkFKUHnk3OlurzmB8VOR4RK11WNJrDmBWPrWp" }

            if (response.data.token) {
              Cookies.set("token", response.data.token);
              setIsModalDisplayed(false);
              setUser(response.data);
              history.push("/admin/LeReacteur");
            } else {
              alert("An error occurred");
            }
          } catch (e) {
            alert("@LeReacteur : Invalid password (;)");
          }
        }}
      >
        <label className="loginUserLabel">Mot de passe</label>
        <input
          className="loginUserPassword"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <PasswordStrengthBar
          password={password}
          shortScoreWord="Mot de passe trop cours"
          scoreWords={[
            "Mot de passe Faible",
            "Mot de passe Acceptable",
            "Mot de passe Bon",
            "Mot de passe Fort",
            "Mot de passe Robuste"
          ]}
        />
        <input
          className="loginUserButton"
          type="submit"
          value={"Se connecter"}
        />
      </form>
    </div>
  );
};

export default Login;
