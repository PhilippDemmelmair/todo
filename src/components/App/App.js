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
  const todoIds = useTodo(
    (state) =>
      state.todos.filter((todo) => !todo.archived).map((todo) => todo.id),
    shallow
  )
  console.table(todoIds)
  return (
    <>
      <Body>
        {/* <Add addTodo={addTodo} /> */}

        {todoIds.map((id) => {
          // TODO implement functions in todo component
          return <Todo key={id} id={id} />
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
