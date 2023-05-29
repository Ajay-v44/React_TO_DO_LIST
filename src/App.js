import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      const currentDate = new Date();
      const dateTimeString = currentDate.toLocaleString();
      const newTodo = {
        id: Date.now(),
        text: toDo,
        status: false,
        dateTime: dateTimeString,
      };
      setToDos([...toDos, newTodo]);
      setToDo('');
    }
  };
  
  const handleCheckboxChange = (id, checked) => {
    setToDos((prevToDos) =>
      prevToDos.map((todo) =>
        todo.id === id ? { ...todo, status: checked } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
  };

  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
    return formattedTime;
  };
  
  

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>Ajay,'s ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {new Date().toLocaleDateString('en-US', { weekday: 'long' })} 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className={`todo ${obj.status ? 'completed' : ''}`} key={obj.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={obj.status}
                onChange={(e) =>
                  handleCheckboxChange(obj.id, e.target.checked)
                }
              />
              <p>{obj.text}</p>
              <p className="datetime">{formatTime(obj.dateTime)}</p>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => handleDeleteTodo(obj.id)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
