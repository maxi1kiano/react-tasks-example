import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { mocks as data } from '../data/data'

/*
El contexto va a contenter el json de tareas, la funcion createTask y deleteTask
Cualquier componente dentro del contexto va a poder acceder a las propiedades y funciones
*/
export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(task) {
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          body: task.description,
          email: 'mnuniez@gmail.com'
        }])
  
        console.log("Total de tareas = ", tasks.length)
    }
  
    function deleteTask(id) {
        console.log(id)
        setTasks(tasks.filter(task => task.id !== id))
    }

    // [] cargar las tareas al inicio del componente unicamente
    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}