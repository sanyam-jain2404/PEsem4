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
import { useState } from "react";
export default function EventTodo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();

        const taskValue = task.trim();

        if (taskValue === "") {
            alert("Cannot add empty task");
            return;
        }

        setTasks((prevTasks) => [...prevTasks, taskValue]);
        setTask("");
    }

    function handleDelete(index) {
        setTasks((prevTasks) =>
            prevTasks.filter((_, i) => i !== index)
        );
    }


    return (
        <>
            <h1>To Do List</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button
                            className="deleteBtn"
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}