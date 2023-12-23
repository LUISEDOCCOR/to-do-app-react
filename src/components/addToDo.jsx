import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '../stylesheets/addToDo.css';
import PropTypes from 'prop-types';



function AddToDo({ addToDo  }) {
  
  const [inputValue, setInputValue] = useState('')
  
  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue){
      const prototype = {
        'id': uuidv4(),
        'value': inputValue      
      }
      addToDo(prototype)
      setInputValue('')
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={handleForm} className="add-to-do-form">
      <input className="input-add" placeholder="Add..." type="text" value={inputValue} onChange={handleInput}/>
      <input className="input-btn-add" type="submit" value='+'/>
    </form>
  );
}

AddToDo.propTypes = {
  addToDo: PropTypes.func.isRequired,
  state: PropTypes.func.isRequired
};


export default AddToDo;


