import React from "react";
import "../styles/ShowFrontdesk.css";

const ShowFrontdesk = ({ todos, handleDelete, handleNext }) => {
  return (
    <div className="show-frontdesk">
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

export default ShowFrontdesk;
