import { useState, useEffect } from "react";
import "./checker.css";

function Checker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [progressStyles, setProgressStyles] = useState({
    width: "0%",
    backgroundColor: "orange",
  });

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  let setStyles = {
    backgroundColor: "red",
  };
  useEffect(() => {
    let totalStrength = 0;
    let hasNumber = /\d/;
    let hasUpperCase = /[A-Z]/;
    let hasLowerCase = /[a-z]/;
    let hasSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (password.length > 3) {
      let strengthByLength = Math.floor(Math.min(6, password.length / 3));
      let strengthByChType = 0;
      if (hasNumber.test(password)) {
        strengthByChType += 1;
      }
      if (hasUpperCase.test(password)) {
        strengthByChType += 1;
      }
      if (hasLowerCase.test(password)) {
        strengthByChType += 1;
      }
      if (hasSpecial.test(password)) {
        strengthByChType += 1;
      }
      console.log(strengthByChType);
      totalStrength = strengthByChType + strengthByLength;
    } else {
      totalStrength = 0;
    }
    setStrength(totalStrength);
    setStyles.width = `${totalStrength * 10}%`;
    if (totalStrength > 8) {
      setStyles.backgroundColor = "green";
    } else if (totalStrength > 6) {
      setStyles.backgroundColor = "orange";
    }
    setProgressStyles(setStyles);
  }, [password]);
  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <input
        type="text"
        placeholder="enter password"
        value={password}
        onChange={handleChange}
      ></input>
      <div className="progress-container">
        <div className="progress-bar" style={{ ...progressStyles }}></div>
      </div>
      <p>Strength of your Password (out of 10) is {strength}</p>
    </div>
  );
}

export default Checker;
