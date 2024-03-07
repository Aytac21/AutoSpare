import { Link } from "react-router-dom";

const LoginPhoneNumber = () => {
  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <i className="fa-solid fa-xmark"></i>
          <p className="login-signup">Log in or sign up</p>
        </div>
        <div className="login-email">
          <p>Welcome to !</p>
          <div className="login-city login-phone-number">
            <span className="placeholder">Country/Region</span>
            <select name="" id="">
              <option value="">Azerbaijan (+994)</option>
            </select>
            <input type="phone" placeholder="Phone number" />
          </div>
          <p>
            We will send you a message to confirm your number. Standard message
            and data rates apply.<span>Privacy Policy</span>
          </p>
          <button className="next">
            <Link to={"/loginemail"}>Continue</Link>
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

export default LoginPhoneNumber;
