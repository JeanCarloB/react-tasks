import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'
function TaskCard({ task}) {
    const{deleteTask} = useContext(TaskContext);
    return (
            <div className='bg-gray-900 text-white p-4 rounded-md'>
                <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
                <p className='text-sm text-gray-500'>{task.description}</p>
                <button className='p-1.5 bg-red-600 mt-2 rounded-md hover:bg-red-400' onClick={() => deleteTask(task.id)}>Eliminar</button>
            </div>
    )
}

export default TaskCard