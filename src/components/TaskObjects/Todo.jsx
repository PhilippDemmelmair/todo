import styled from 'styled-components'
import React from 'react'
import useTodo from '../../common/useTodo'

function Todo({ id }) {
  const toggleComplete = useTodo((state) => state.toggleCompleted)
  const toggleArchived = useTodo((state) => state.toggleArchived)
  const deleteTask = useTodo((state) => state.deleteTask)
  const todo = useTodo((state) => state.todos.find((todo) => todo.id === id))

  console.log(Date.parse(Date.parse(Date()) - Date.parse(todo.createdAt)))

  return (
    <>
      <Task completed={todo.completed} archived={todo.archived}>
        {todo.text}

        <p>Opened:{todo.createdAt}</p>
        <p>
          Open since:{' '}
          {(Date.parse(Date()) - Date.parse(todo.createdAt)) /
            (1000 * 60 * 60 * 24 * 7)}
          weeks
          {/* TODO tidy this up */}
        </p>
        {todo.description}
        <p>Priorität: {todo.priority}</p>
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
  display: flex;
  background: ${(props) => (props.completed ? 'green' : 'red')};
  height: 200px;
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
