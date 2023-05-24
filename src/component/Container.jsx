import TodoList from "./todoList"
function Container (){
    return(
        <>
            <div class="container">
                <div class="task-input">
                    <input type="text" placeholder="Add a new task"/>
                    <span id="add">add</span>
                </div>
                <div class="filter">
                    <span id="All">All</span>
                    <span id="Active">Active</span>
                    <span id="Complete">Complete</span>
                </div>
                <ul>
                    <TodoList />
                    <TodoList />
                </ul>
            </div>
        </>
    )
}
export default Container