import React, { useState } from 'react'
import './ToDoList.css'

//test
export default function ToDoList() {

  const [tasks, setTasks] = useState([
    'Eat Breakfast', 'Take shower', 'Sleep'
  ])
  const [newTasks, setNewTasks] = useState('')

  function handleInput(event) {
    setNewTasks(event.target.value)
  }

  function addTask() {
    if (newTasks.trim !== '') {
      setTasks([...tasks, newTasks])
      setNewTasks('')
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  function upTask(index) {
    if (index > 0) {
      const newTasksArray = [...tasks];
      [newTasksArray[index], newTasksArray[index - 1]] = [newTasksArray[index - 1], newTasksArray[index]];
      setTasks(newTasksArray);
    }
  }

  function downTask(index) {
    if (index != tasks.length - 1) {
      const newTasksArray = [...tasks];
      [newTasksArray[index], newTasksArray[index + 1]] = [newTasksArray[index + 1], newTasksArray[index]];
      setTasks(newTasksArray);
    }
  }


  return (
    <div className='to-do-list'>
      <h1>ToDoList</h1>

      <div>
        <input type="text"
          placeholder='Enter a task...'
          value={newTasks}
          onChange={handleInput} />

        <button className='add-button'
          onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className='text'>{task}</span>
            <button className='delete-button'
              onClick={() => deleteTask(index)}>Delete
            </button>
            <button className='move-button'
              onClick={() => upTask(index)}>Up
            </button>
            <button className='move-button'
              onClick={() => downTask(index)}>Down
            </button>
          </li>
        )}
      </ol>

    </div>
  )
}
