import React, { useEffect, useState } from 'react'
import TaskItem from 'components/TaskItem';
import './style.css';
import { Task } from 'types';
import { GetUnfinishedTaskListResponseDto } from 'apis/response';
import axios from 'axios';

export default function Todo() {

  const [taskList, setTaskList] = useState<Task[]>([]);

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
      <span className='list-todo-badge'>할 일 (TO-DO)</span>
      <span className='list-completed-badge'>한 일 (Completed)</span>
      <span className='list-overdue-badge'>안한 일 (Overdue)</span>
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