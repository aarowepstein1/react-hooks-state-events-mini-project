import React from "react";
import Task from "./Task";

function TaskList( { handleDelete, tasks }) {
  
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
          <Task key={index} task={task} handleDelete={handleDelete}/>
        ))}
    </div>
  );
}

export default TaskList;
