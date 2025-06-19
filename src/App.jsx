import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    
    <div className='bg-violet-300 w-screen h-screen p-9'>
      <h2 className='text-5xl text-bolded mb-9'>Manage your Todo's</h2>
    <AddTodo/>
    <TodoList/>
    </div>
  )
}
export default App
