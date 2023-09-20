import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([{ id: 0, content: 'react를 배워봅시다.' }]);
  const [content, setContent] = useState('');

  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const inputBtn = () => {
    const newTodo = {
      id: Date.now(),
      content,
    };
    setTodo([...todo, newTodo]);
    setContent('');
  };

  return (
    <div className='container'>
      <div className='inputBox'>
        <input type='text' value={content} onChange={contentHandler} />
        <button onClick={inputBtn}>추가하기</button>
      </div>
      <h1 className='header'>Todo List</h1>
      <div className='todos'>
        {todo.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
