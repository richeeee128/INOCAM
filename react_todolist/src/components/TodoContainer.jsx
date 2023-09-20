function TodoContainer({ item, removeBtn, toggleState }) {
  const removeTodoHandler = () => {
    removeBtn(item.id);
  };
  const toggleStateoHandler = () => {
    toggleState(item.id);
  };

  return (
    <div key={item.id} className='content'>
      <h3>{item.title}</h3>
      {item.text}
      <br />
      <button className='delete' onClick={removeTodoHandler}>
        삭제
      </button>
      <button className='done' onClick={toggleStateoHandler}>
        {item.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
}
export default TodoContainer;
