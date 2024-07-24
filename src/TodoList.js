import { useState } from "react"

function TodoList() {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleChangeInput = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        if (newTask.trim(" ") !== '') {
            setTask([...task, newTask])
            setNewTask('')
        }
    }
    return (
        <div className="todo-list-container">
            <from>
                <h1>Lista de Tareas</h1>
                <input type="text" value={newTask} onChange={handleChangeInput}></input>
                <button onClick={addTask}>Agregar</button>
            </from>
            <ul>
                {task.map((str) => <li>{str}</li>)}
            </ul>
        </div>
    )
}
export default TodoList