const Express = require('express');
const App = Express();
const bodyParser = require('body-parser');
const cors = require('cors')
const todoRoutes = Express.Router()
const PORT = 4000;
const ToDo = require('./todoModel')

const mongoose = require('mongoose')

App.use(cors());
App.use(bodyParser.json());
// establish mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true })
const Connection = mongoose.connection
Connection.once('open', () => {
    console.log("connection is established")
})

//get todos list
todoRoutes.route('/').get((req, res) => {
    ToDo.find((err, todos) => {
        if (err) {
            console.log(err)
        } else {
            res.json(todos)
        }
    });
});
// get todo by id
todoRoutes.route('/:id').get((req, res) => {
    ToDo.findById(req.params.id, (err, todos) => {
        if (err) {
            console.log(err)
        } else {
            res.json(todos)
        }
    })
})
// add new todo
todoRoutes.route('/add').post((req, res) => {
    const todo = new ToDo(req.body);
    todo.save()
        .then(todo => {
            res.status(200);
            res.json('todo': 'to do added successfully')
        })
})
App.use('/todos', todoRoutes)


App.listen(PORT, () => console.log("server is running on " + PORT))