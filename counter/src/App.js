import { useState } from "react";
import './App.css';

function App() {
  const [counter, SetCounter] = useState(0);
  console.log(counter);


  const incrementCounter = () => {
    if (counter > 9) { return }
    else { SetCounter(counter + 1) }
  }

  const decrementCounter = () => {
    if (counter <= 0) { return }
    else {
      SetCounter(counter - 1);
    }

  }


  return (
    <>
    <div className="counter">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={(incrementCounter)}>Increment</button>
      <button onClick={(decrementCounter)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
