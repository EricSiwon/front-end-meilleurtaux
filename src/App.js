import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cookies from "js-cookie";

import Home from "./containers/Home";
import Admin from "./containers/Admin";
import "./App.css";

let Data = [
  {
    screen: "question",
    text: "type de bien",
    isChecked: false,
    questions: [
      { text: "maison", isChecked: false },
      { text: "appartement", isChecked: false }
    ]
  },
  {
    screen: "question",
    text: "etat du bien",
    isChecked: false,
    questions: [
      { text: "ancien", isChecked: false },
      { text: "neuf", isChecked: false }
    ]
  },
  {
    screen: "question",
    text: "usage du bien",
    isChecked: false,
    questions: [
      { text: "résidence principale", isChecked: false },
      { text: "résidence secondaire", isChecked: false },
      { text: "inversissement locatif", isChecked: false }
    ]
  },
  {
    screen: "question",
    text: "votre situation actuelle",
    isChecked: false,
    questions: [
      { text: "locataire", isChecked: false },
      { text: "propriétaire", isChecked: false },
      { text: "Beneficiaire d'un logement de fonction", isChecked: false },
      { text: "hébergé a tritre gratuit", isChecked: false }
    ]
  },
  {
    screen: "codepost",
    text: "où se situe le bien à financer ?",
    isChecked: false,
    info1:
      "La connaissance du code postal du bien permettra de calculer les frais de notaire selon les conditions en vigueur dans le département concerné.",
    info2:
      "Si vous êtes en recherche de bien sur plusieurs communes, indiquez une commune ciblée.",
    input1: {
      text: "Dans quel pays se situe votre projet ? *",
      isChecked: false,
      country: "France"
    },
    input2: { text: "Ville ou code postal *", isChecked: false, zipcode: 0 }
  },
  {
    screen: "amount",
    text: "définisson le montant de votre projet",
    isChecked: false,
    input1: {
      text: "Montant estimé de votre acquisition *",
      isChecked: false,
      amount: 0
    },
    input2: {
      text: "Montant estimé des travaux *",
      isChecked: false,
      amount: 0
    },
    input3: { text: "Frais de notaire", amount: 0 },
    input4: { text: "Budjet total estimé du projet", amount: 0 }
  },
  {
    screen: "getemail",
    text: "vos coordonnées",
    isChecked: false,
    input1: {
      text: "Adress e-mail emprunteur *",
      isChecked: false,
      amount: 0
    },
    check1: {
      text: "j'accepte de recevoir par email des propositons de Meilleurtaux.",
      isChecked: false
    }
  },
  {
    screen: "sendemail",
    text: "et voilà, le formulaire est terminé !",
    isChecked: false,
    input1: {
      text: "votre numéro de dossier est le :",
      num: 0
    }
  }
];

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
        console.log("App->GetCookies->", Cookies.get("meilleurtaux"));
        let ValueCookies = Cookies.get("meilleurtaux");
        let DataCookies = JSON.parse(ValueCookies);
        if (DataCookies !== "") {
          setQuestions(DataCookies);
          Data = DataCookies;
        } else {
          console.log("setCookies-->", Data);
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

  console.log("App-->", questions);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <Home data={questions} /> */}
          <Home Data={Data} />
        </Route>
        <Route path="/admin/:user">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
