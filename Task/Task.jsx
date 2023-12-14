import React, { useState } from 'react'

function Task({task, onCompleteTask}) {
    const completeTask = (task) =>{
        onCompleteTask(task);
    }
  return (
    <li key={task.id}>
        {<span className="task-name">{task.name}</span>}
        {task.completed ? 
            <span className="completed-sign">Task completed!</span> : 
            <button className="complete-task-button" onClick={() => completeTask(task)}>Mark as completed</button>
        }
    </li>
  )
}

export default Task