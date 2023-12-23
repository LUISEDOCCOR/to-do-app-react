import { FaTrash } from "react-icons/fa";
import "../stylesheets/toDo.css";
import { useState } from "react";
import PropTypes from 'prop-types';


function ToDo({ value, remove, id }) {
  const [completed, setCompleted] = useState(false);

  const handleCheck = () => {
    if (completed) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRemove = () =>{
    remove(id)
  }

  return (
    <div className="to-do">
      <input type="checkbox" onClick={handleCheck} />
      <span className={`${completed ? "completed" : ""}`.trimEnd()}>
        {value}
      </span>
      <button onClick={handleRemove}>
        <FaTrash />
      </button>
    </div>
  );
}

ToDo.propTypes = {
    value: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

export default ToDo;
