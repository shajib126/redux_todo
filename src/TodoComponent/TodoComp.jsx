import React from 'react'
import './TodoComp.css'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../reducers/TodoSlice'
import { useEffect } from 'react'
import { useState } from 'react'
const TodoComp = () => {
  const [todo,setTodo] = useState("")
  const dispatch = useDispatch()

  const submitHandler = e =>{
    e.preventDefault()
    dispatch(addTodo(todo))
  }
  useEffect(()=>{
    console.log(typeof(todo));
  },[todo])
  return (
    <form onSubmit={submitHandler} className='todoComp'>
        <input onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Create Todo' />
        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoComp