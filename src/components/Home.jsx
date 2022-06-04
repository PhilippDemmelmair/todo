import useTodo from './../common/useTodo'
import shallow from 'zustand/shallow'

import { Todo } from './TaskObjects/Todo'
import { Add } from './TaskObjects/Add'
import { Body } from './styledComponents'

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
