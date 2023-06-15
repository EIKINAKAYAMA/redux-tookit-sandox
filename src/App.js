import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from "./redux/counterSlice";
import { useEffect } from "react";
import { setUsers } from "./redux/usersSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => dispatch(setUsers(json)));
    })();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <h1>Users</h1>
      {users &&
        users.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
          </div>
        ))}
    </div>
  );
}

export default App;
