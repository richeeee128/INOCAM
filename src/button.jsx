function TodoBtn({ item, removeBtn, toggleDone }) {
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
          toggleDone(item.id);
        }}
      >
        {item.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
}
export default TodoBtn;
