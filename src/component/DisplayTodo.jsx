import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux"
import './DisplayTodo.css'
import { useState } from "react";
import { updateTodo } from "../Redux/todoreducer";

function DisplayTodo (){
    const [showModal, setShowModal] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [sort, setSort] = useState("all")
    const dispatch = useDispatch()
    const todos = useSelector((state)=> state.todos)
    const handleUpdate = (id,title) => {
          dispatch(updateTodo({ title: title, id: id }));
          setShowModal(false);
        };
    return(
        <> 
            {showModal && (
                <div className="modal">
                    <div className="modalContent">
                        <input 
                            type="text"
                            value={newTitle}
                            onChange={(e)=> setNewTitle(e.target.value)}
                            placeholder={currentTodo ? "Update your task here" : "Enter your task here"} />
                        <div className="buttonModal">
                            <button className="btnUpdate" onClick={() => {setShowModal(false);handleUpdate(currentTodo.id, newTitle);}}>Update</button>
                            <button className="btnCancel" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="filter">
                <span id="All" className={sort == "all" ? 'all' : ''} onClick={()=> setSort("all")} >All</span>
                <span id="Active" className={sort == "active" ? 'active' : ''} onClick={()=> setSort("active")}>Active</span>
                <span id="Complete" className={sort == "completed" ? 'completed' : ''} onClick={()=> setSort("completed")}>Complete</span>
            </div>

            {todos.length > 0 && sort === "all" ? todos.map((todo) => (
                <ul key={todo.id}>
                    <TodoList id={todo.id} title ={todo.title} completed = {todo.completed} setShowModal = {setShowModal} setCurrentTodo = {setCurrentTodo} setNewTitle = {setNewTitle}/>
                </ul>
            ))
            :null}
            {todos.length > 0 && sort === "active" ? todos.map((todo) => (
                todo.completed === false &&(
                <ul key={todo.id}>
                    <TodoList id={todo.id} title ={todo.title} completed = {todo.completed} setShowModal = {setShowModal} setCurrentTodo = {setCurrentTodo} setNewTitle = {setNewTitle}/>
                </ul>
                )
            ))
            :null}
            {todos.length > 0 && sort === "completed" ? todos.map((todo) => (
                todo.completed === true &&(
                <ul key={todo.id}>
                    <TodoList id={todo.id} title ={todo.title} completed = {todo.completed} setShowModal = {setShowModal} setCurrentTodo = {setCurrentTodo} setNewTitle = {setNewTitle}/>
                </ul>
                )
            ))
            :null}
        </>
    )
}
export default DisplayTodo