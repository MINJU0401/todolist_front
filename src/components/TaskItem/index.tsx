import React from 'react'
import './style.css';
import {Task} from 'types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Props {
  taskItem: Task;
  onClick: (number: number) => void;
  selectedTaskNumber: number | null; 
  setSelectedTaskNumber: (number: number | null) => void;
}


export default function TaskItem({ taskItem, onClick, selectedTaskNumber, setSelectedTaskNumber }: Props) {

  const { category, taskName, date, time, status, number } = taskItem;


  const navigator = useNavigate();


  return (
    <div className='task-item-card'>
      <div className='task-item-category'>{category}</div>
      <div className='task-item-main-container'>
        <div className="title-and-checkbox">
          <input type="radio" name="uniqueRadioName" className="task-item-radio" checked={number === selectedTaskNumber} onChange={() => setSelectedTaskNumber(number)}/>
          <div className='task-item-title'>{taskName}</div>
        </div>
        <div className='task-item-date'>{date} | {time} 까지</div>
      </div>
      <div className='task-item-bottom'>
          <div className='task-item-status' onClick={() => onClick(number)}>{status ? '복원' : '완료'}</div>
      </div>
    </div>  
  )
}
