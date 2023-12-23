const addLocalStorage =  (toDo) =>{
    localStorage.setItem(toDo.id  , JSON.stringify(toDo))
}

const removeLocalStorage = (id) =>{
    localStorage.removeItem(id)
}

const getLocalStorage = () =>{
    var toDos = []
    for(var i = 0; i < localStorage.length; i++){
        const id = localStorage.key(i)
        toDos.push((JSON.parse(localStorage.getItem(id))))
    }
    return toDos
}

export { addLocalStorage,removeLocalStorage, getLocalStorage }