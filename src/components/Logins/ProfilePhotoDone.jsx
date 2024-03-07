import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePhotoDone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/comfirmphoto"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <p className="login-signup">Create your profile</p>
        </div>
        <div className="login-comfirm-phone">
          <div className="comfirmstep">
            <p>Add a profile photo</p>
            <p>
              Pick an image that shows your face. Hosts won’t be able to see
              your profile photo until your reservation is confimed
            </p>
          </div>
          <hr />
          <button
            className={`login-done ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
          >
            {isLoading ? "..." : "Done"}
          </button>
          <button className="change-photo">
            <Link to={"/comfirmphoto"}>Change photo</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoDone;
