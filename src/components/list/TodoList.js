import React from 'react';
import TodoItem from '../item/TodoItem';
import './TodoList.css';
function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} onToggleComplete={() => toggleComplete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;

