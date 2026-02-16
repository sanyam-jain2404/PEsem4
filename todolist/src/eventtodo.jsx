// export default function EventTodo() {
    
//     function handleSubmit(e){  // form submit event handler
//         e.preventDefault(); // to prevent page refresh on form submit
//         const input = e.target.task; // get value of input field
//         const taskValue = input.value.trim(); // remove leading and trailing whitespace
//         if(taskValue===""){
//             alert("Task cannot be empty");
//             return;
//         }
//         const li=document.createElement("li"); // create new list item
//         li.innerHTML=`<span>${taskValue}</span>
//         <button class="deleteBtn">Delete</button>`;
//         document.getElementById("taskList").appendChild(li);

//     }
//     function handleClickList(e){ // click event handler for task list
//         if(e.target.className=="deleteBtn"){ // check if delete button is clicked
//             e.target.parentElement.remove(); // remove the list item
//         }}
//         return(
//         <>
//         <h1>To Do App</h1>

//         <form onSubmit= {handleSubmit}>
//             <input type="text" name="task" placeholder="Enter Task"/>
//             <button type="submit">Add Task</button>
//         </form>
//         <ul id="taskList" onClick={handleClickList}>
//             <li></li>
//         </ul>
//         </>
//     )
// }

//==============================================================================================

export default function EventTodo() {
    const[tasks, setTasks] = useState([]); // state to hold list of tasks
    const [taskInput, setTaskInput] = useState(""); // state to hold current input value
    function handleSubmit(e){  // form submit event handler
        e.preventDefault(); // to prevent page refresh on form submit
        const input = e.target.task; // get value of input field
        const taskValue = input.value.trim(); // remove leading and trailing whitespace
        if(taskValue===""){
            alert("Task cannot be empty");
            return;
        }
        const li=document.createElement("li"); // create new list item
        li.innerHTML=`<span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>`;
        document.getElementById("taskList").appendChild(li);

    }
    function handleClickList(e){ // click event handler for task list
        if(e.target.className=="deleteBtn"){ // check if delete button is clicked
            e.target.parentElement.remove(); // remove the list item
        }}
        return(
        <>
        <h1>To Do App</h1>

        <form onSubmit= {handleSubmit}>
            <input type="text" name="task" placeholder="Enter Task"/>
            <button type="submit">Add Task</button>
        </form>
        <ul id="taskList" onClick={handleClickList}>
            <li></li>
        </ul>
        </>
    )
}