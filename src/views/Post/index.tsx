import React from 'react'
import './style.css';

export default function Post() {
  return (
    <div id='post-task-wrapper'>
      <div className='post-task-container'>
        <div className='post-box-title'>Task 등록</div>
        <div className='post-box-container'>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>내용</div>
          <div className='post-title-input-badge'>
            <input type="text" /></div></div>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>카테고리</div>
          <div className='post-title-input-badge'>
          <select name="category">
                <option value="일">일</option>
                <option value="약속">약속</option>
                <option value="기타">기타</option>
              </select></div></div>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>날짜</div>
          <div className='post-title-input-badge'>
            <input type="date" /></div></div>
          <div className='post-item-wrapper'>
          <div className='post-title-badge'>시간</div>
          <div className='post-title-input-badge'>
            <input type = "time"/></div>
        </div>
        </div>
        <div className='post-box-bottom'>
          <button className='post-task-button'>등록</button>
          <button className='post-task-button'>취소</button>
        </div>
        </div>
        </div>
  )
}
