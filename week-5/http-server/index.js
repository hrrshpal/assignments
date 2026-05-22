const express = require('express') 

const app = express()

app.get('/', (req, res) => {
    res.send(`Enter two numbers (a,b) as the query parameters after adding the route i.e /add?a=5&b=12
        Possible routes are /add, /subtract, /multiply, /divide`)
})

app.get('/add', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    res.send(`Sum of ${a} and ${b} is ${a+b}`)
})

app.get('/subtract', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    res.send(`Sum of ${a} and ${b} is ${a-b}`)
})

app.get('/multiply', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    res.send(`Sum of ${a} and ${b} is ${a*b}`)
})

app.get('/divide', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    res.send(`Sum of ${a} and ${b} is ${a/b}`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})