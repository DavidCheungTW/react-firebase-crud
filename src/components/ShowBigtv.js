import React from "react";
import "../styles/ShowBigtv.css";
import readyEat from "../images/ready-eat.png";

const ShowBigtv = ({ todos, handleDelete, handleNext }) => {
  let placedArray = "";
  let cookedArray = "";

  todos.map((todo) => {
    if (todo.orderStatus === "placed") {
      // placedArray.push(todo.todoItem);
      placedArray = placedArray + " " + todo.todoItem;
    }
    if (todo.orderStatus === "cooked") {
      // cookedArray.push(todo.todoItem);
      cookedArray = cookedArray + " " + todo.todoItem;
    }
  });

  return (
    <div className="show-bigtv">
      <ul>
        <li className="column-1">
          <p className="heading1"> Preparing... </p>
          <p className="orderlist1"> {placedArray}</p>
          {/* {placedArray.map((todo) => (
            <p>{todo}</p>
          ))} */}
        </li>
        <li className="column-2">
          <p className="heading2"> Please collect </p>
          <p className="orderlist2"> {cookedArray}</p>
          {/* {cookedArray.map((todo) => (
            <p>{todo}</p>
          ))} */}
        </li>
        <li className="column-3">
          <img src={readyEat} alt="ready-eat" height={125} width={125} />
        </li>
      </ul>

      <div className="footer">
        Why not order ahead? Try the My Family Order's App
      </div>
    </div>
  );
};

export default ShowBigtv;
