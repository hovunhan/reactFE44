import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Demo from "./components/Demo";
// import DemoClass from "./components/DemoClass";
// import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
import BTHeader from "./components/BaiTapLayout/BTHeader";
import BTCarousel from "./components/BaiTapLayout/BTCarousel";
import BTSListPhone from "./components/BaiTapLayout/BTSListPhone";
import BtPomotion from "./components/BaiTapLayout/BtPomotion";
import DataBingding from "./DataBinding/DataBingding";
function App() {
  return (
    <div className="App">
      <BTHeader />
      <BTCarousel />
      <BTSListPhone />
      <BtPomotion />
      <DataBingding />
      <h1 className="title">hello hello</h1>
    </div>
  );
}

export default App;
