import styled from 'styled-components'
import React from 'react'

function Todo({ task, completed, archived }) {
  return (
    <>
      <Task completed={completed}>{task}</Task>
    </>
  )
}

export { Todo }

const Task = styled.article`
  background: ${(props) => (props.completed ? 'green' : 'red')};
  height: 10vh;
  border: 2px solid #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: 20px;
  margin: 20px auto;
  color: #fff;
  font-size: 1.2rem;
`
