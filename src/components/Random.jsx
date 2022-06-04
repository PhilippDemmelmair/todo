import useTodo from './../common/useTodo'
import shallow from 'zustand/shallow'

import { Body } from './styledComponents'
import { Todo } from './TaskObjects/Todo'

function Random() {
  const todoIds = useTodo(
    (state) =>
      state.todos.filter((todo) => !todo.archived).map((todo) => todo.id),
    shallow
  )
  console.log(todoIds.length)
  const defaultMessage = 'You have absolutly nothing to do!'

  return (
    <>
      <Body>
        <h2>Do this - NOW!!!</h2>
        {todoIds.length > 0 ? (
          <Todo
            key={todoIds[Math.floor(Math.random() * (todoIds.length - 1))]}
            id={todoIds[Math.floor(Math.random() * (todoIds.length - 1))]}
          />
        ) : (
          <p>{defaultMessage}</p>
        )}
      </Body>
    </>
  )
}

export { Random }
