import React, { useState } from "react";
import axios from "axios";

import { Delete } from "@material-ui/icons";

import DetailsDevis from "../components/DetailsDevis";

export default function Devis({ item, fetchDevis }) {
  const [visible, setVisible] = useState(false);

  const deleteDevis = async id => {
    let Url = "https://esi-meilleurtaux.herokuapp.com/devis/delete?id=" + id;
    // let Url = "http://localhost:4000/devis/delete?id=" + id;
    try {
      const response = await axios.post(Url);
      console.log(response.data);
      fetchDevis();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="container1">
        <div
          className="row"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <div className="td1">{item.zipcode}</div>
          <div className="td2">{item.email}</div>
          <div className="td3">{item.TypeRepProperty}</div>
          <div className="td4">{item.StatusRepProperty}</div>
          <div className="td5">
            {item.amount4.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}
            <span> €</span>
          </div>
        </div>
        <span className="td6"></span>
        <div
          className="td7"
          onClick={() => {
            deleteDevis(item._id);
            setVisible(false);
          }}
        >
          <Delete />
        </div>
      </div>
      {visible && <DetailsDevis item={item} />}
    </div>
  );
}
