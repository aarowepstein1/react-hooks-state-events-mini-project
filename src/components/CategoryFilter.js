import React from "react";

function CategoryFilter({ filter, categories, handleClick }) {  
  const displayButtons = () => {
    return categories.map((category) => {
      const className = category === filter ? "selected" : null
      return <button className={className}  onClick={handleClick} key={category}>{category}</button>
    })}
    


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayButtons()}
    </div>
  );
}

export default CategoryFilter;
