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
        <TaskTitle>
          {todo.text}
          <span>Priorität: {todo.priority}</span>
        </TaskTitle>
        <TaskText>
          <p>Opened:{todo.createdAt}</p>
          <p>
            Open since:{' '}
            {(Date.parse(Date()) - Date.parse(todo.createdAt)) /
              (1000 * 60 * 60 * 24 * 7)}
            weeks
            {/* TODO tidy this up */}
          </p>
          <TaskDescription>{todo.description}</TaskDescription>
        </TaskText>

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
  background: ${(props) => (props.completed ? '#009B72' : '#D00000')};
  border: 2px solid #eae9ec;
  border-radius: 16px;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  margin: 20px auto;
  color: #eae9ec;
  font-size: 1.2rem;
`
const TaskTitle = styled.section`
  border-bottom: 1px solid #eae9ec;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const TaskText = styled.section`
  width: 100%;
`

const TaskDescription = styled.p`
  width: 100%;
`
const Button = styled.button`
  width: 12vw;
  background: transparent;
  color: #eae9ec;
  border-radius: 8px;
  border: 2px solid #eae9ec;
  padding: 10px 20px;
  text-align: center;
`
const ButtonBox = styled.section`
  width: 25vw;
  display: flex;
  justify-content: space-between;
`
