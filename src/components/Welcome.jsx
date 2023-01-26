import React from 'react';

export default function Welcome(props) {
  return (
    <div>
      <div className='welcome-box'>
        <div className='welcome'>Welcome to the Email World!</div>
        <button className='start-btn' onClick={props.isClicked}>
          START{' '}
        </button>
      </div>
    </div>
  );
}
