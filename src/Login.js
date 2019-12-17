import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    // requête axios
    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/api/user/log_in",
        {
          email: email,
          password: password
        }
      );

      if (response.data.token) {
        // si je reçois un token
        Cookies.set("token", response.data.token); // crée un cookie avec le token du user
        // rediriger vers une page => useHistory
        history.push("/site");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="input">
      <input onChange={handleChangeEmail} placeholder="email" />
      <input
        type="password"
        onChange={event => {
          setPassword(event.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Envoyer</button>
    </div>
  );
}
