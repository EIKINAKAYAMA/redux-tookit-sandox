import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
