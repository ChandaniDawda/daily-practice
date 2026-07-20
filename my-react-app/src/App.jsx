import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        const trimmedInput = input.trim();

        if (trimmedInput !== "") {
            setTodos((prevTodos) => [
                ...prevTodos,
                { id: Date.now(), text: trimmedInput, completed: false },
            ]);
            setInput("");
        }
    };

    const deleteTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, todoIndex) => todoIndex !== index));
    };

    const toggleTodo = (index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, todoIndex) =>
                todoIndex === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

   const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
   }
    const remainingTodos = todos.filter((todo) => !todo.completed).length;

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Todo App</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo..."
                style={{ padding: "8px", marginRight: "8px" }}
            />

            <button style = {{ marginLeft: "8px" }} onClick={addTodo}>Add Todo</button> 
            <button style = {{ marginLeft: "8px" }} onClick={clearCompleted}>Clear Completed</button>

            <p>Remaining todos: {remainingTodos}</p>

            <ul style={{ marginTop: "16px", paddingLeft: "20px" }}>
                {todos.map((todo, index) => (
                    <li
                        key={todo.id}
                        style={{
                            marginBottom: "8px",
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(index)}
                        />
                        <span style={{ marginLeft: "8px" }}>{todo.text}</span>
                        <button onClick={() => deleteTodo(index)} style={{ marginLeft: "10px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
