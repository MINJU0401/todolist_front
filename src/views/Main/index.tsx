import React, { useEffect, useState } from 'react'
import './style.css';
import moment from 'moment';
import TaskItem from 'components/TaskItem';
import { Task } from 'types';

export default function Main() {

  const [today, setToday] = useState<string>('');

  useEffect(() => {    
    const today = moment().format('YYYY-MM-DD');
    setToday(today);
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
            { taskListMock.map((taskItem) => <TaskItem taskItem={taskItem} />) }
          </div>
        </div>
        <div className='main-todo-box'>
          <div className='main-box-title'>TO-DO</div>
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
