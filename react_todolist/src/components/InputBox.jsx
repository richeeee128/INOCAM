function InputBox({
  title,
  text,
  titleChangeHandler,
  textChangeHandler,
  clickedAddTodo,
}) {
  return (
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
  );
}

export default InputBox;
