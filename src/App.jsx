import './App.css'
import ToDoList from './components/toDoList'

function App() {
  return (
     <div className='container'>
        <div className='contendor-title'>
          <h1>TO DO LIST</h1>
        </div>
        <div className='container-todos'>
          <ToDoList/>
        </div> 
     </div> 
  )
}

export default App
