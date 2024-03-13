import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LoginEmail = ({ onClose, onOpenEmailModal, onOpenFinishingSignup }) => {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = () => {
    if (!isValidEmail(email)) {
      document.querySelector(".login-city input").style.borderColor = "red";
      setHasError(!email.includes("@"));
    } else {
      document.querySelector(".login-city input").style.borderColor = "#ccc";
      document.querySelector(".login-city .error-message").style.color =
        "#717171";
    }
  };

  const handleContinue = () => {
    if (!isValidEmail(email)) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/finishingsignup");
    }, 3000);
    onClose();
    onOpenFinishingSignup();
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <FontAwesomeIcon icon={faTimes} className="close" onClick={onClose} />
          <p className="login-signup">Log in or sign up</p>
        </div>
        <div className="login-email-main">
          <p>Welcome to !</p>
          <div className="login-city login-mail">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={hasError ? "error" : ""}
            />
            {hasError && <button className="error-message">Email</button>}
          </div>
          <button
            className={`next ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
          >
            {isLoading ? "..." : "Continue"}
          </button>
          <div className="hr">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="gmail">
            <button>
              <img src="fb.png" alt="" />
              <p>Continue with Facebook</p>
            </button>
            <button>
              <img src="google.png" alt="" />
              <p>Continue with Facebook Google</p>
            </button>
            <button>
              <img src="apple.png" alt="" />
              <p>Continue with Facebook Apple</p>
            </button>
            <button>
              <img src="mail.png" alt="" />
              <p>Continue with Facebook Email</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
