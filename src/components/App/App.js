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

function Header() {
  return (
    <>
      <HeaderStyle>
        <Title>SUPER IMPORTANT TODO APP</Title>
        <NavBar>
          <Link to="/">
            <LinkText>Home</LinkText>
          </Link>

          <Link to="/random">
            <LinkText>Random</LinkText>
          </Link>

          <Link to="/archive">
            <LinkText>Archive</LinkText>
          </Link>
        </NavBar>
      </HeaderStyle>
    </>
  )
}

function Home() {
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
  return (
    <>
      <Body>
        <Add addTodo={addTodo} />
        {todoList.map((i) => {
          return (
            <Todo
              key={i.id}
              task={i.task}
              completed={i.completed}
              archived={i.archived}
              toggleComplete={() => toggleComplete(i.id)}
              toggleArchived={() => toggleArchived(i.id)}
              deleteTask={() => deleteTask(i.id)}
            />
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
const LinkText = styled.span`
  color: #fff;
  textdecoration: none;
  font-size: 1.2rem;
  margin: 1em;
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 0.2em 1em;
`

const HeaderStyle = styled.header`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #fff;
`

const Title = styled.h1`
  font-size: calc(10px + 2vmin);
  color: white;
`

const Body = styled.body`
  height: 90vh;
  background: #282c34;
  padding: 10vw;
`
const NavBar = styled.nav`
  // border: 1px solid #a1a1a1;
  border-radius: 8px;
  width: 30vw;
  padding: 1vh;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`
export default App
