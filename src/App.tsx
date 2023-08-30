import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from 'views/Main';
import Post from 'views/Post';
import Todo from 'views/List/Todo';

function App() {
  return (
    <div id='wrapper'>
      <div className='main-title'>Todo list</div>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/post' element={<Post />} />
        <Route path='/unfinished' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
