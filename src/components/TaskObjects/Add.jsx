import { useState } from 'react'
import styled from 'styled-components'
import useTodo from '../../common/useTodo'

function Add() {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('No description added.')
  const [priority, setPriority] = useState('0')

  const addTodo = useTodo((state) => state.addTodo)

  return (
    <Form
      onSubmit={(event) => {
        // console.log(text)
        event.preventDefault()
        addTodo(text, description, priority)
        // TODO input should disappear or return to a placeholder
        // TODO Error mesage should explain why you can't add a new Task
      }}
    >
      <label htmlFor="input-todo">New Task:</label>
      <TextInput
        id="input-todo"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <label htmlFor="input-description">Description:</label>
      <TextInput
        id="input-description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <p>Priority:</p>
      <label htmlFor="input-priority-0">0:</label>
      <PriorityInput
        id="input-priority-0"
        type="checkbox"
        value={0}
        onChange={(event) => {
          event.target.checked
            ? setPriority(event.target.value)
            : setPriority(0)
        }}
      />
      <label htmlFor="input-priority-1">1:</label>
      <PriorityInput
        id="input-priority-1"
        type="checkbox"
        value={1}
        onChange={(event) => {
          event.target.checked
            ? setPriority(event.target.value)
            : setPriority(0)
        }}
      />
      <label htmlFor="input-priority-2">2:</label>
      <PriorityInput
        id="input-priority-2"
        type="checkbox"
        value={2}
        onChange={(event) => {
          event.target.checked
            ? setPriority(event.target.value)
            : setPriority(0)
        }}
      />
      <label htmlFor="input-priority-3">3:</label>
      <PriorityInput
        id="input-priority-3"
        type="checkbox"
        value={3}
        onChange={(event) => {
          event.target.checked
            ? setPriority(event.target.value)
            : setPriority(0)
        }}
      />
      <label htmlFor="input-priority-4">4:</label>
      <PriorityInput
        id="input-priority-4"
        type="checkbox"
        value={4}
        onChange={(event) => {
          event.target.checked
            ? setPriority(event.target.value)
            : setPriority(0)
        }}
      />
      <label htmlFor="input-priority-5">5:</label>
      <PriorityInput
        id="input-priority-5"
        type="checkbox"
        value={5}
        onChange={(event) => {
          event.target.checked
            ? setPriority(event.target.value)
            : setPriority(0)
        }}
      />
      <Button disabled={!text || text.length > 50} type="submit">
        Add
      </Button>
    </Form>
  )
}

export { Add }

const PriorityInput = styled.input`
  width: 24px;
`

const Form = styled.form`
  display: flex;
  height: 200px;
  border: 2px solid #fff;
  border-radius: 16px;
  flex-flow: column nowrap;
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
