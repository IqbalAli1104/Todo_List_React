import TaskInput from "./TaskInput"
import DisplayTodo from "./DisplayTodo"
import './Container.css'
import { useSelector } from "react-redux"

function Container (){
    const todos = useSelector((state)=> state.todos)
    return(
        <>  
            <div className="container">
                <TaskInput />
                <DisplayTodo/>
            </div>
        </>
    )
}
export default Container