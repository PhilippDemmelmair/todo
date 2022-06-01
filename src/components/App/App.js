import { useState } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

import { Todo } from '../TaskObjects/Todo'

function App() {
  const [todoList, setTodo] = useState([
    // TODO store in localStorage
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
  // alert(todoList[0].task)
  return (
    <>
      <Header>
        <Title>SUPER IMPORTANT TODO APP</Title>
      </Header>
      <Body>
        {todoList.map((i) => {
          return (
            <Todo
              key={i.id}
              task={i.task}
              completed={i.completed}
              archived={i.archived}
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
