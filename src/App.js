import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
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
        {toDos.map((value) => (
          <div className="todo" key={value.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={value.status}
                name=""
                id=""
              />
              <p>{value.text}</p>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
