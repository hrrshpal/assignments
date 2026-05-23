const { program } = require('commander');
const fs = require('fs')
const filepath  = './todos.json'

let id = 0;

program
  .name('todo-list')
  .description('a CLI based todo list where you can add todos, delete todos, update todos and see all todos')

program.command('add')
    .description("Add a todo")
    .argument("<todo>", "Enter the task")
    .argument("<description>", "Enter task description")
    .action(function(todo, description){
        const todos = JSON.parse(fs.readFileSync(filepath, 'utf-8'))
        const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

        let obj = {
            id: id,
            todo: todo,
            description: description
        }

        todos.push(obj)
        
        fs.writeFileSync(filepath, JSON.stringify(todos))
        console.log("Todo added successfully")
    })

program.command('delete')
    .description("Delete a todo")
    .argument("<deleteID>", "Enter the id you want to delete")
    .action(function(deleteID){
        const todos = JSON.parse(fs.readFileSync(filepath, "utf-8"))

        const newTodos = todos.filter((todo) => {
            return todo.id !== parseInt(deleteID)
        })

        fs.writeFileSync(filepath, JSON.stringify(newTodos))
        console.log("Todo deleted successfully")
    })

program.command('update')
    .description("Update a todo")
    .argument("<updateID>", "Enter the id of todo you want to update")
    .argument("<updatedTodo>", "Enter the new value of todo")
    .argument("<updatedDescription>", "Enter the new value of todo description")
    .action(function(updateID, updatedTodo, updatedDescription){
        const todos = JSON.parse(fs.readFileSync(filepath, "utf-8"))

        todos.forEach((todo)=>{
            if(todo.id === parseInt(updateID)){
                todo.todo = updatedTodo;
                todo.description = updatedDescription
            }
        })

        fs.writeFileSync(filepath, JSON.stringify(todos))
        console.log("Todo updated/modified successfully")
    })

program.command('read')
    .description("Read all todos")
    .action(function(){
        const todos = JSON.parse(fs.readFileSync(filepath, "utf-8"))

        console.log("List of all todos:\n")
        todos.forEach(element => {
            console.log(element.id + ". " + element.todo + " -> " + element.description)
        });
    })


program.parse();