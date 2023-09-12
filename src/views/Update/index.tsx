import React, { ChangeEvent, useState, useEffect } from 'react'
import './style.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import GetTaskResponseDto from 'apis/response/get-task.dto';

export default function Update() {
  const [number, setNumber] = useState<number>();
  const [taskName, setTaskName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  
  const navigator = useNavigate();

  const { taskNumber } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/task/${taskNumber}`).then(response => {
      const { number, taskName, date, time, category } = response.data as GetTaskResponseDto;
      setNumber(number);
      setTaskName(taskName);
      setDate(date);
      setTime(time);
      setCategory(category);
    });
  }, [taskNumber]);
  

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

  const onUpdateClickHandler = () => {
    if (!number || !taskName || !taskName.trim() || !date || !date.trim() || !time || !time.trim() || !category || !category.trim()) return;
    const requestBody = {
      number,
      taskName,
      date,
      time,
      category
    }
  axios.patch('http://localhost:4000', requestBody)
  .then(response => {
    const { code } = response.data;
    if (code !== 'SU') return;
    alert('수정에 성공했습니다.');
    navigator('/');
  })

}

  return (
    <div id='update-task-wrapper'>
      <div className='update-task-container'>
        <div className='update-box-title'>Task 수정</div>
        <div className='update-box-container'>
          <div className='update-item-wrapper'>
          <input type="hidden" value={number} />
          <div className='update-title-badge'>내용</div>
          <div className='update-title-input-badge'>
            <input type="text" value={taskName} onChange={onTaskNameChangeHandler} /></div></div>
          <div className='update-item-wrapper'>
          <div className='update-title-badge'>카테고리</div>
          <div className='update-title-input-badge'>
          <select name="category" value={category} onChange={onCategoryChangeHandler} >
                <option value="일">일</option>
                <option value="약속">약속</option>
                <option value="기타">기타</option>
              </select>
            </div></div>
          <div className='update-item-wrapper'>
          <div className='update-title-badge'>날짜</div>
          <div className='update-title-input-badge'>
            <input type="date" value={date} onChange={onDateChangeHandler} /></div></div>
          <div className='update-item-wrapper'>
          <div className='update-title-badge'>시간</div>
          <div className='update-title-input-badge'>
            <input type = "time" value={time} onChange={onTimeChangeHandler} /></div>
        </div>
        </div>
        <div className='update-box-bottom'>
          <button className='update-task-button' onClick={onUpdateClickHandler}>수정</button>
          <button className='update-task-button' onClick={onCancelClickHandler}>취소</button>
        </div>
        </div>
        </div>
  )
  }