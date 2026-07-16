import { useState } from "react";
import GreetingApp from "./Greeting_App";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Count: {count}</h2>
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => setCount(count + 1)}>Increment ++</button>
                <button onClick={() => setCount(count - 1)}>Decrement --</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>

            <hr style={{ margin: "20px 0" }} />

            <GreetingApp />
        </div>
    );
}

export default App;