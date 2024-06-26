

export function Todos({ todos }) {
    // Check if todos is undefined or null before mapping
    if (!todos) {
        return <div>No todos available</div>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <button>{todo.completed === true ? "Completed" : "Mark as Complete"}</button>
                </div>
            ))}
        </div>
    );
}
