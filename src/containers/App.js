import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodos } from '../actions/todos';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import Router from '../routes/index';


class App extends Component {

  constructor(props) {
    super(props);

    this.addNewTodo = this.addNewTodo.bind(this);
  }

  addNewTodo(event, node) {
    event.preventDefault();
    this.props.addTodo(node.value);
    node.value = '';
  }

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    var input = '';

    return (

      <div className="App" >
        <Router></Router>
        <header className="App-header">
          <h1 className="App-title">Welcome to React + Redux</h1>
          <NavLink to="/add">Add Todo</NavLink>
          <NavLink to="/">List Todos</NavLink>
        </header>
        <div className="App-intro">
          <form onSubmit={(e) => this.addNewTodo(e, input)} >
            <input type="text" name="add_todo" ref={(inputNode) => input = inputNode} />
            <button type="submit">Add Todo</button>
          </form>
        </div>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return <li key={index}>{todo.title}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default withRouter(connect(mapStateToProps, { addTodo, getTodos })(App));
