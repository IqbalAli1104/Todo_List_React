import { useDispatch } from 'react-redux'
import editIcon from '../assets/create-outline.svg'
import deleteIcon from '../assets/trash-outline.svg'
import './TodoList.css'
import { deletetodo, toggleComplete } from '../Redux/todoreducer'

function TodoList ({id, title, completed, setShowModal,setCurrentTodo,setNewTitle}){
    const dispatch = useDispatch()
    const handleComplete = () => {
        dispatch(toggleComplete({id : id, completed: !completed}))
    }
    const handleDelete = () => {
        dispatch(deletetodo({id : id}))
    }
    return(
    <>
        <li className="task">
            <label>
                <input 
                    type="checkbox" 
                    id={id}
                    checked={completed}
                    onChange={handleComplete}/>
                <p className={`${completed && 'checked'}`}>{title}</p>
                <button 
                    onClick={() => {
                    setShowModal(true);
                    setCurrentTodo({id : id, title:title});
                    setNewTitle(title);
                    }}><img src={editIcon} alt="" width="25px" height="25px"/></button>
                <button onClick={handleDelete}><img src={deleteIcon} alt="" width="25px" height="25px"/></button>
            </label>
        </li>
    </>
    )
}
export default TodoList