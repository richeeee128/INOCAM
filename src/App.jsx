import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 공부하기', text: '입문 기초 완강' },
    { id: 2, title: '정리하기', text: '노션에 정리하기' },
    { id: 3, title: '레벨 1 완성하기', text: '화요일까지 완성하기!' },
  ]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const clicked = () => {
    const newTodo = {
      id: Date.now(),
      title,
      text,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle('');
    setText('');
  };

  const removeBtn = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  const toggleDone = (id) => {
    const updateTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTodo(updateTodo);
  };

  const workingTodos = todo.filter((item) => !item.isDone);
  const doneTodos = todo.filter((item) => item.isDone);

  return (
    <div className='layout'>
      <div className='Header'>
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <div className='inputbox'>
        <div className='input'>
          제목 <input value={title} onChange={titleChangeHandler} />
        </div>
        <div className='input'>
          내용 <input value={text} onChange={textChangeHandler} />
        </div>
        <button className='creatBtn' onClick={clicked}>
          추가하기
        </button>
      </div>
      <h4>Working... 💻</h4>
      <div className='Working'>
        {workingTodos.map((item) => (
          <div key={item.id} className='content'>
            <h2>{item.title}</h2>
            {item.text}
            <br />
            <button
              className='delete'
              onClick={() => {
                removeBtn(item.id);
              }}
            >
              삭제
            </button>
            <button
              className='done'
              onClick={() => {
                toggleDone(item.id);
              }}
            >
              {item.isDone ? '취소' : '완료'}
            </button>
          </div>
        ))}
      </div>
      <h4>Done...! 🏖️</h4>
      <div className='Done'>
        {doneTodos.map((item) => (
          <div key={item.id} className='content'>
            <h2>{item.title}</h2>
            {item.text}
            <br />
            <button
              className='delete'
              onClick={() => {
                removeBtn(item.id);
              }}
            >
              삭제
            </button>
            <button
              className='done'
              onClick={() => {
                toggleDone(item.id);
              }}
            >
              {item.isDone ? '취소' : '완료'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
