
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {  Todos } from './components/Todo'
import { useState, useEffect } from 'react';
import axios from 'axios'; 

function App() {
const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  // .then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos);
  
  // })
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/todos");
            console.log(response.data); // Check the structure of the response
            setTodos(response.data); // Set the fetched data into the state variable
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, [])

  return (
    <>
    <CreateTodo />
    <Todos todos={todos}/>
    </>
  )
}

export default App
