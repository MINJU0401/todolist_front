import React from 'react'
import './style.css';

export default function Update() {
  return (
    <div id='update-task-wrapper'>
      <div className='update-task-container'>
        <div className='update-box-title'>Task 수정</div>
        <div className='update-box-container'>
          <div className='update-item-wrapper'>
          <div className='update-title-badge'>내용</div>
          <div className='update-title-input-badge'>
            <input type="text" /></div></div>
          <div className='update-item-wrapper'>
          <div className='update-title-badge'>카테고리</div>
          <div className='update-title-input-badge'>
          <select name="category">
                <option value="일">일</option>
                <option value="약속">약속</option>
                <option value="기타">기타</option>
              </select></div></div>
          <div className='update-item-wrapper'>
          <div className='update-title-badge'>날짜</div>
          <div className='update-title-input-badge'>
            <input type="date" /></div></div>
          <div className='update-item-wrapper'>
          <div className='update-title-badge'>시간</div>
          <div className='update-title-input-badge'>
            <input type = "time"/></div>
        </div>
        </div>
        <div className='update-box-bottom'>
          <button className='update-task-button'>수정</button>
          <button className='update-task-button'>취소</button>
        </div>
        </div>
        </div>
  )
}
