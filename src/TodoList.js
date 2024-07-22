import { useState } from "react"

function TodoList() {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleChangeInput = (event) => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        if (task.trim() !== '') {
            setNewTask([...newTask, task])
            setTask('')
        }
    }

    return (
        <div className="todo-list-container">
            <from>
                <h1>Lista de Tareas</h1>
                <input type="text" value={task} onChange={handleChangeInput}></input>
                <button onClick={addTask}>Agregar</button>
            </from>
        </div>
    )
}
export default TodoList