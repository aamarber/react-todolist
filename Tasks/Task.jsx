import React from 'react'
import './Task.scss';

function Task({task, onCompleteTask}) {
    const completeTask = (task) =>{
        onCompleteTask(task);
    }
  return (
    <li key={task.id} className='task'>
        <span className={"task-name" + (task.completed ? ' task-completed' : '')}>
            {task.name}
        </span>
        
        {task.completed ? 
            <span className="completed-sign">✓</span> : 
            <button className="complete-task-button" onClick={() => completeTask(task)}>✓</button>
        }
    </li>
  )
}

export default Task