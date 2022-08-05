import React from "react";
import { CounterStore } from "store/store";
function Header() {
  const { count, increment, clear } = CounterStore();
  return (
    <div>
      <header style={{ backgroundColor: "grey", margin: "2rem" }}>
        Counter {count}
      </header>

      <button onClick={increment}>increment</button>

      <button onClick={clear}>reset</button>
    </div>
  );
}

export default Header;
