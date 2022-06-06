// TODO add edit functionality
// TODO Error mesage should explain why you can't add a new Task

import { useState } from 'react'
import styled from 'styled-components'
import useTodo from '../../common/useTodo'

function Add() {
  const [text, setText] = useState('What do you have to do?')
  const [description, setDescription] = useState('No description added.')
  const [priority, setPriority] = useState('0')

  const addTodo = useTodo((state) => state.addTodo)

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        addTodo(text, description, priority)
      }}
    >
      <TitleLabel htmlFor="input-todo">
        New Task:
        <TitleInput
          id="input-todo"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </TitleLabel>

      <Description htmlFor="input-description">
        Description:
        <DescriptionInput
          id="input-description"
          type="textarea"
          rows={5}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Description>

      <Priority>
        <span>Priority:</span>
        <label htmlFor="input-priority-0">
          0:
          <input
            id="input-priority-0"
            type="checkbox"
            value={0}
            onChange={(event) => {
              event.target.checked
                ? setPriority(event.target.value)
                : setPriority(0)
            }}
          />
        </label>

        <label htmlFor="input-priority-1">
          1:
          <input
            id="input-priority-1"
            type="checkbox"
            value={1}
            onChange={(event) => {
              event.target.checked
                ? setPriority(event.target.value)
                : setPriority(0)
            }}
          />
        </label>

        <label htmlFor="input-priority-2">
          2:
          <input
            id="input-priority-2"
            type="checkbox"
            value={2}
            onChange={(event) => {
              event.target.checked
                ? setPriority(event.target.value)
                : setPriority(0)
            }}
          />
        </label>

        <label htmlFor="input-priority-3">
          3:
          <input
            id="input-priority-3"
            type="checkbox"
            value={3}
            onChange={(event) => {
              event.target.checked
                ? setPriority(event.target.value)
                : setPriority(0)
            }}
          />
        </label>

        <label htmlFor="input-priority-4">
          4:
          <input
            id="input-priority-4"
            type="checkbox"
            value={4}
            onChange={(event) => {
              event.target.checked
                ? setPriority(event.target.value)
                : setPriority(0)
            }}
          />
        </label>

        <label htmlFor="input-priority-5">
          5:
          <input
            id="input-priority-5"
            type="checkbox"
            value={5}
            onChange={(event) => {
              event.target.checked
                ? setPriority(event.target.value)
                : setPriority(0)
            }}
          />
        </label>
      </Priority>

      <Button disabled={!text || text.length > 50} type="submit">
        Add
      </Button>
    </Form>
  )
}

export { Add }

const Description = styled.label`
  width: 100%;
  padding: 0.5vw;
`

const DescriptionInput = styled.textarea`
  width: 100%;
`
const Priority = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 60%;
  padding: 0.5vw;
`
const Form = styled.form`
  display: flex;
  border: 2px solid #fff;
  border-radius: 16px;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5vw 2vw;
  margin: 20px auto;
  color: #fff;
  font-size: 1.2rem;
`
const TitleLabel = styled.label`
  width: 100%;
  padding: 0.5vw;
`
const TitleInput = styled.input`
  width: 100%;
`
const Button = styled.button`
  background: ${(props) => (props.disabled ? '#D00000' : '#009B72')};
  color: #fff;
  padding: 10px 20px;
  width: 15%;
  border: 2px solid #fff;
  border-radius: 8px;
`
