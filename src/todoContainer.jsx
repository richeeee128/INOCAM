function TodoContainer({ item, removeBtn, toggleState }) {
  return (
    <div key={item.id} className='content'>
      <h3>{item.title}</h3>
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
          toggleState(item.id);
        }}
      >
        {item.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
}
export default TodoContainer;
