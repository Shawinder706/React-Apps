import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'



// Axios.get('http://localhost:4000/todo')
//     .then(res => console.log(res))

const Todo = props => (

    < tr >
        {console.log("hello " + props)}
        <td>{props.todo.description}</td>
        <td>{props.todo.resposible}</td>
        <td>{props.todo.priority}</td>
        <td><Link to={'/edit/' + props.todo._id} >Edit</Link> </td>
    </tr >
)


class ListToDo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/todo')
            .then(res => {

                this.setState({
                    todos: res.data
                })
                console.log(this.state.todos)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map((currentTodo, index) => {
            return <Todo todo={currentTodo} key={index} />
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Respoonsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default ListToDo;