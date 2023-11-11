import React from "react";
import "../styles/ShowKitchen.css";

const ShowKitchen = ({ todos, handleDelete, handleNext }) => {
  return (
    <div className="show-kitchen">
      {todos.map((todo) => (
        <div>
          {/* <h5>
            {todo.todoItem} : {todo.orderStatus}
          </h5> */}
          {/* <button onClick={() => handleDelete(todo)}>delete</button> */}
          {todo.todoItem} <button onClick={() => handleNext(todo)}> OK </button>
        </div>
      ))}
    </div>
  );
};

export default ShowKitchen;
