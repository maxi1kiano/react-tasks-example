
import React from 'react'
import TaskCard from './TaskCard';
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskList() {
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h4 className='text-white text-4xl font-bold text-center'>No hay tareas para mostrar</h4>
    }

    return (
        <div className='grid grid-cols-5 gap-2'>
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))
            }
        </div>
    )
}

export default TaskList