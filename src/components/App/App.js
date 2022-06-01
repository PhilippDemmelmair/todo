import { useState } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

import { Todo } from '../TaskObjects/Todo'
import { Add } from '../TaskObjects/Add'

function App() {
  const [todoList, setTodo] = useState([
    // TODO store in localStorage
    // TODO find better colours
    {
      id: nanoid(),
      task: 'feed sharks with enemies',
      completed: true,
      archived: false,
    },
    {
      id: nanoid(),
      task: 'rob atombombs with supercool style plan',
      completed: true,
      archived: false,
    },
    {
      id: nanoid(),
      task: 'threat world with mass destruction',
      completed: false,
      archived: false,
    },
    {
      id: nanoid(),
      task: 'take over world dominance',
      completed: false,
      archived: false,
    },
  ])

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

  console.table(todoList)
  return (
    <>
      <Header>
        <Title>SUPER IMPORTANT TODO APP</Title>
      </Header>
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

const Header = styled.header`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export default App
