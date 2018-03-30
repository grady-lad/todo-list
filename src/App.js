import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addItem, createItem, removeItemById } from './utils';
import { Counter, InputGroup, TodoList } from './components';

export class App extends Component {
  
  constructor(props) {
    super(props);
    const { createTodo, initialTodo } = props;
    this.state = {
      count: initialTodo ? 1 : 0,
      todos: initialTodo ? [createTodo({ text: initialTodo })] : [],
    };
  }
  
  handleClickAdd = (todo) => {
    todo && this.setState(({ count, todos }) => {
    const { addTodo, createTodo } = this.props;
    const newTodo = createTodo({ text: todo});
     return  { 
        todos: addTodo(todos, newTodo),
        count: (count + 1)
      }
    });
  };

  handleClickDelete = idToDelete => {
    const { deleteTodo } = this.props;
    this.setState(({ count, todos}) => {
      return {
        todos: deleteTodo(todos, idToDelete),
        count: (count - 1)
      }
    });
  }

  render() {
    const { todo, todos, count } = this.state;
    const { className } = this.props;
    return (
      <div className={className}>
        <h1>todos</h1>
        <Counter count={count} />
        <TodoList 
          handleClick={this.handleClickDelete} 
          todos={todos} />
        <InputGroup onSubmit={this.handleClickAdd}/>
      </div>
    )
  }
}

App.defaultProps = {
  addTodo: addItem,
  deleteTodo: removeItemById,
  createTodo: createItem,
  className: 'todo-list',
  initialTodo: 'Add your first todo',
};

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  className: PropTypes.string,
  initialTodo: PropTypes.string,
};
