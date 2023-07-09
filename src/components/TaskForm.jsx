import {TaskContext} from '../context/TaskContext'
import { useState,useContext} from 'react'

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask}=useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle("");
        setDescription("");
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-gray-600 p-10 mb-4'>
                <h1 className='text-3xl font-extrabold mb-5 text-white'>Crea tu tarea 📋🆕⚒️</h1>
                <input placeholder="Escribe tu tarea"
                    className='bg-slate-300 p-3 w-full mb-2'
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    value={title}
                    autoFocus
                ></input>
                <input placeholder="Escribe la descripcion"
                className='bg-slate-300 p-3 w-full mb-2'
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                ></input>
                <button className='text-white p-1.5 bg-blue-600 mt-2 rounded-md hover:bg-blue-400'>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm