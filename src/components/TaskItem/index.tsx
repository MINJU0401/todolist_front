import React from 'react'
import './style.css';
import {Task} from 'types';

interface Props {
  taskItem: Task;
}


export default function TaskItem({ taskItem }: Props) {

  const { category, taskName, date, time, status, number } = taskItem;

  return (
    <div className='task-item-card'>
      <div className='task-item-category'>{category}</div>
      <div className='task-item-main-container'>
        <div className='task-item-title'>{taskName}</div>
        <div className='task-item-date'>{date} | {time} 까지</div>
      </div>
      <div className='task-item-bottom'>
          <div className='task-item-status'>{status ? '복원' : '완료'}</div>
      </div>
    </div>
  )
}
