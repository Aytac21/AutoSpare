import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import Layout from "./features/Layout";
import Card from "./pages/Card";
import Results from "./pages/Results/Results";
import Favorite from "./pages/Favorite/Favorite";
import Shops from "./pages/Shops";
import ShopType from "./pages/ShopType";
import FilterPage from "./components/FilterPage/FilterPage";
import Home from "./pages/Home";
import MarkDetails from "./pages/RegistrationMark/MarkDetails";
import ItemDetails from "./pages/Car/ItemDetails";
import CategoryDetails from "./pages/CategoryDetails";
import LoginEmail from "./components/Logins/LoginEmail";
import LoginPhoneNumber from "./components/Logins/LoginPhoneNumber";
import ProfilePhotoDone from "./components/Logins/ProfilePhotoDone";
import CreateProfile from "./components/Logins/CreateProfile";
import CommunictyCommitment from "./components/Logins/CommunictyCommitment";
import ComfirmPhoto from "./components/Logins/ComfirmPhoto";
import FinishingSignup from "./components/Logins/FinishingSignup";

import { useEffect, useState } from "react";
import Footer from "./features/Layout/Footer";
import Header from "./features/Layout/Header";

function App() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // });

  const { pathname } = useLocation();
  const route = pathname.split("/")[1];
  const routes = [
    "",
    "filter",
    "itemDetails",
    "card",
    "results",
    "favorite",
    "shops",
    "shoptype",
    "1",
    "categoryDetails"
  ];

  return (
    <>
      {routes.includes(route) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginemail/" element={<LoginEmail />} />
        <Route path="/login/" element={<LoginPhoneNumber />} />
        <Route path="/profilephotodone/" element={<ProfilePhotoDone />} />
        <Route path="/createprofile/" element={<CreateProfile />} />
        <Route path="/commitment/" element={<CommunictyCommitment />} />
        <Route path="/comfirmphoto/" element={<ComfirmPhoto />} />
        <Route path="/finishingsignup/" element={<FinishingSignup />} />
        <Route path="/categoryDetails/" element={<CategoryDetails />} />

        {/* -------------------------------------------- */}
        <Route path="/filter/" element={<FilterPage />} />
        <Route path="/itemDetails/" element={<ItemDetails />} />
        <Route path="/itemDetails/:categoryId" element={<ItemDetails />} />
        <Route path="/card/" element={<Card />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/favorite/" element={<Favorite />} />
        <Route path="/shops/" element={<Shops />} />
        <Route path="/shoptype" element={<ShopType />} />
        <Route path="/1/" element={<MarkDetails />} />

        {/* -------------------------------------------- */}
      </Routes>
      {routes.includes(route) && <Footer />}
    </>
  );
}

export default App;
