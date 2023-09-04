import React, { useEffect, useState } from 'react'
import TaskItem from 'components/TaskItem';
import './style.css';
import { Task } from 'types';
import axios from 'axios';
import { GetFinishedTaskListResponseDto } from 'apis/response';
import { useNavigate } from 'react-router-dom';

export default function Completed (){

  const [taskList, setTaskList] = useState<Task[]>([]);

  const navigator = useNavigate();

  const onGetTodoTaskListClickHandler = () => {
    navigator('/unfinished');
  }

  const onGetFinishedTaskListClickHandler = () => {
    navigator('/finished');
  }

  const onGetPassedTaskListClickHandler = () => {
    navigator('/passed');
  }

  useEffect(() => {

    axios.get(`http://localhost:4000/finished`).then(response => {
      const responseBody: GetFinishedTaskListResponseDto = response.data;
      const { taskList } = responseBody;
      setTaskList(taskList);
    })
    .catch(error => { });
  }, []);

  return(
    <div id='list-completed-wrapper'>
      <div className='list-completed-container'>
      <span className='list-completed-todo-badge' onClick={onGetTodoTaskListClickHandler}>할 일 (TO-DO)</span>
      <span className='list-completed-completed-badge' onClick={onGetFinishedTaskListClickHandler}>한 일 (Completed)</span>
      <span className='list-completed-overdue-badge' onClick={onGetPassedTaskListClickHandler}>안한 일 (Overdue)</span>
      </div>
      <div className='list-container'>
        <div className='list-completed-box'>
          <div className='list-completed-box-container'>
            { taskList.map((taskItem) => <div className='task-item'><TaskItem taskItem={taskItem} /></div>) }
          </div>
        </div>
    </div>    
    <div className='list-completed-bottom'></div>
    </div>
  )
}