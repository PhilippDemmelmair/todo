import { useState } from 'react'
import styled from 'styled-components'
import useTodo from '../../common/useTodo'

function Add() {
  const [text, setText] = useState('')
  const addTodo = useTodo((state) => state.addTodo)

  return (
    <Form
      onSubmit={(event) => {
        // console.log(text)
        event.preventDefault()
        addTodo(text)
        // TODO input should disappear or return to a placeholder
      }}
    >
      <label htmlFor="input-todo">New Task:</label>
      <TextInput
        id="input-todo"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button disabled={!text || text.length > 50} type="submit">
        Add
      </Button>
    </Form>
  )
}

export { Add }

const Form = styled.form`
  display: flex;
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

const TextInput = styled.input`
  width: 60%;
`
const Button = styled.button`
  background: ${(props) => (props.disabled ? 'red' : 'green')};
  color: #fff;
  padding: 10px 20px;
  width: 15%;
  border: 2px solid #fff;
  border-radius: 8px;
`
