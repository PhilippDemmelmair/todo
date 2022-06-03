import { useState } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom'

import { Todo } from '../TaskObjects/Todo'
import { Add } from '../TaskObjects/Add'
import { Header } from '../Header'
import useTodo from '../../common/useTodo'
import shallow from 'zustand/shallow'

const defaultTask = [
  {
    id: nanoid(),
    task: 'write new task',
    completed: false,
    archived: false,
  },
]

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/random" element={<Random />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

function Home() {
  // TODO set globalState
  const [todoList, setTodo] = useState(
    JSON.parse(localStorage.getItem('todoList')) || defaultTask
  )

  function toggleComplete(id) {
    const toggledTodos = todoList.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTodo(toggledTodos)
  }

  function toggleArchived(id) {
    const toggledTodos = todoList.map((task) => {
      if (id === task.id) {
        return { ...task, archived: !task.archived }
      }
      return task
    })
    console.log('toggled')
    setTodo(toggledTodos)
  }

  function deleteTask(id) {
    const filteredTodos = todoList.filter((task) => task.id !== id)
    setTodo(filteredTodos)
  }

  function addTodo(text) {
    // TODO input validating
    // not possible if empty
    // not posssible if too long
    console.log(typeof text)
    const newTodos = [
      { id: nanoid(), task: text, completed: false, archived: false },
      ...todoList,
    ]
    setTodo(newTodos)
  }

  React.useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const todoIds = useTodo(
    (state) =>
      state.todos.filter((todo) => !todo.archived).map((todo) => todo.id),
    shallow
  )
  return (
    <>
      <Body>
        <Add addTodo={addTodo} />
        {todoIds.map((i) => {
          return (
            // <Todo
            //   key={i.id}
            //   task={i.task}
            //   completed={i.completed}
            //   archived={i.archived}
            //   toggleComplete={() => toggleComplete(i.id)}
            //   toggleArchived={() => toggleArchived(i.id)}
            //   deleteTask={() => deleteTask(i.id)}
            // />
            <li>Something</li>
          )
        })}
      </Body>
    </>
  )
}

function Archive() {
  return <h2>Archive</h2>
}

function Random() {
  return <h2>Random</h2>
}

// TODO auslagern

const Body = styled.body`
  height: 90vh;
  background: #282c34;
  padding: 10vw;
`

export default App
