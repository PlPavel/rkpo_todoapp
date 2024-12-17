import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
