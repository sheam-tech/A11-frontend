import React, { Fragment } from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./page/Home/Home/Home";

import Footer from "./page/Shared/Footer/Footer";
import Headers from "./page/Shared/Headers/Headers";



const App = () => {
  return (
    <Fragment>
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>

      <Footer />
    </Fragment>
  );
};

export default App;
