import React from "react";
import "../styles/ShowCashier.css";
import menuScreen from "../images/menu-screen.png";

const ShowCashier = ({
  location,
  todoItem,
  handleTodoChange,
  writeToDatabase,
}) => {
  return (
    <div className="show-cashier">
      {/* <img src={menuScreen} alt="menu-screen" height={250} width={170} /> */}
      <input type="text" value={todoItem} onChange={handleTodoChange} />
      <button className="btn-cashier" onClick={writeToDatabase}>
        {" "}
        Comfirm{" "}
      </button>
    </div>
  );
};

export default ShowCashier;
