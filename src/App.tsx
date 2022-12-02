import { useState } from "react";
import "./App.css";
import { Field } from "./game/Field";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Field />
    </div>
  );
}

export default App;
