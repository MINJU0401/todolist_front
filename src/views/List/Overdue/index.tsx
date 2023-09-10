import React, { useEffect, useState } from 'react'
import TaskItem from 'components/TaskItem';
import './style.css';
import { Task } from 'types';
import axios from 'axios';
import { GetPassTaskListResponseDto } from 'apis/response';
import { useNavigate } from 'react-router-dom';

export default function Overdue (){

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

  const onPostTaskClickHandler = () => {
    navigator('/post')
  }

  const onPatchTaskClickHandler = () => {
    axios.patch('http://localhost:4000/update', {})
    navigator('/patch')
  }

  const onDeleteTaskClickHandler = () => {
    navigator('/delete')
  }

  const onChangeStatus = (number: number) => {
    axios.patch('http://localhost:4000/update', { number })
    .then(() => {
      axios.get('http://localhost:4000/passed').then(response => {
        const responseBody: GetPassTaskListResponseDto = response.data;
        const { taskList } = responseBody;
        setTaskList(taskList);
      })
      .catch(error => { });
    })
  }

  useEffect(() => {

    axios.get(`http://localhost:4000/passed`).then(response => {
      const responseBody: GetPassTaskListResponseDto = response.data;
      const { taskList } = responseBody;
      setTaskList(taskList);
    })
    .catch(error => { });
  }, []);

  return(
    <div id='list-overdue-wrapper'>
      <div className='list-overdue-container'>
      <span className='list-overdue-todo-badge' onClick={onGetTodoTaskListClickHandler}>할 일 (TO-DO)</span>
      <span className='list-overdue-completed-badge' onClick={onGetFinishedTaskListClickHandler}>한 일 (Completed)</span>
      <span className='list-overdue-overdue-badge' onClick={onGetPassedTaskListClickHandler}>안한 일 (Overdue)</span>
      <div className='list-overdue-post-icon' onClick={onPostTaskClickHandler} />
      <div className='list-overdue-patch-icon' onClick={onPatchTaskClickHandler} />
      <div className='list-overdue-delete-icon' />
      </div>
      <div className='list-container'>
        <div className='list-overdue-box'>
          <div className='list-overdue-box-container'>
            { taskList.map((taskItem) => <div className='task-item'><TaskItem taskItem={taskItem} onClick={onChangeStatus} /></div>) }
          </div>
        </div>
    </div>    
    <div className='list-overdue-bottom'></div>
    </div>
  )
}