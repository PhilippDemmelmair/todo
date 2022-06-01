import { useState } from 'react'
import styled from 'styled-components'

function Add({ addTodo }) {
  const [text, setText] = useState('')

  return (
    <Form
      onSubmit={(event) => {
        // console.log(text)
        event.preventDefault()
        addTodo(text)
      }}
    >
      <label htmlFor="input-todo">New Task:</label>
      <TextInput
        id="input-todo"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button type="submit">Add</Button>
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
  background: transparent;
  color: #fff;
  padding: 10px 20px;
  width: 15%;
  border: 2px solid #fff;
  border-radius: 8px;
`
