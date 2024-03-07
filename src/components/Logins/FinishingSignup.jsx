import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FinishingSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [birthdateError, setBirthdateError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordRight, setPasswordRight] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [birthdateText, setBirthdateText] = useState("Birthdate");
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isSequential = (str) => {
    const sequentialPatterns = [
      "123456789",
      "987654321",
      "abcdefghijklmnopqrstuvwxyz",
      "zyxwvutsrqponmlkjihgfedcba",
    ];
    return sequentialPatterns.some((pattern) => str.includes(pattern));
  };

  const handleContinue = () => {
    const inputErrors = [];
    const inputRights = [];

    if (!firstName.trim()) {
      setFirstNameError("First name is required");
    } else {
      setFirstNameError("");
    }

    if (!lastName.trim()) {
      setLastNameError("Last name is required");
    } else {
      setLastNameError("");
    }

    if (!birthdate) {
      setBirthdateError("Birthdate is required");
    } else {
      setBirthdateError("");
    }

    if (!isValidEmail(email)) {
      setEmailError("Email");
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      inputErrors.push("At least 8 characters.");
    } else {
      inputRights.push("It is 8 characters.");
    }

    if (isSequential(password) || password.length < 8) {
      inputErrors.push("Password strength: weak.");
    } else {
      inputRights.push("Password strength: good.");
    }

    if (
      password.toLowerCase().includes(firstName.toLowerCase()) ||
      password.toLowerCase().includes(lastName.toLowerCase()) ||
      password.toLowerCase().includes(email.toLowerCase())
    ) {
      inputErrors.push("Can't contain your name or email address.");
    } else {
      inputRights.push("Not your name or email address.");
    }

    if (!/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      inputErrors.push(
        "Password must contain at least one number and one symbol."
      );
    } else {
      inputRights.push("Contains a number and symbol.");
    }

    setPasswordError(inputErrors.length > 0 ? inputErrors.join(", ") : "");
    setPasswordRight(inputRights.length > 0 ? inputRights.join(", ") : "");

    if (inputErrors.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/commitment");
      }, 3000);
    }
  };

  const getErrorColor = (error) => {
    if (
      error.includes("It is 8 characters.") ||
      error.includes("Contains a number and symbol.") ||
      error.includes("Password strength: good.") ||
      error.includes("Not your name or email address.")
    ) {
      return "#568D48";
    } else {
      return "#C13719";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "birthdate") {
      const newValue = value
        .replace(/\D/g, "")
        .replace(/(^\d{2})(\d)/g, "$1/$2")
        .replace(/(^\d{2})\/(\d{2})(\d{4})/, (_, d, m, y) => {
          const day = parseInt(d, 10);
          const month = parseInt(m, 10);
          const year = parseInt(y, 10);
          const filteredDay = Math.min(Math.max(day, 1), 31);
          const filteredMonth = Math.min(Math.max(month, 1), 12);
          const filteredYear = Math.min(year, 2024);
          if (
            day !== filteredDay ||
            month !== filteredMonth ||
            year !== filteredYear
          ) {
            setBirthdateError("Invalid date");
            const today = new Date();
            const formattedDate = `${today.getDate()}/${
              today.getMonth() + 1
            }/${today.getFullYear()}`;
            return formattedDate;
          } else {
            setBirthdateError("");
          }
          return `${filteredDay}/${filteredMonth}/${filteredYear}`;
        })
        .replace(/(^\d{2})\/(\d{2})(\d)/g, "$1/$2/$3")
        .slice(0, 10);
      setBirthdate(newValue);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login-div">
        <div className="login-nav">
          <Link to={"/finishingsignup"}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <p className="login-finish">Finish signing up</p>
        </div>
        <div className="login-main login-text">
          <div className="login-city">
            <div className="name">
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                style={{ borderColor: firstNameError ? "red" : "#ccc" }}
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                style={{ borderColor: lastNameError ? "red" : "#ccc" }}
              />
            </div>
            <p>Make sure it matches the name on your government ID.</p>
            <input
              type="text"
              placeholder={birthdate ? birthdate : "Birthdate"}
              name="birthdate"
              value={birthdate}
              onChange={handleInputChange}
              onFocus={() => setBirthdateText("/")}
              onBlur={() =>
                setBirthdateText(
                  birthdate
                    ? birthdate.split("-").reverse().join("/")
                    : "Birthdate"
                )
              }
              style={{ borderColor: birthdateError ? "red" : "#ccc" }}
            />

            <p>
              To sign up, you need to be at least 18. Your birthday won’t be
              shared with other people who use Airbnb.
            </p>
            <div className="login-mail">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleInputChange}
                style={{ borderColor: emailError ? "red" : "#ccc" }}
              />
              {emailError && (
                <span className="error-message" style={{ color: "red" }}>
                  {emailError}
                </span>
              )}
            </div>
            <p>We’ll email you trip confirmation and receipts.</p>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
                style={{ borderColor: passwordError ? "red" : "#ccc" }}
              />
              <button onClick={toggleShowPassword}>
                {showPassword ? "Hide" : "Show"}
              </button>
              {passwordError && (
                <ul className="error-list">
                  {passwordError.split(", ").map((error, index) => (
                    <li key={index} style={{ color: getErrorColor(error) }}>
                      <i className="fa-solid fa-circle-xmark"></i>
                      {error}
                    </li>
                  ))}
                </ul>
              )}
              {passwordRight && (
                <ul className="error-list">
                  {passwordRight.split(", ").map((error, index) => (
                    <li key={index} style={{ color: getErrorColor(error) }}>
                      <i className="fa-solid fa-circle-check"></i>
                      {error}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p>
              By selecting Agree and continue, I agree to Airbnb’s
              <a href="">Terms of Service, Payments Terms of Service</a> and
              <a href="">Nondiscrimination Policy</a> and acknowledge the
              <a href="">Privacy Policy.</a>
            </p>
          </div>
          <button
            className={`next ${isLoading ? "loading" : ""}`}
            onClick={handleContinue}
            disabled={isLoading}
          >
            {isLoading ? "..." : "Agree and continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishingSignup;
