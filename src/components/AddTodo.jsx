import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../feature/todo/todoSlice'

const AddTodo = () => {
    const [input,setInput] =useState('')
    const dispatch =useDispatch()

    const handleSubmit  =(e)=>{
        console.log('click')
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}
        className='bg-black w-1/2'
        >
            <input 
            
            type="text"
            className='w-[90%] text-white outline-0 px-3'
            placeholder='Enter your todo...'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button 
            type='submit'
            className=' bg-white cursor-pointer w-[10%] text-center h-[100%] py-1'

            >Add</button>
        </form>
    </div>
  )
}

export default AddTodo