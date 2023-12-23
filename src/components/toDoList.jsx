import AddToDo from "./addToDo";
import ToDo from "./toDo";
import { useState } from "react";



function ToDoList (){
    const [toDos, setToDo] = useState([])

    const handleEvent =  (newToDo) =>{
        setToDo((toDoList) => [...toDoList, newToDo])
    }
    
    const handleRemove = (id) =>{
        const toDoList = toDos.filter((item) => item.id !== id )
        setToDo(toDoList)
    }

    return(
        <>
        <AddToDo addToDo={handleEvent} />
        { toDos.map((item) => (
            <ToDo key={item.id} value={item.value} id={item.id} remove={handleRemove}/>
        ))}
        </>
    )
}


export default ToDoList