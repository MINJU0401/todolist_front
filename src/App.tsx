import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from 'views/Main';
import Post from 'views/Post';
import Todo from 'views/List/Todo';
import Completed from 'views/List/Completed';
import Overdue from 'views/List/Overdue';
import Update from 'views/Update';

function App() {
  return (
    <div id='wrapper'>
      <div className='main-title'>Todo list</div>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/post' element={<Post />} />
        <Route path='/patch/:taskNumber' element={<Update />} />
        <Route path='/unfinished' element={<Todo />} />
        <Route path='/finished' element={<Completed />} />
        <Route path='/passed' element={<Overdue />} />
      </Routes>
    </div>
  );
}

export default App;
