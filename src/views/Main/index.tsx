import React, { useEffect, useState } from 'react'
import './style.css';
import moment from 'moment';
import TaskItem from 'components/TaskItem';
import { Task } from 'types';
import axios from 'axios';
import { GetSearchDateResponseDto } from 'apis/response';

export default function Main() {

  const [today, setToday] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {    
    const today = moment().format('YYYY-MM-DD');
    setToday(today);

    axios.get(`http://localhost:4000/search/date/${today}`).then(response => {
      const responseBody: GetSearchDateResponseDto = response.data;
      const { taskList } = responseBody;
      setTaskList(taskList);
    })
    .catch(error => { });

  }, []);

  return (
    <div id='main-wrapper'>
      <div className='main-date-container'>
        <span className='main-date-badge'>{today}</span>
      </div>
      <div className='main-container'>
        <div className='main-today-box'>
          <div className='main-box-title'>TODAY</div>
          <div className='main-box-container'>
            { taskList.map((taskItem) => <TaskItem taskItem={taskItem} />) }
          </div>
        </div>
        <div className='main-todo-box'>
          <div className='main-box-title'>TO-DO</div>
          <div className='main-box-container'>
          <div className='todo-item-card'>
          <div className='todo-item-main-container'>
            <div className='todo-item-top'></div>
            <div className='todo-item-title'>Task 찾기
            <div className='todo-search-badge'>▼<div className='todo-search-icon'></div></div></div>
            <div className='todo-item-bottom'></div>
          </div>
          </div>
          <div className='todo-item-card'>
          <div className='todo-item-main-container'>
            <div className='todo-item-top'></div>
            <div className='todo-item-title'>새로운 Task 등록하기</div>
            <div className='todo-item-bottom'></div>
          </div>
          </div>
          <div className='todo-item-card'>
          <div className='todo-item-main-container'>
            <div className='todo-item-top'></div>
            <div className='todo-item-title'>TO-DO List 조회하기</div>
            <div className='todo-item-bottom'></div>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
  )
}

const taskListMock: Task[] = [
  {
    number: 1,
    taskName: '마라탕 먹기',
    date: '2023-08-27',
    time: '11:00',
    category: '약속',
    status: false
  },
  {
    number: 2,
    taskName: '면접',
    date: '2023-08-27',
    time: '15:00',
    category: '일',
    status: false
  },
  {
    number: 3,
    taskName: '낮잠자기',
    date: '2023-08-27',
    time: '16:00',
    category: '기타',
    status: false
  }
];
