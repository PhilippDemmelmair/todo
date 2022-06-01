import styled from 'styled-components'
import React from 'react'

function Todo({ task, completed, archived }) {
  return (
    <>
      <Task completed={completed}>
        {task}

        <ButtonBox>
          <Button>{completed ? 'Incomplete' : 'Complete'}</Button>
          {completed ? <Button>Archive</Button> : <Button>Delete</Button>}
        </ButtonBox>
      </Task>
      {/* TODO Add add-function */}
    </>
  )
}

export { Todo }

const Task = styled.article`
  background: ${(props) => (props.completed ? 'green' : 'red')};
  height: 10vh;
  border: 2px solid #fff;
  border-radius: 16px;
  display: flex;
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
