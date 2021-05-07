import React from "react";
import Concept from "../components/heduda/Concept";
import Links from "../components/heduda/Links";
import Nav from "../components/heduda/Nav";

const heduda = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Nav />
      <Concept />
      <Links />
    </div>
  );
};

export default heduda;
