export function CreateTodo() {
    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" id="title" placeholder="title" /> <br /><br />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" id="description" placeholder="description" /><br /><br />

            <button style={{
                padding: 10,
                margin: 10
            }} onClick={() => {
                const title = document.getElementById("title").value;
                const description = document.getElementById("description").value;

                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response => response.json())
                    .catch((error) => { console.error("Error:", error); })
                    .then((result) => {
                        document.getElementById("title").value = "";
                        document.getElementById("description").value = "";
                        console.log(result);
                    });
            }}>Add a TODO</button>
        </div>
    )
}
