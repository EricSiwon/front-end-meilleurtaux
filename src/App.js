import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cookies from "js-cookie";

import Home from "./containers/Home";
import Admin from "./containers/Admin";
import "./App.css";

let Data = require("./assets/DATA");

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchQuestions = async () => {
      //Loading Questions
      let Url = "https://localhost:4000/api/questions";
      try {
        // const response = await axios.get(Url);
        // setQuestions(response.data.questions);

        //record Question Screen in useState
        setQuestions(Data);

        //At startup ValueCookies === undefined
        let ValueCookies = Cookies.get("meilleurtaux");
        console.log("App->GetCookies->1", ValueCookies);

        if (ValueCookies !== undefined) {
          let DataCookies = JSON.parse(ValueCookies);
          console.log("App->GetCookies->2", DataCookies);
          setQuestions(DataCookies);
          Data = DataCookies;
        } else {
          console.log("App->setCookies-->with Data", Data);
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

  console.log("App-->question not loaded at startup .....", questions);

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
