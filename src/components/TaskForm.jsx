import React from 'react'
import PropTypes from 'prop-types'
import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

// createTask: es la funcion del componente App.jsx
// desde aca no tengo acceso al array tasks por eso le paso el title como parametro a la funcion
function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title: title,
            description: description
        })
        setTitle('')
        setDescription('')
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className="text-2xl font-bold text-white mb-3">Nueva tarea</h1>
                <input
                    className='bg-slate-300 p-3 w-full mb-2'
                    type="text"
                    placeholder='Escriba una tarea'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    autoFocus />
                <br />
                <textarea
                    className='bg-slate-300 p-3 w-full mb-2'
                    placeholder='Escribe la descripcion de la tarea'
                    onChange={e => setDescription(e.target.value)} 
                    value={description}></textarea>
                <br />
                <button className='bg-blue-500 px-3 py-1 text-white'>Guardar</button>
            </form>
        </div>

    )
}

export default TaskForm