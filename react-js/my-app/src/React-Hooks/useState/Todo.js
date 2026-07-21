import React ,{useState} from 'react'

const Todo = () => {
    // state for input field
    const [input, setInput]= useState('')
    // state for store the todes
    const [todos,setTodos] =useState([])
    // function for add task ->

    const addTodo = () => {
        if(input.trim() === '')return;
        setTodos([...todos,input]) // add new task
        setInput('') // clear input     
    }
    // delete task->
    const deleteTodo = (index)=> {
        const newTodos = todos.filter((_,i)=> i !== index)
        setTodos(newTodos)
    }
  return (
    <div>
      <h2> Todo App</h2>

      <input
      type='text'
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      placeholder='Enter Task'
      />
      <button onClick={addTodo}>Add</button>

      {/* {todo list} */}

      <ul style={{listStyle : "none",padding :0}}>
        {todos.map((todo,index) =>(
            <li key={index}>
                {index+1},{todo}
                <button style={{margin : 10 , marginTop : 10}}
                onClick={()=> deleteTodo(index)}>
                    Delete
                </button>
            </li>
        )) }

      </ul>
    </div>
  )
}

export default Todo
