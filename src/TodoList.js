import { useState } from "react"

const [task, setTask] = useState([])
const [newTask, setNewTask] = useState()

const handleInputChange = (event) => {
    setNewTask(event.target.task)
}

const handleChangeTask = () => {
    setTask(newTask)
}

const Submit = () => {
    addTask() 

}

<div>
    <form>
        <input type="text" value={newTask} onChange={handleInputChange}></input>
        <button type="submit" onSubmit={Submit}>Submit</button>
    </form>
</div>


function addTask() {
    return (
        
    )
}

export default addTask