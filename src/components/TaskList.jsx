import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskList() {
    const {tasks,deleteTask} = useContext(TaskContext);
    if (tasks.length === 0) {
        return <h1 className='text-center text-3xl font-extrabold mb-5 text-white'>Arreglo vacio</h1>
    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 text-center gap-2'>
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                ))}
        </div>
    );
}

export default TaskList