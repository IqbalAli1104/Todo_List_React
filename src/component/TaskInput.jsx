import { useState } from 'react'
import './TaskInput.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/todoreducer'

function TaskInput(){
    const [value,setValue] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault(),
        dispatch(addTodo({
            title:value,
        }))
    }
    return(
        <>
            <div className="task-input">
                <form onSubmit={onSubmit} className='task-input'>
                    <input 
                        type="text" 
                        placeholder="Add a new task"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}/>
                    <button id='add'>Add</button>
                </form>
            </div>
        </>
    )
}
export default TaskInput