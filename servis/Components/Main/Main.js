import React from "react";
import Services from "../Services/Services";
import Rules from "../Rules/Rules";
import Map from "../Map/Map";
import Compensation from "../Compensation/Compensation";
import Packages from "../Packages/Packages";
import Products from "../Products/Products";
import FirstPage from "../Firstpage/Firstpage";
import Parent from "../testService/Parent";

const Main = () => (
  <div className="">
    <FirstPage />
    <Rules />
    <Map />
    <Services />
    <Parent />
    <Compensation />
    <Packages />
    <Products />
  </div>
);

export default Main;
