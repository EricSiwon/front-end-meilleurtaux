import React from "react";
import Cookies from "js-cookie";

import { Redirect } from "react-router-dom";

export default function Site() {
  if (Cookies.get("token")) {
    return <div>Pleins de trucs !!</div>;
  } else {
    // rediriger vers login
    return <Redirect to="/login" />;
  }
}
