import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <table className="custom-table-striped" style={{ marginTop: 10 }} >
        <tbody>
            <tr><td className="name"><Router>
                <Link to={"/edit/"+props.todo._id}>{props.todo.todo_name}</Link>
                </Router> <span>{props.todo.todo_priority}</span>
            </td></tr>
            <tr><td>{props.todo.todo_email}</td></tr>
            <tr><td>{props.todo.todo_phone}</td></tr>
            <tr><td className="btn">
                <Link to={"/edit/"+props.todo._id}>Edit</Link>
            </td><td className="btn">
                <Link to={"/delete/"+props.todo._id}>Delete</Link>
            </td></tr>
            <tr><td>&nbsp;</td></tr>
        </tbody>
     </table>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div className="container row">
              {/* <div class="col-sm-6 col-md-6 contact-form">
                <CreateTodo />
              </div> */}
            <input type="text" placeholder="Filter Contacts" className="custom-search" />
            { this.todoList() }
            </div>
        )
    }
}