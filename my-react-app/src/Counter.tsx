no its okimport { useState } from "react";

type CounterProps = {
  label: string;
  initial?: number;
};

function Counter({ label, initial = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initial);

  return (
    <div style={{ marginTop: "24px", padding: "16px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>{label}</h2>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => setCount((value) => value + 1)}>Increment</button>
        <button onClick={() => setCount((value) => value - 1)}>Decrement</button>
        <button onClick={() => setCount(initial)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
