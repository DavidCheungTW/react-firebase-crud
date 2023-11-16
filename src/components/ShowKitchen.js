import React, { useState, useEffect } from "react";
import "../styles/ShowKitchen.css";
import Keypad from "./Keypad";

const ShowKitchen = ({ todos, handleDelete, handleNext }) => {
  const [keyinNum, setKeyinNum] = useState("");
  const [currTodo, setCurrTodo] = useState([]);

  useEffect(() => {
    setCurrTodo(
      todos.filter((todo) => {
        return todo.todoItem.toString() === keyinNum;
      })
    );
  }, [keyinNum, todos]);

  return (
    <div className="show-kitchen">
      {/* {todos.map((todo) => (
        <div>
          <button onClick={() => handleNext(todo)}> {todo.todoItem} </button>
        </div>
      ))} */}
      <Keypad setKeyinNum={setKeyinNum} />

      <button
        className="btn-kitchen"
        onClick={() => {
          if (currTodo.length > 0) {
            handleNext(currTodo[0]);
          } else {
            if (keyinNum.length > 0) {
              alert(`${keyinNum} number is not exist!`);
            } else {
              alert("Please key in number!");
            }
          }
          setCurrTodo([]);
          setKeyinNum("");
        }}
      >
        {keyinNum}
      </button>
    </div>
  );
};

export default ShowKitchen;
