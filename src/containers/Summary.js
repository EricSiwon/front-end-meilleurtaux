import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../containers/Footer";

import "../../src/App.css";

export default function Summary() {
  console.log("CodePost->");
  return (
    <>
      <Header />
      <div>Summary</div>
      <Footer />
    </>
  );
}