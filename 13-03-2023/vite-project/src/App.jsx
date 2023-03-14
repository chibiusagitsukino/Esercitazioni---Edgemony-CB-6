import React, { useState } from 'react'
import TodoForm from './components/TodoForm'

import TodoList from './components/todoList'

import './App.css'

const App = () => {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  )
}

export default App
