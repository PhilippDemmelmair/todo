import styled from 'styled-components'
import React from 'react'
import useTodo from '../../common/useTodo'

function Todo({ id }) {
  const toggleComplete = useTodo((state) => state.toggleCompleted)
  const toggleArchived = useTodo((state) => state.toggleArchived)
  const deleteTask = useTodo((state) => state.deleteTask)
  const todo = useTodo((state) => state.todos.find((todo) => todo.id === id))
  return (
    <>
      <Task completed={todo.completed} archived={todo.archived}>
        {todo.text}

        <ButtonBox>
          <Button onClick={() => toggleComplete(id)}>
            {todo.completed ? 'Open again' : 'Close now'}
          </Button>
          {todo.completed ? (
            <Button onClick={() => toggleArchived(id)}>Archive</Button>
          ) : (
            <Button onClick={() => deleteTask(id)}>Delete</Button>
          )}
        </ButtonBox>
      </Task>
    </>
  )
}

export { Todo }

const Task = styled.article`
  display: ${(props) => (props.archived ? 'none' : 'flex')};
  background: ${(props) => (props.completed ? 'green' : 'red')};
  height: 10vh;
  border: 2px solid #fff;
  border-radius: 16px;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  margin: 20px auto;
  color: #fff;
  font-size: 1.2rem;
`
const Button = styled.button`
  width: 12vw;
  background: transparent;
  color: #fff;
  border-radius: 8px;
  border: 2px solid #fff;
  padding: 10px 20px;
  text-align: center;
`
const ButtonBox = styled.section`
  width: 25vw;
  display: flex;
  justify-content: space-between;
`
