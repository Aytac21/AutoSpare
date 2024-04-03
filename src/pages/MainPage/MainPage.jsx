import React from "react";
import Head from "../../components/Main/Head/Head";
import MainPageCarList from "../../components/Main/SuggestedCarList/MainPageCarList";
import MRC from "../../components/Main/MakesAndRentCompanies/MRC";
import Footer from "../../components/Main/Footer/Footer";
function MainPage() {
  return (
    <>
      <Head />
      <MainPageCarList />
      <MRC />
      <Footer />
    </>
  );
}

export default MainPage;
