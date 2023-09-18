import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/list/TodoList";
import { PlusOutlined  } from '@ant-design/icons';
function TodoApp() {
  //declaring state
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  //adding a todo item
  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  //complete todo
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  //removing todo item from the state
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Manage My Task</h1>
        <div>
          <input
            className="input-item"
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
       <button className="btn-item" onClick={addTodo}>
          <PlusOutlined style={{fontWeight:'bold'}} size={10} /> Add
        </button>
        </div>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default TodoApp;
