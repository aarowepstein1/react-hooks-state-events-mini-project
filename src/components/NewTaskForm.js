import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [textInput, setTextInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")

  const displayOptions = categories.map(category => {
    return <option key={category}>{category}</option>
  })

  const handleChange =(e) => {
    if(e.target.name === "text"){
      setTextInput(e.target.value)
    } else {
      setCategoryInput(e.target.value)
    }
    
    console.log(textInput)
  }

  return (
    <form onSubmit={(e) => onTaskFormSubmit(e, textInput, categoryInput)} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={categoryInput}>
          {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
