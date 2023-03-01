import React from 'react'
import { useSelector } from 'react-redux'
import TodoComp from '../TodoComponent/TodoComp'
import './Todo.css'
import TodoList from './TodoList'

const Todo = () => {
  
  return (
    <div className='todo'>
        <h1 style={{marginLeft:'100px'}}>Todo App</h1>
        <TodoComp/>
        <TodoList/>
        
    </div>
  )
}

export default Todo