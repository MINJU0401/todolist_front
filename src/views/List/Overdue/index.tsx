import React, { useEffect, useState } from 'react'
import TaskItem from 'components/TaskItem';
import './style.css';
import { Task } from 'types';
import axios from 'axios';
import { GetPassTaskListResponseDto } from 'apis/response';

export default function Overdue (){

  const [taskList, setTaskList] = useState<Task[]>([]);

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
      <span className='list-overdue-todo-badge'>할 일 (TO-DO)</span>
      <span className='list-overdue-completed-badge'>한 일 (Completed)</span>
      <span className='list-overdue-overdue-badge'>안한 일 (Overdue)</span>
      </div>
      <div className='list-container'>
        <div className='list-overdue-box'>
          <div className='list-overdue-box-container'>
            { taskList.map((taskItem) => <div className='task-item'><TaskItem taskItem={taskItem} /></div>) }
          </div>
        </div>
    </div>    
    <div className='list-overdue-bottom'></div>
    </div>
  )
}