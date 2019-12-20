import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../src/App.css";

import axios from "axios";
import Cookies from "js-cookie";

import Header from "../components/Header";
import Login from "../components/Login";
import Summary from "../components/Summary";

export default function Admin() {
  const { username } = useParams();
  const token = Cookies.get("token");
  console.log("Admin->token:" + token);

  const [user, setUser] = useState({ token: token });
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  return (
    <>
      <Header />
      <div className="wrapper">
        {/* <div>Admin : {username} </div> */}
        {isModalDisplayed === true && (
          <div className="modal">
            <div
              className="modal-close"
              onClick={() => {
                setIsModalDisplayed(false);
              }}
            >
              x
            </div>
            <div className="modal-content">
              <Login
                setIsModalDisplayed={setIsModalDisplayed}
                setUser={setUser}
              />
            </div>
          </div>
        )}
        <Summary
          username={username}
          setUser={setUser}
          user={user}
          setIsModalDisplayed={setIsModalDisplayed}
        />
      </div>
    </>
  );
}
