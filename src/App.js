import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Cookies from "js-cookie";

import Home from "./containers/Home";
import Admin from "./containers/Admin";

// The questions and screens are in this file
let Data = require("./assets/DATA");

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        //record Question Screen in useState
        setQuestions(Data);
        //loadind cookies
        let ValueCookies = Cookies.get("meilleurtaux");
        // console.log("App->GetCookies->1", ValueCookies);

        //At startup ValueCookies === undefined
        //if exist cookies then start with us
        if (ValueCookies !== undefined) {
          let DataCookies = JSON.parse(ValueCookies);
          // console.log("App->GetCookies->2", DataCookies);
          setQuestions(DataCookies);
          Data = DataCookies;
          //else load local file
        } else {
          // console.log("App->setCookies-->with Data", Data);
          const value = JSON.stringify(Data);
          Cookies.set("meilleurtaux", value, { expires: 1, path: "/" });
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoading === true ? (
            <div>En Chargement ... </div>
          ) : (
            <Home Data={questions} />
          )}
        </Route>
        <Route path="/admin/:username">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
