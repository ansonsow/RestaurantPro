import React from 'react'
import "./LinearProgressBar.css"
export default function LinearProgressbar(props) {
  const style = {
    width: `${props.width}%`,
  };
  return (
    <div className='linear-progress-bar'>
        <div className="linear-progress-bar-text">
            <p>Clean the washroom</p>
            <p>120</p>
        </div>
        <div className="linear-progress-bar-progress">
            <div className="linear-progress-bar-percentage" style={style}></div>
        </div>
    </div>
  )
}
