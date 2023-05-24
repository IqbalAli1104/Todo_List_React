import editIcon from '../assets/create-outline.svg'
import deleteIcon from '../assets/trash-outline.svg'

function TodoList (){
    return(
    <>
        <li class="task">
            <label for="1">
                <input type="checkbox" id="1"/>
                <p>mengerjakan tugas to do list dan lain</p>
                <img src={editIcon} alt="" width="25px" height="25px"/>
                <img src={deleteIcon} alt="" width="25px" height="25px"/>
            </label>
        </li>
    </>
    )
}
export default TodoList