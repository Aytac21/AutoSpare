import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Responsive.css";

import { useEffect } from "react";
import LoginPhoneNumber from "./components/Logins/LoginPhoneNumber";
import LoginEmail from "./components/Logins/LoginEmail";
import FinishingSignup from "./components/Logins/FinishingSignup";
import CommunictyCommitment from "./components/Logins/CommunictyCommitment";
import CreateProfile from "./components/Logins/CreateProfile";
import ComfirmPhoto from "./components/Logins/ComfirmPhoto";
import ProfilePhotoDone from "./components/Logins/ProfilePhotoDone";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPhoneNumber />} />
        <Route path="/loginemail/" element={<LoginEmail />} />
        <Route path="/finishingsignup/" element={<FinishingSignup />} />
        <Route path="/commitment/" element={<CommunictyCommitment />} />
        <Route path="/createprofile/" element={<CreateProfile />} />
        <Route path="/comfirmphoto/" element={<ComfirmPhoto />} />
        <Route path="/profilephotodone/" element={<ProfilePhotoDone />} />
        {/* <Route path="/" element={<Home />} />*/}
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
