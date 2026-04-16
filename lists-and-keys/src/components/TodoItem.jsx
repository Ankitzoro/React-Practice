
import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      margin: '10px 0',
      padding: '10px',
      backgroundColor: '#f5f5f5'
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{
        marginLeft: '10px',
        flex: 1,
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;