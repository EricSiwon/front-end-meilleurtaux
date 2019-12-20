import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

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
            } else {
              alert("An error occurred");
            }
          } catch (e) {
            alert(e.message);
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
