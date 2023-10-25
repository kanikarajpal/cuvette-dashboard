import React from "react";
import MainContainer from "../MainContainer/MainContainer";
import Sidebar from "../sidebar/Sidebar";
// import { Sidebar, MainContainer } from "..";
import "./LandingPageStyle.css";
const LandingPage = () => {
  return (
    <div className="landingDiv">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default LandingPage;
