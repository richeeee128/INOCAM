import React, { useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import InputBox from './components/InputBox';

function App() {
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const clickedAddTodo = () => {
    const newId = id + 1;
    setId(newId);
    const newTodo = {
      id: newId,
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

  const toggleState = (id) => {
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
      <InputBox
        title={title}
        text={text}
        titleChangeHandler={titleChangeHandler}
        textChangeHandler={textChangeHandler}
        clickedAddTodo={clickedAddTodo}
      />
      <h4>Working... 💻</h4>
      <div className='Working'>
        {workingTodos.map((item) => (
          <TodoContainer
            key={item.id}
            item={item}
            removeBtn={removeBtn}
            toggleState={toggleState}
          />
        ))}
      </div>
      <h4>Done...! 🏖️</h4>
      <div className='Done'>
        {doneTodos.map((item) => (
          <TodoContainer
            key={item.id}
            item={item}
            removeBtn={removeBtn}
            toggleState={toggleState}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
