import React, { useReducer, useState } from 'react'
import Task from './Task';

export default function TaskList() {
    const [taskText, setTaskText] = useState('');

    const tasksHandler = (state, action) => {
        switch(action.type){
            case 'add':
                return [...state, {id: state.length + 1, name: action.name}]
            case 'complete':
                return state.map((item) => item != action.task ? item : {id: item.id, name: item.name, completed: true});
        }
    }

    const addTask = () =>{
        dispatch({type: 'add', name:taskText});

        clearTaskText();
    }

    const completeTask = (task) => {
        dispatch({type: 'complete', task:task});
    }

    const clearTaskText = () => {
        setTaskText('');
    }

    const [tasks, dispatch] = useReducer(tasksHandler, []);

    return (
        <>
            <h1>Here's your list of pending tasks:</h1>
            {tasks.length === 0 ? <h2>There are no pending tasks. Lucky!</h2> : ''}
            <input type="text" placeholder="I have to..." onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
            <button className="add-task-button" onClick={() => addTask() }>ADD</button>
            <ul>
                {tasks.map((task) => {
                    return (
                        <>
                            <Task task={task} onCompleteTask={completeTask}></Task>
                        </>
                    )
                })}
            </ul>
        </>
    );
}