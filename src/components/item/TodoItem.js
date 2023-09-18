import React from 'react';
import './TodoItem.css'
import { DeleteOutlined,CheckCircleOutlined,MinusCircleOutlined  } from '@ant-design/icons';
function TodoItem({ todo, onDelete, onToggleComplete }) {
  return (
    <li   className={todo.completed ? 'completed' : 'item'}>
      {todo.text}
      <div>
      <button style={{marginRight:10,padding:10}} onClick={onToggleComplete}>
         { todo.completed ?   <MinusCircleOutlined />  : <CheckCircleOutlined />}
      </button>
      <button className='btn-item' onClick={onDelete}>
      <DeleteOutlined style={{fontWeight:'bold'}} size={10} /> 
      </button>
      </div>
    </li>
  );
}

export default TodoItem;

