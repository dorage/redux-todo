import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => {
      const { id, completed, text } = todo;
      return (
        <Todo
          key={todo.id}
          id={id}
          completed={completed}
          text={text}
          onClick={() => toggleTodo(todo.id)}
        />
      );
    })}
  </ul>
);

TodoList.prototype = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
