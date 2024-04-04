

const mongoose = require('mongoose');
const { createTodo, updateTodo } = require('./types');



const url =  mongoose.connect("mongodb+srv://patidarhimank005:yuQhJgbyVw0eD5JN@cluster0.4ciljnl.mongodb.net/todos")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

    console.log(url)
const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
});

const todoModel = mongoose.model('todos', TodoSchema);

module.exports = {
    todoModel
};
