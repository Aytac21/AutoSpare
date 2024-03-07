import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/comfirmphoto");
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/commitment"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>

          <p className="login-signup">Create your profile</p>
        </div>
        <div className="login-main-create">
          <p>
            Discover places to stay and unique experiences around the world.
          </p>
          <button
            className={`next-create ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
          >
            {isLoading ? "..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
