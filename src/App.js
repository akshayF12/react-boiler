import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addAmount } from "./redux/counterSlice";
import { fetchUsers } from "./redux/userSlice";
import FlatList from 'flatlist-react';
function App() {
  const [value, setValue] = useState(0);
  const users = useSelector((state) => state.users);
  console.log("users", users);
  const amount = useSelector((state) => state.counterReducer.amount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderPerson = (person, idx) => {
    return (
        <li key={idx}>
          <b>{person.userID} {person.title}</b> (<span>{person.id}</span>)
        </li>
    );
  }
  return (
    <div className="app">
      <div className="text-center">
        <h1>React JS boilerplate</h1>
        <h6>
          By{" "}
          <a
            href="#"
            target="_blank"
            without
            rel="noreferrer"
          >
           Akshay Faldu
          </a>
        </h6>
        <div className="display-2 my-3">{amount}</div>
        <div className="my-4">
          <button
            className="btn btn-success"
            onClick={() => dispatch(increment())}
          >
            + Increment
          </button>
          <button
            className="btn btn-danger ms-2"
            onClick={() => dispatch(decrement())}
          >
            + Decrement
          </button>
        </div>
        <div>
          <input
            type="number"
            className="form-control"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
          <div className="text-center">
            <button
              className="btn btn-primary  mt-2"
              onClick={() => {
                dispatch(addAmount(value));
                setValue(0);
              }}
            >
              ADD
            </button>
            
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary  mt-2"
              onClick={() => {
                dispatch(fetchUsers());
              }}
            >
              Display Users
            </button>
            
          </div>
        </div>
      </div>

      <ul>
        <FlatList
          list={users?.users}
          renderItem={renderPerson}
          renderWhenEmpty={() => <div>List is empty!</div>}
          // sortBy={["firstName", {key: "lastName", descending: true}]}
          // groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
        />
    </ul>

    </div>
  );
}
export default App;
