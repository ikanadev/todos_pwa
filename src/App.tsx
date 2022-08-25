import type {Component} from 'solid-js';

import {createSignal} from 'solid-js';

const App: Component = () => {
  const [counter, setCounter] = createSignal<number>(2);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <div>
      <p>{counter()}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
}

export default App;
