import AddToDo from "./addToDo";
import ToDo from "./toDo";
import { useState, useEffect} from "react";
import { addLocalStorage, removeLocalStorage, getLocalStorage } from "../logic/localStorage";

function ToDoList (){
    const [toDos, setToDo] = useState([])

    const handleEvent =  (newToDo) =>{
        setToDo((toDoList) => [...toDoList, newToDo])
        addLocalStorage(newToDo)
    }
    
    const handleRemove = (id) =>{
        const toDoList = toDos.filter((item) => item.id !== id )
        setToDo(toDoList)
        removeLocalStorage(id)
    }

    //Cuando se renderize vamos a asiganar al estado todos los elemntos guadados en localStorage
    useEffect(() => {
        const localStorageToDos = getLocalStorage()
        setToDo(localStorageToDos);
    }, []);
    

    return(
        <>
        <AddToDo addToDo={handleEvent} />
        <div className="conatiner-to-dos">
            { toDos.map((item) => (
                <ToDo key={item.id} value={item.value} id={item.id} remove={handleRemove}/>
            ))}
        </div>
        </>
    )
}


export default ToDoList