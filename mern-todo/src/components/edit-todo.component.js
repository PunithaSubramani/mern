import React, { Component } from 'react';
import axios from 'axios';
import TodosList from "./todos-list.component";

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoName = this.onChangeTodoName.bind(this);
        this.onChangeTodoEmail = this.onChangeTodoEmail.bind(this);
        this.onChangeTodoPhone = this.onChangeTodoPhone.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_name: '',
            todo_email: '',
            todo_phone: '',
            todo_priority: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_name: response.data.todo_name,
                    todo_email: response.data.todo_email,
                    todo_phone: response.data.todo_phone,
                    todo_priority: response.data.todo_priority
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onDelete(e) {
        console.log('Try');
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_name: this.state.todo_name,
            todo_email: this.state.todo_email,
            todo_phone: this.state.todo_phone,
            todo_priority: this.state.todo_priority
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
        window.location.reload();
    }

    render() {
        return (
            <div class="container row">
                <div class="col-sm-6 col-md-6 contact-form">
                  <h3 align="center">Edit Contact</h3>
                  <form onSubmit={this.onSubmit}>
                      <div className="form-group"> 
                          <label>Name: </label>
                          <input  type="text"
                                  className="form-control"
                                  value={this.state.todo_name}
                                  onChange={this.onChangeTodoName}
                                  />
                      </div>
                      <div className="form-group">
                          <label>Email: </label>
                          <input 
                                  type="text" 
                                  className="form-control"
                                  value={this.state.todo_email}
                                  onChange={this.onChangeTodoEmail}
                                  />
                      </div>
                      <div className="form-group">
                          <label>Phone: </label>
                          <input 
                                  type="text" 
                                  className="form-control"
                                  value={this.state.todo_phone}
                                  onChange={this.onChangeTodoPhone}
                                  />
                      </div>
                      <div className="form-group">
                          <label>Contact Type: </label><br/>
                          <div className="form-check form-check-inline">
                              <input  className="form-check-input" 
                                      type="radio" 
                                      name="priorityOptions" 
                                      id="personal" 
                                      value="Personal"
                                      checked={this.state.todo_priority==='Personal'} 
                                      onChange={this.onChangeTodoPriority}
                                      />
                              <label className="form-check-label">Personal</label>
                          </div>
                          <div className="form-check form-check-inline">
                              <input  className="form-check-input" 
                                      type="radio" 
                                      name="priorityOptions" 
                                      id="professional" 
                                      value="Professional" 
                                      checked={this.state.todo_priority==='Professional'} 
                                      onChange={this.onChangeTodoPriority}
                                      />
                              <label className="form-check-label">Professional</label>
                          </div>
                      </div>
                      <div className="form-group">
                          <input type="submit" value="Update Contact" className="btn btn-primary col-md-12" />
                      </div> 
                      <div className="form-group">
                          <input type="button" value="Clear" className="btn btn-dark col-md-12" />
                      </div>
                  </form>
                </div>
                <div class="col-sm-6 col-md-6">
                    <TodosList onDelete={() => this.onDelete()} />
                </div>
            </div>
        )
    }
}