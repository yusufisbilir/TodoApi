const express = require('express');
const router = express.Router();
const todo = require('../models/todo.js');

//List todos
router.get('/', (req, res,next) => {
    todo.find().then((todos)=>{
        res.json(todos);
    }).catch((err)=>{
        res.json(err);
    });
});

//Add new todo
router.post('/', (req,res,next)=>{
    new todo({
        title:req.body.title,
        date: req.body.date,
        completed: req.body.completed,
    }).save().then(()=>{
        res.json('Added new todo item');
    }).catch((err)=>{
        res.json("Error - add todo");
    });
});

//Update todo
router.put('/:id',function(req,res,next){
    const id = req.params.id;

    todo.findByIdAndUpdate({"_id":id},req.body)
    .then((newTodo)=>{
        res.json("Updated todo");
    })
    .catch((err)=>{
        res.json("Error - update todo")
    });
});

//Delete todo
router.delete("/:id",(req,res,next)=>{
    const id = req.params.id;
    todo.findByIdAndRemove(id)
    .then(() => {
        res.json("Deleted");
    }).catch((err) => {
        res.json("Error - deleting todo");
    });
});

module.exports = router;