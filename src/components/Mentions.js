import React, { useState } from "react";
import "../../src/App.css";

const mention_legale =
  "Les informations recueillies sont traitées par le groupe Meilleurtaux Finizy aux fins de vous transmettre une proposition commerciale. Certaines informations sont obligatoires, en cas de non réponse votre demande ne pourra pas être traitée. Vos données personnelles peuvent être transmises aux partenaires de Meilleurtaux dans le cadre de l'étude de votre demande. Vous disposez d'un droit d'accès, de rectification, d'opposition et de portabilité, dans le respect des dispositions légales et réglementaires en vigueur, aux informations vous concernant. Pour l'exercer, un formulaire est mis à votre disposition sur notre site. Pour plus d'information concernant le traitement de vos données personnelles, veuillez consulter notre politique de données personnelles. - ";

export default function Mentions() {
  const [mention, setMention] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div className="mention">
          <span className="require">* Champ obligatoire - </span>
          <span
            className="linkMentions"
            onClick={() => {
              setMention(!mention);
            }}
          >
            Mentions Légales
          </span>
        </div>
        {mention ? (
          <div className="mention">
            {mention_legale}{" "}
            <span
              className="close_mention"
              onClick={() => {
                setMention(false);
              }}
            >
              [x Fermer]
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
