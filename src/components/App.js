import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksStateArray, setTasksStateArray] = useState(TASKS)
  const [filter, setFilter] = useState("All")
  //const [isSelected, setIsSelected] = useState(true) className={isSelected ? "Selected" : null }
  
  function handleDelete(text) {
    const filteredTasks = tasksStateArray.filter((task) => task.text !== text);
    setTasksStateArray(filteredTasks)
  };

  const onTaskFormSubmit = (e, text, category) => {
    e.preventDefault()
    setTasksStateArray([...tasksStateArray, {text: text, category: category}])
  }

  const handleClick = (e) => {
    setFilter(e.target.innerText)
  }

  const displayTasks = () =>{
    return tasksStateArray.filter((task) => {
      if(filter === "All"){
        return true
      } else {
        return task.category === filter
      }
    })
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filter={filter} categories={CATEGORIES} handleClick={handleClick} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES.filter(cat => cat!== "All")}/>
      <TaskList tasks={displayTasks()} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
