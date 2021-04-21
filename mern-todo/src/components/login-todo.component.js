import React, { Component } from 'react';
import axios from 'axios';

export default class LoginTodo extends Component {
    constructor(props) {
        super(props);
        this.onChangeTodoName = this.onChangeTodoName.bind(this);
        this.onChangeTodoEmail = this.onChangeTodoEmail.bind(this);
        this.onChangeTodoPhone = this.onChangeTodoPhone.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todo_name: '',
            todo_email: '',
            todo_phone: '',
            todo_priority: ''
        }
    }
    onChangeTodoName(e) {
        this.setState({
            todo_name: e.target.value
        });
    }
    onChangeTodoEmail(e) {
        this.setState({
            todo_email: e.target.value
        });
    }
    onChangeTodoPhone(e) {
        this.setState({
            todo_phone: e.target.value
        });
    }
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    onDelete(e) {
        console.log('Try');
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.todo_name}`);
        console.log(`Email: ${this.state.todo_email}`);
        console.log(`Phone: ${this.state.todo_phone}`);
        console.log(`Priority: ${this.state.todo_priority}`);
        
        
        e.preventDefault();
        const obj = {
            todo_name: this.state.todo_name,
            todo_email: this.state.todo_email,
            todo_phone: this.state.todo_phone,
            todo_priority: this.state.todo_priority
        };
        this.setState({
            todo_name: '',
            todo_email: '',
            todo_phone: '',
            todo_priority: ''
        });
        console.log(obj);
        axios.post('http://localhost:4000/todos/add', obj)
            .then(res => console.log(res.data));
        window.location.reload();
        
    }

    render() {
        return (
            <div class="container row">
                <div class="col-md-4"></div>
                <div class="col-sm-12 col-md-6 contact-form">
                    <div style={{marginTop: 10}}>
                    <h3>Login Account</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.todo_userid}
                                    onChange={this.onChangeTodoEmail} placeholder="Email Address"
                                    />
                        </div>
                        <div className="form-group">
                            <input 
                                    type="text" 
                                    className="form-control"
                                    value={this.state.todo_pwd}
                                    onChange={this.onChangeTodoPwd} placeholder="Password"
                                    />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary col-md-12" />
                        </div>
                    </form>
                </div>
            </div>
                <div class="col-md-4"></div>
        </div>
        )
    }
}