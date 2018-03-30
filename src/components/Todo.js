import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const TodoList  = ({ todos, completedMsg, handleClick}) => {
  if(todos.length) {
    return todos.map(({ text, id }) => (
      <Todo 
        key={id} 
        onClick={() => handleClick(id)}
        text={text} />
    ));
  };
  return (<div>{ completedMsg }</div>);
}
TodoList.defaultProps = {
  completedMsg: 'You\'re all done 🌴',
  todos: [],
  handleClick : () => {},
};
TodoList.propTypes = {
  completedMsg: PropTypes.string,
  todos: PropTypes.arrayOf(PropTypes.shape({})),
  handleClick : PropTypes.func,
};

export const Todo = ({ text, onClick, className }) =>  {
  return (
    <div className={className}>
      {text}
      <span onClick={onClick}>&times;</span>
    </div>
  );
};
Todo.defaultProps = {
  text: '',
  onClick: () => {},
  className: 'todo-item',
};
Todo.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

