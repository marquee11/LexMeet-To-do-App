import React, { useState, useEffect } from 'react';
import './Todo.css';
import logo from '../assets/LexMeet White Logo.png'
import add from '../assets/Add.png'
import clear from '../assets/Clear.png'
import edit from '../assets/Edit.png'
import done from '../assets/Done.png'
import undo from '../assets/Undo.png'
import del from '../assets/Delete.png'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const updateTodoStatus = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const confirmed = window.confirm('Are you sure you want to clear this todo?');
    if (confirmed) {
      const filteredTodos = todos.filter(todo => todo.id !== id);
      setTodos(filteredTodos);
    }
  };

  const deleteAllTodos = () => {
    const confirmed = window.confirm('Are you sure you want to delete all todos?');
    if (confirmed) {
      setTodos([]);
    }
  };

  const markAllDone = () => {
    const updatedTodos = todos.map(todo => ({ ...todo, done: true }));
    setTodos(updatedTodos);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} style={{width: '295px', height: '45px'}} alt="Logo" />
      </nav>
      <div className="container">
        <h2>To-do List</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add new todo"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo} className="icon-button">
            <img src={add} style={{ width: '24px', height: '24px' }} alt="Add" />
          </button>
        </div>
        {todos.length > 0 && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th className="fixed-column"><span>Todo List</span></th>
                  <th><span>Status</span></th>
                  <th><span>Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {todos.map(todo => (
                  <tr key={todo.id}>
                    <td className="fixed-column" style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</td>
                    <td>{todo.done ? 'Done' : 'Undone'}</td>
                    <td>
                      <div className="icon-container">
                        {todo.done ? (
                          <button onClick={() => updateTodoStatus(todo.id)} className="icon-button">
                            <img src={undo} style={{ width: '20px', height: '20px' }} alt="Undone" />
                          </button>
                        ) : (
                          <button onClick={() => updateTodoStatus(todo.id)} className="icon-button">
                            <img src={done} style={{ width: '20px', height: '20px' }} alt="Done" />
                          </button>
                        )}
                        <button onClick={() => updateTodo(todo.id, prompt('Edit Todo:', todo.text))} className="icon-button">
                          <img src={edit} style={{ width: '20px', height: '20px' }} alt="Edit" />
                        </button>
                        <button onClick={() => deleteTodo(todo.id)} className="icon-button">
                          <img src={clear} style={{ width: '20px', height: '20px' }} alt="Delete" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {todos.length > 0 && (
          <div className="actions">
            <button onClick={deleteAllTodos} className="icon-button">
              <img src={del} style={{ width: '20px', height: '20px' }} alt="Delete All" />
              <span>Delete All</span> 
            </button>
            <button onClick={markAllDone} className="icon-button">
              <img src={done} style={{ width: '20px', height: '20px' }} alt="Done All" />
              <span>Done All</span> 
            </button>
          </div>
        )}
        {todos.filter(todo => todo.done).length > 0 && (
         <div className="completed-tasks">
            <h2>Completed Tasks</h2>
            <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th className="fixed-column"><span>Todo List</span></th>
                    <th><span>Status</span></th>
                    <th><span>Actions</span></th>
                </tr>
                </thead>
                <tbody>
                {todos.filter(todo => todo.done).map(todo => (
                    <tr key={todo.id}>
                    <td className="fixed-column" style={{ textDecoration: 'line-through' }}>{todo.text}</td>
                    <td>Done</td>
                    <td>
                        <div className="icon-container">
                        <button onClick={() => updateTodoStatus(todo.id)} className="icon-button">
                            <img src={undo} alt="Undone" />
                        </button>
                        <button onClick={() => updateTodo(todo.id, prompt('Edit Todo:', todo.text))} className="icon-button">
                            <img src={edit} alt="Edit" />
                        </button>
                        <button onClick={() => deleteTodo(todo.id)} className="icon-button">
                            <img src={clear} alt="Delete" />
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
