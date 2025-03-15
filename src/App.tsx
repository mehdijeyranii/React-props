import { useState } from "react";

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const handleRest = () => setCount(initialCount);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "24px" }}>Count: {count}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} disabled={count === 0}>
          Decrease
        </button>
        <button onClick={handleRest}>Rest</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter initialCount={5} />
    </div>
  );
};

export default App;
