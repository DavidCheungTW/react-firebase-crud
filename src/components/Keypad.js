import React, { useState } from "react";
import "../styles/Keypad.css";

const Keypad = ({ setKeyinNum }) => {
  const [digitlist, setDigitlist] = useState("");

  const handleKeyin = (key) => {
    if (key === "Clear") {
      setDigitlist("");
      setKeyinNum("");
    } else if (key === "Enter") {
      setKeyinNum(digitlist);
      setDigitlist("");
    } else if (digitlist.length < 3) {
      setDigitlist(digitlist + key);
    }
  };

  return (
    <div className="keypad">
      <button className="keyButton" onClick={() => handleKeyin("7")}>
        7
      </button>
      <button className="keyButton" onClick={() => handleKeyin("8")}>
        8
      </button>
      <button className="keyButton" onClick={() => handleKeyin("9")}>
        9
      </button>
      <button className="keyButton" onClick={() => handleKeyin("4")}>
        4
      </button>
      <button className="keyButton" onClick={() => handleKeyin("5")}>
        5
      </button>
      <button className="keyButton" onClick={() => handleKeyin("6")}>
        6
      </button>
      <button className="keyButton" onClick={() => handleKeyin("1")}>
        1
      </button>
      <button className="keyButton" onClick={() => handleKeyin("2")}>
        2
      </button>
      <button className="keyButton" onClick={() => handleKeyin("3")}>
        3
      </button>
      <button className="keyButton" onClick={() => handleKeyin("Clear")}>
        Clear
      </button>
      <button className="keyButton" onClick={() => handleKeyin("0")}>
        0
      </button>
      <button className="keyButton" onClick={() => handleKeyin("Enter")}>
        Enter
      </button>
      {/* <h3> {digitlist}</h3> */}
    </div>
  );
};

export default Keypad;
