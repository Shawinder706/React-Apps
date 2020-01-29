const Express = require('express');
const App = Express();
const bodyParser = require('body-parser');
const cors = require('cors')
const ToDoRouter = Express.Router()
const ToDo = require('./todoModel')
const PORT = 4000;

const mongoose = require('mongoose')
// establish mongodb connection
const connect = mongoose.connect('mongodb://localhost:27017/todos');

App.use(cors());
App.use(bodyParser.json());

connect.then((db) => {
    console.log("connected correctly to server")
}), (err) => {
    console.log(err)
}

//***************************************************//
App.use('/', ToDoRouter)

//create new todos
ToDoRouter.route('/create').post((req, res) => {
    ToDo.create(req.body)
        .then((todo) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'aplication/json');
            res.json(todo);
        }), (err) => {
            res.statusCode = 404;
            console.log(err);
        }
})

//show all todos list
ToDoRouter.route('/').get((req, res) => {
    ToDo.find({})
        .then((todos) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json');
            res.json(todos);
        }), (err) => {
            res.statusCode = 404;
            console.log(err);
        }
});

// get todo by id
ToDoRouter.route('/:id').get((req, res) => {
    ToDo.findById(req.params.id)
        .then((todo) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json')
            res.json(todo);
        }), (err) => {
            res.statusCode = 404
            console.log(err)
        }
});

// update todo 
ToDoRouter.route('/update/:id').put((req, res, next) => {
    ToDo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((todo) => {
            res.statusCode = 200;
            res.setHeader('content-type', 'application/json')
            res.json(todo)
        }).catch((err) => {
            next(err)
        })
})





//App.get('/', (req, res) => res.send('Hello World!'))



App.listen(PORT, () => console.log("server is running on " + PORT))