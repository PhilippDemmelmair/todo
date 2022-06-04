import { Body } from './styledComponents'
import { Todo } from './TaskObjects/Todo'

import useTodo from './../common/useTodo'
import shallow from 'zustand/shallow'

function Archive() {
  const todoIds = useTodo(
    (state) =>
      state.todos.filter((todo) => todo.archived).map((todo) => todo.id),
    shallow
  )
  return (
    //   TODO implement function that counts all tracked time

    <>
      <Body>
        <h2>These are the Tasks you have finished</h2>
        {todoIds.map((id) => {
          return (
            <>
              <Todo key={id} id={id} />
            </>
          )
        })}
      </Body>
    </>
  )
}

export { Archive }
