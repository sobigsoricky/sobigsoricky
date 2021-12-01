import React from "react";
import { Newfooter, Offerads } from "../components";

function Welcome() {
  return (
    <>
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> Welcom User!</h1>
     
      </div>
      <Newfooter />
      <Offerads />
      </>
  );
}

export default Welcome;
