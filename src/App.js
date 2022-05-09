import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./page/Blog/Blog";
import Home from "./page/Home/Home/Home";
import NotFound from "./page/NotFound/NotFound";
import Footer from "./page/Shared/Footer/Footer";
import Headers from "./page/Shared/Headers/Headers";
import Login from "./page/Login/Login";
import SignUp from "./page/SignUp/SignUp";
import Inventory from "./page/Inventory/Inventory";
import ManageItems from "./page/ManageItems/ManageItems";
import AddItem from "./page/AddItem/AddItem";
import MyItems from "./page/MyItems/MyItems";
import RequireAuth from './RequireAuth/RequireAuth'


const App = () => {
  return (
    <Fragment>
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/manageItems" element={
          <RequireAuth>
                <ManageItems />
          </RequireAuth>
        } />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/myItems" element={<MyItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/inventory/:id" element={<Inventory/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Fragment>
  );
};

export default App;
