import React, { useState } from 'react';
import './App.css';
import TodoBtn from './button';

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 공부하기', text: '입문 기초 완강', isDone: false },
    { id: 2, title: '정리하기', text: '노션에 정리하기', isDone: false },
    {
      id: 3,
      title: '레벨 1 완성하기',
      text: '화요일까지 완성하기!',
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const clickedAddTodo = () => {
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
        <button className='creatBtn' onClick={clickedAddTodo}>
          추가하기
        </button>
      </div>
      <h4>Working... 💻</h4>
      <div className='Working'>
        {workingTodos.map((item) => (
          <TodoBtn
            key={item.id}
            item={item}
            removeBtn={removeBtn}
            toggleDone={toggleDone}
          />
        ))}
      </div>
      <h4>Done...! 🏖️</h4>
      <div className='Done'>
        {doneTodos.map((item) => (
          <TodoBtn
            key={item.id}
            item={item}
            removeBtn={removeBtn}
            toggleDone={toggleDone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
