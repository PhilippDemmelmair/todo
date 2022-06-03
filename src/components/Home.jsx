import useTodo from './../common/useTodo'
import shallow from 'zustand/shallow'
import { Todo } from './TaskObjects/Todo'
import { Add } from './TaskObjects/Add'
import styled from 'styled-components'

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
        <Add />

        {todoIds.map((id) => {
          return <Todo key={id} id={id} />
        })}
      </Body>
    </>
  )
}

export { Home }

const Body = styled.body`
  height: 90vh;
  background: #282c34;
  padding: 10vw;
`
