import React from "react";

export default function DetailsDevis({ visible, item }) {

  return (
    <div className="tab0">
      <div className="tab">
        <div className="tab1">
          <div className="cel1">{item.TypeTextProperty}</div>
          <div className="cel2">{item.TypeRepProperty}</div>
        </div>

        <div className="tab1 tab2">
          <div className="cel1">{item.StatusTextProperty}</div>
          <div className="cel2">{item.StatusRepProperty}</div>
        </div>

        <div className="tab1">
          <div className="cel1">{item.UsageTextProperty}</div>
          <div className="cel2">{item.UsageRepProperty}</div>
        </div>

        <div className="tab1 tab2">
          <div className="cel1">{item.SituationTextProperty}</div>
          <div className="cel2">{item.SituationRepProperty}</div>
        </div>

        <div className="tab1">
          <div className="cel1">Lieu où se situe le bien à financer</div>
          <div className="cel2">{item.zipcode} France</div>
        </div>

        <div className="tab1 tab2">
          <div className="cel1">Montant estimé de votre acquisition</div>
          <div className="cel2">
            {item.amount1.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")} €
          </div>
        </div>

        <div className="tab1">
          <div className="cel1">Montant estimé des travaux</div>
          <div className="cel2">
            {item.amount2.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")} €
          </div>
        </div>

        <div className="tab1 tab2">
          <div className="cel1">Frais de notaire</div>
          <div className="cel2">
            {" "}
            {item.amount3.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")} €
          </div>
        </div>

        <div className="tab1">
          <div className="cel1">Budjet total estimé du projet</div>
          <div className="cel2">
            {item.amount4.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")} €
          </div>
        </div>

        <div className="tab1 tab2">
          <div className="cel1">Adress e-mail emprunteur</div>
          <div className="cel2">{item.email}</div>
        </div>

        <div className="tab1">
          <div className="cel1">
            Vous avez accepté de recevoir par email des propositons de
            Meilleurtaux.
          </div>
        </div>

        <div className="tab1 tab2">
          <div className="cel1">Votre numéro de dossier est le :</div>
          <div className="cel2">{item.numdevis}</div>
        </div>
      </div>
    </div>
  );
}
