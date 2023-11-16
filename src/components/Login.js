import React, { useState } from "react";

import "../styles/Login.css";

const Login = ({ setUsername }) => {
  const [tempname, setTempname] = useState("");

  const handleChange = (e) => {
    setTempname(e.target.value);
  };

  const handleSubmit = (inname) => {
    if (
      inname === "cashier" ||
      inname === "kitchen" ||
      inname === "frontdesk" ||
      inname === "bigtv"
    ) {
      setUsername(inname);
      setTempname("");
    } else {
      alert("Wrong user name. Please input again!");
    }
  };

  return (
    <div className="login">
      <div>
        User Name:
        <input type="text" value={tempname} onChange={handleChange} />
        <button
          onClick={() => {
            handleSubmit(tempname);
          }}
        >
          Submit
        </button>
      </div>
      <div>e.g. cashier, kitchen, frontdesk, bigtv</div>
    </div>
  );
};

export default Login;
