import React, { useReducer, useState } from 'react'
import Task from './Task';
import './TasksList.scss';

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
        if(!taskText){
            return;
        }

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
            <section className="tasks-list">
                <section className='tasks-header'>
                    {tasks.length === 0 ? <h1>There are no pending tasks. Lucky!</h1> : ''}
                    <h2>To-do:</h2>
                </section>
                <section className="tasks-body">
                    <input type="text" placeholder="I have to..." onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
                    <button className="add-task-button" onClick={() => addTask() }>+</button>
                    <ul>
                        {tasks.map((task) => {
                            return (
                                <>
                                    <Task task={task} onCompleteTask={completeTask}></Task>
                                </>
                            )
                        })}
                    </ul>
                </section>
            </section>
        </>
    );
}