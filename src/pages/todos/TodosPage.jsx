import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
// import { Link } from 'react-router-dom';
import './todos.scss'
import todoStore from './todosStore';
import NavBar from '../navBar/navBar';
import { useNavigate, useParams } from 'react-router-dom';

const TodoList = observer(() => {
  const { todoId } = useParams();
  const navigation = useNavigate();
  const [editedTodo, setEditedTodo] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  const handleEdit = (todoId) => {
    navigation(`/todos/edit/${todoId}`);
    setEditedTodo(todoId);
    const todo = todoStore.todos.find(todo => todo.id === todoId);
    if (todo) {
      setEditedTitle(todo.title);
    }
  };

  const handleCancelEdit = () => {
    navigation('/todos');
    setEditedTodo(null);
    setEditedTitle('');
  };

  const handleSaveEdit = () => {
    todoStore.updateTodoTitle(editedTodo, editedTitle);
    navigation('/todos');
    setEditedTodo(null);
    setEditedTitle('');
  };



  return (
    <main className='container'>
      <NavBar />
      <h2>Todo List</h2>
      <ul className='list__todos'>
       {todoStore.todos.map(todo => (
          <li key={todo.id}>
            {editedTodo === todo.id ? (
              <div className='todo_item'>
                <input type="text" value={editedTitle} onChange={(e) => setEditedTitle( e.target.value)} />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className='todo_item'>
                <span className='todo__item'>{todo.title}</span>
                <button onClick={() => handleEdit(todo.id)} className='edit__btn'>✏️</button>
                <button onClick={() => todoStore.deleteTodo(todo.id)} className='edit__btn'>🗑️</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
});

export default TodoList;