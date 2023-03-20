import React from "react";

function Task( { handleDelete, task }) {
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleDelete(task.text)}>X</button>
    </div>
  );
}

export default Task;
