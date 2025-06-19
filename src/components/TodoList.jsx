import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'


const TodoList = () => {
    const todos = useSelector(state=>state.todos)
    const dispatch =useDispatch()

  return (
      <ul className="mt-9 flex flex-col gap-1">
    {todos.map((todo)=>{
return(

        <li className="bg-black w-1/2 text-white px-3 flex justify-between items-center" key={todo.id}>
       <p>{todo.text}</p> 
       <div className="remove">
        <button className="bg-red-700 py-1 px-2 cursor-pointer" onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
       </div>
        </li>
       
    )
})}
</ul>
  )
}

export default TodoList