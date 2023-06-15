import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from "./redux/counterSlice";
import { useEffect } from "react";
import { getUsers } from "./redux/usersSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <h1>Users</h1>
      {loading && <p>Loading</p>}
      {error && <p>データ取得に失敗しました。</p>}
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
