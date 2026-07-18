import { useState } from "react";

function App() {

    const [todos, setTodos] = useState([]);
    const [input, setInput]= useState("");

    return (
        <div>
            <h1>Todo App</h1>
            <input
            type="text"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder="Add a new todo..."
            />

           <button onClick={() => {
                if (input.trim() !== "") {
                    setTodos([...todos, input]);
                    setInput("");
                }
           }}>

            Add Todo
           </button>
           <ul>
              {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
              ))}
            </ul>
        </div>
    );
}

export default App;
