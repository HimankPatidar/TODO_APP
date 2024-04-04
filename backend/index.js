
const express = require("express");
const mongoose = require('mongoose');
const { createTodo, updateTodo } = require("./types");
const { todoModel } = require("./db"); 
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors())

app.post("/todo", async function(req, res){    
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent invalid data"
        });
        return;
    }
    // put in MongoDB
    await todoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created successfully"
    });
});

app.get("/todos", async function(req, res){    
    // get from MongoDB
    const todos = await todoModel.find({});
    res.json(todos);
});

app.put("/completed", async function(req, res){    
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent invalid data"
        });
        return;
    }
    // put in MongoDB
    await todoModel.updateOne({
        _id: updatePayload.id
    },{
        completed: true
    });
    res.json({
        msg: "Todo updated successfully"
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
