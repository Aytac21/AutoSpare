import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommunictyCommitment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/createprofile");
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav-community">
          <p className="login-community">Our community commitment</p>
        </div>
        <div className="login-main-community">
          <p>Airbnb is a community where anyone can belong</p>
          <p>
            To ensure this, we’re asking you to commit to the following: <br />
            <br />I agree to treat everyone in the Airbnb community–regardless
            of their race, religion, nation origin, ethnicity, skin color,
            disability, sex, gender identity, sexual orientation or age–with
            respect, and without judgement or bias.
          </p>
          <p>
            Learn more<i className="fa-solid fa-chevron-right"></i>
          </p>
          <button
            className={`next ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
          >
            {isLoading ? "..." : "Agree and continue"}
          </button>
          <button className="decline">Decline</button>
        </div>
      </div>
    </div>
  );
};

export default CommunictyCommitment;
