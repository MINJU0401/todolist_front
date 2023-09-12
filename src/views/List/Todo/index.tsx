import React, { useEffect, useState } from 'react'
import TaskItem from 'components/TaskItem';
import './style.css';
import { Task } from 'types';
import { GetUnfinishedTaskListResponseDto } from 'apis/response';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function Todo() {

  const [taskList, setTaskList] = useState<Task[]>([]);
  const [selectedTaskNumber, setSelectedTaskNumber] = useState<number | null>(null);

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
    if (selectedTaskNumber === null) {
      alert('수정할 Task를 선택하세요.');
      return;
  }
  navigator(`/patch/${selectedTaskNumber}`);
}

  const onDeleteTaskClickHandler = () => {
    navigator('/delete')
  }

  const onChangeStatus = (number: number) => {
    axios.patch('http://localhost:4000/update', { number })
    .then(() => {
      axios.get(`http://localhost:4000/unfinished`).then(response => {
        const responseBody: GetUnfinishedTaskListResponseDto = response.data;
        const { taskList } = responseBody;
        setTaskList(taskList);
      })
      .catch(error => { });
    });
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
      <div className='list-todo-post-icon' onClick={onPostTaskClickHandler} />
      <div className='list-todo-patch-icon' onClick={onPatchTaskClickHandler} />
      <div className='list-todo-delete-icon' />
      </div>
      <div className='list-container'>
        <div className='list-todo-box'>
          <div className='list-todo-box-container'>
          {taskList.map((taskItem) => ( 
          <div className='task-item'> 
          <TaskItem taskItem={taskItem} onClick={onChangeStatus} selectedTaskNumber={selectedTaskNumber} setSelectedTaskNumber={setSelectedTaskNumber} />
          </div>
          ))}
        </div>
        </div>
    </div>    
    <div className='list-todo-bottom'></div>
    </div>
  )

}