import useTodo from './../common/useTodo'
import shallow from 'zustand/shallow'
import styled from 'styled-components'
import { useEffect } from 'react'

import { Body } from './styledComponents'
import { Todo } from './TaskObjects/Todo'
import { useState } from 'react'
import React from 'react'

function Random() {
  const todoIds = useTodo(
    (state) =>
      state.todos.filter((todo) => !todo.archived).map((todo) => todo.id),
    shallow
  )

  const defaultMessage = 'You have absolutly nothing to do!'

  const [random, setRandom] = useState(
    todoIds[Math.floor(Math.random() * (todoIds.length - 1))]
  )

  function getRandom() {
    console.log('Changed')
    setRandom(todoIds[Math.floor(Math.random() * (todoIds.length - 1))])
  }

  return (
    <>
      <Body>
        <h2>Do this - NOW!!!</h2>
        <Button onClick={() => getRandom()}>Shuffle</Button>
        {todoIds.length > 0 ? (
          <Todo key={random} id={random} />
        ) : (
          <p>{defaultMessage}</p>
        )}
      </Body>
    </>
  )
}

export { Random }

const Button = styled.button`
  background: transparent;
  color: #fff;
  padding: 10px 20px;
  width: 15%;
  border: 2px solid #fff;
  border-radius: 8px;
`
