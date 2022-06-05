import { Body } from './styledComponents'
import { Todo } from './TaskObjects/Todo'

import useTodo from './../common/useTodo'
import shallow from 'zustand/shallow'
import styled from 'styled-components'

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
        <ArchiveTitle>These are the Tasks you have finished</ArchiveTitle>
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

const ArchiveTitle = styled.h2`
  color: #eae9ec;
  border-bottom: 1px solid #eae9ec;
`
