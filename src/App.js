import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  // const [tempUuid, setTempUuid] = useState("");
  const [message, setMessage] = useState("");

  const handleTodoChange = (e) => {
    setTodoItem(e.target.value);
  };

  //write
  const writeToDatabase = () => {
    if (todoItem === "") {
      setMessage("Please entry your item!");
      return;
    }

    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todoItem: todoItem,
      uuid: uuid,
      orderStatus: "placed",
      //  can add more fields, e.g.  complete:false,
    });
    setTodoItem("");
    setMessage("");
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

  //update
  // const handleUpdate = (todo) => {
  //   setIsEdit(true);
  //   setTempUuid(todo.uuid);
  //   setTodoItem(todo.todoItem);
  // };

  //next
  const handleNext = (todo) => {
    let newStatus = todo.orderStatus;
    if (newStatus === "placed") {
      newStatus = "cooked";
    } else if (newStatus === "cooked") {
      newStatus = "completed";
    }
    update(ref(db, `/${todo.uuid}`), {
      todo: todo.todoItem,
      uuid: todo.uuid,
      orderStatus: newStatus,
    });
    setTodoItem("");
  };

  // const handleSubmitChange = () => {
  //   update(ref(db, `/${tempUuid}`), {
  //     todoItem: todoItem,
  //     uuid: tempUuid,
  //   });
  //   setTodoItem("");
  //   setIsEdit(false);
  // };

  return (
    <div className="App">
      <input type="text" value={todoItem} onChange={handleTodoChange} />
      {isEdit ? (
        <>
          {/* <button onClick={handleSubmitChange}>Submit Change</button> */}
          <button
            onClick={() => {
              setIsEdit(false);
              setTodoItem("");
            }}
          >
            X
          </button>
        </>
      ) : (
        <button onClick={writeToDatabase}>checkout!</button>
      )}

      {todos.map((todo) => (
        <>
          <h1>
            {todo.todoItem} : {todo.orderStatus}
          </h1>

          {/* <button onClick={() => handleUpdate(todo)}>update</button> */}
          <button onClick={() => handleDelete(todo)}>delete</button>
          <button onClick={() => handleNext(todo)}>next</button>
        </>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

// npm install firebase
// npm install uid
