//goal is to make a todo application in express, which does all the CRUD operations

const express = require('express')
const todos = './todos.json'
const fs = require("fs")

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        "use /add" : "to add todos",
        "use /delete/:id" : "to delete a specific todo",
        "use /update/:id" : "to update a specific todo",
        "use /my-todos" : "to read all todos"
    })
})

app.get('/my-todos', (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(todos, "utf-8"))
    res.json(tasks)
})

app.post('/add-todo', (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(todos, "utf-8"))
    const id = tasks.length>0 ? parseInt(tasks[tasks.length - 1].id) + 1 : parseInt(1);

    tasks.push({
        id: id,
        todo: req.body.todo,
        description: req.body.description,
        idDone: req.body.isDone
    })

    fs.writeFileSync(todos, JSON.stringify(tasks))
    res.json({
        "message": "todo added successfully"
    })
})

app.patch('/update-todo/:updateid', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(todos, "utf-8"))

  tasks.forEach(element => {
    if(element.id === parseInt(req.params.updateid)){
        element.todo = req.body.todo;
        element.description = req.body.description;
        element.isDone = req.body.isDone
    }
  })

  fs.writeFileSync(todos, JSON.stringify(tasks))
  res.json({
    "message": "Todo updated successfully"
  })
})

app.delete('/delete-todo/:deleteid', (req, res) => {
    const tasks = JSON.parse(fs.readFileSync(todos, "utf-8"))
    const newTasks = tasks.filter(task => task.id !== parseInt(req.params.deleteid))
    fs.writeFileSync(todos, JSON.stringify(newTasks))
    res.json({
        "message" : "deleted todo successfully"
     }
    )
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})