import React, { useEffect, useState } from 'react'
import TaskItem from 'components/TaskItem';
import './style.css';
import { Task } from 'types';
import { GetUnfinishedTaskListResponseDto } from 'apis/response';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Todo() {

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

    axios.get(`http://localhost:4000/unfinished`).then(response => {
      const responseBody: GetUnfinishedTaskListResponseDto = response.data;
      const { taskList } = responseBody;
      setTaskList(taskList);
    })
    .catch(error => { });
  }, []);

  return(    
    <div id='list-todo-wrapper'>
      <div className='list-todo-container'>
      <span className='list-todo-badge' onClick={onGetTodoTaskListClickHandler}>할 일 (TO-DO)</span>
      <span className='list-completed-badge' onClick={onGetFinishedTaskListClickHandler}>한 일 (Completed)</span>
      <span className='list-overdue-badge' onClick={onGetPassedTaskListClickHandler}>안한 일 (Overdue)</span>
      </div>
      <div className='list-container'>
        <div className='list-todo-box'>
          <div className='list-todo-box-container'>
            { taskList.map((taskItem) => <div className='task-item'><TaskItem taskItem={taskItem} /></div>) }
          </div>
        </div>
    </div>    
    <div className='list-todo-bottom'></div>
    </div>
  )

}