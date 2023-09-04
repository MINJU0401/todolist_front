import React, { ChangeEvent, useState, MouseEvent } from 'react'
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Post() {

  const [taskName, setTaskName] = useState<string>('');
  const [category, setCategory] = useState<string>('일');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>(''); 

  const navigator = useNavigate();

  const onTaskNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const taskName = event.target.value;
    setTaskName(taskName);
  }

  const onCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setCategory(category);
  }

  const onDateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setDate(date);
  }

  const onTimeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value;
    setTime(time);
  }

  const onCancelClickHandler = () => {
    navigator('/'); 
  }

  const onSubmitClickHandler = () => {
    if (!taskName || !taskName.trim() || !date || !date.trim() || !time || !time.trim() || !category || !category.trim()) return;
    const requestBody = {
      taskName, 
      date,
      time,
      category      
    }
    axios.post('http://localhost:4000', requestBody)
      .then(response => {
        const { code } = response.data;
        if (code !== 'SU') return;
        alert('등록에 성공했습니다.');
        navigator('/');
      })
  }

  return (
    <div id='post-task-wrapper'>
      <div className='post-task-container'>
        <div className='post-box-title'>Task 등록</div>
        <div className='post-box-container'>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>내용</div>
          <div className='post-title-input-badge'>
            <input type="text" value={taskName} onChange={onTaskNameChangeHandler} /></div></div>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>카테고리</div>
          <div className='post-title-input-badge'>
            <select name="category" value={category} onChange={onCategoryChangeHandler} >
              <option value="일">일</option>
              <option value="약속">약속</option>
              <option value="기타">기타</option>
            </select>
          </div></div>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>날짜</div>
          <div className='post-title-input-badge'>
            <input type="date" value={date} onChange={onDateChangeHandler} /></div></div>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>시간</div>
          <div className='post-title-input-badge'>
            <input type = "time" value={time} onChange={onTimeChangeHandler} /></div>
        </div>
        </div>
        <div className='post-box-bottom'>
          <button className='post-task-button' onClick={onSubmitClickHandler}>등록</button>
          <button className='post-task-button' onClick={onCancelClickHandler}>취소</button>
        </div>
        </div>
        </div>
  )
}
