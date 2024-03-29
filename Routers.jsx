import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/features/Layout";
import Lorry from "./src/pages/Lorry";
import Home from "./src/pages/Home";
import Accumulator from "./src/pages/Accumulator";
import AirFilter from "./src/pages/AirFilter";
import Amortizator from "./src/pages/Amortizator";
import BrakingSystem from "./src/pages/BrakingSystem";
import Elevator from "./src/pages/Elevator";
import MotorFilter from "./src/pages/MotorFilter";
import OilFilter from "./src/pages/OilFilter";
import Card from "./src/pages/Card";
import Results from "./src/pages/Results";
import Favorite from "./src/pages/Favorite";
import MasintapCategory from "./src/pages/MasintapCategory";
import Shops from "./src/pages/Shops";
import ShopType from "./src/pages/ShopType";

export const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Lorry />,
        path: "/lorry",
      },
      {
        element: <Accumulator />,
        path: "/accumulator",
      },
      {
        element: <AirFilter />,
        path: "/airfilter",
      },
      {
        element: <Amortizator />,
        path: "/amortizator",
      },
      {
        element: <BrakingSystem />,
        path: "/brakingsystem",
      },
      {
        element: <Elevator />,
        path: "/elevator",
      },
      {
        element: <MotorFilter />,
        path: "/motorfilter",
      },
      {
        element: <OilFilter />,
        path: "/oilfilter",
      },
      {
        element: <Card />,
        path: "/card",
      },
      {
        element: <Results />,
        path: "/results",
      },
      {
        element: <Favorite />,
        path: "/favorite",
      },
      { element: <Shops />, path: "/shops" },
      { element: <ShopType />, path: "/shoptype" },
      { element: <MasintapCategory />, path: "/masintapcategory" },
    ],
  },
]);
