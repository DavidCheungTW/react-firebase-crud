import "./App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import ShowCashier from "./components/ShowCashier";
import ShowKitchen from "./components/ShowKitchen";
import ShowFrontdesk from "./components/ShowFrontdesk";
import ShowBigtv from "./components/ShowBigtv";
import Login from "./components/Login";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");
  // const [location, setLocation] = useState("bigtv");
  const [username, setUsername] = useState("");

  const handleReset = () => {
    setUsername("");
  };

  // const handleRadioChange = (event) => {
  //   setLocation(event.target.value);
  // };

  const handleTodoChange = (e) => {
    setTodoItem(e.target.value);
  };

  //write
  const writeToDatabase = () => {
    const randNum = Math.floor(Math.random() * 899) + 100;

    // if (todoItem === "") {
    //   setMessage("Please entry your item!");
    //   return;
    // }

    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      // todoItem: todoItem,
      todoItem: randNum,
      uuid: uuid,
      orderStatus: "placed",
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
          if (username === "kitchen" && todo.orderStatus === "placed") {
            console.log("...", todo.orderStatus);
            setTodos((oldArray) => [...oldArray, todo]);
          }
          if (username === "frontdesk" && todo.orderStatus === "cooked") {
            setTodos((oldArray) => [...oldArray, todo]);
          }
          if (
            username === "bigtv" &&
            (todo.orderStatus === "placed" || todo.orderStatus === "cooked")
          ) {
            setTodos((oldArray) => [...oldArray, todo]);
          }
        });
      }
    });
  }, [username]);

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

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

  return (
    <div className="App">
      <div className="header">
        <p>Welcome to Family Food Store</p>
        {username && (
          <>
            <button
              onClick={() => {
                handleReset();
              }}
            >
              X
            </button>
          </>
        )}
      </div>

      {username && (
        <>
          <div className="main-body">
            {username === "cashier" && (
              <ShowCashier
                location={username}
                todoItem={todoItem}
                handleTodoChange={handleTodoChange}
                writeToDatabase={writeToDatabase}
              />
            )}
            {username === "kitchen" && (
              <ShowKitchen
                todos={todos}
                handleDelete={handleDelete}
                handleNext={handleNext}
              />
            )}
            {username === "frontdesk" && (
              <ShowFrontdesk
                todos={todos}
                handleDelete={handleDelete}
                handleNext={handleNext}
              />
            )}
            {username === "bigtv" && (
              <ShowBigtv
                todos={todos}
                handleDelete={handleDelete}
                handleNext={handleNext}
              />
            )}
          </div>
        </>
      )}

      {/* <div className="footer"> */}
      {/* <div className="select-location">
          <label htmlFor="current-location">{location} : </label>
          <input
            type="radio"
            name="location"
            value="cashier"
            id="cashier"
            onChange={handleRadioChange}
          />
          <label htmlFor="cashier">Cashier</label>
          <input
            type="radio"
            name="location"
            value="kitchen"
            id="kitchen"
            onChange={handleRadioChange}
          />
          <label htmlFor="kitchen">Kitchen</label>
          <input
            type="radio"
            name="location"
            value="frontdesk"
            id="frontdesk"
            onChange={handleRadioChange}
          />
          <label htmlFor="frontdesk">Front Desk</label>
          <input
            type="radio"
            name="location"
            value="bigtv"
            id="bigtv"
            checked={location === "bigtv"}
            onChange={handleRadioChange}
          />
          <label htmlFor="bigtv">Big TV</label> 
        </div> */}
      {/* </div> */}

      {!username && (
        <>
          <Login setUsername={setUsername} />
        </>
      )}

      {/* {message && <p>{message}</p>} */}
    </div>
  );
}

export default App;

// npm install firebase
// npm install uid
