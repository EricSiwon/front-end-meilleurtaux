import React, { useState } from "react";
import axios from "axios";
import { Delete } from "@material-ui/icons";

import DetailsDevis from "../components/DetailsDevis";

export default function Devis({ item, fetchDevis }) {
  console.log("Devis->", item);

  const [idDevis, setIdDevis] = useState(false);
  const [visible, setVisible] = useState(false);

  const deleteDevis = async id => {
    let Url = "http://localhost:4000/devis/delete?id=" + item._id;
    try {
      const response = await axios.post(Url);
      console.log(response.data);
      setIdDevis(false);
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
            console.log("Devis-->clicked", item);
            setVisible(!visible);
          }}
        >
          <div className="td1">{item.zipcode}</div>
          <div className="td2">{item.email}</div>
          <div className="td3">{item.TypeRepProperty}</div>
          <div className="td4">{item.StatusRepProperty}</div>
          <div className="td5">
            {item.amount4.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}
            <span>€</span>
          </div>
        </div>
        <div
          className="td7"
          onClick={() => {
            setIdDevis(item._id);
            deleteDevis(item._id);
            setVisible(!visible);
            console.log("Devis->clicked delete item", item._id);
          }}
        >
          <Delete />
        </div>
      </div>
      {visible && <DetailsDevis item={item} />}
    </div>
  );
}
