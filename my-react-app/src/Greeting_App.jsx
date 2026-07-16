import { useState } from "react";

function GreetingApp() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleClick() {
        setMessage(`Hello ${name}!`);
    }

    return (
        <div>
            <h2>Greeting App</h2>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={handleClick}>Show Greeting</button>
            <p>{message}</p>
        </div>
    );
}

export default GreetingApp;
