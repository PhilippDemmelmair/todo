import create from 'zustand'
import { nanoid } from 'nanoid'

const useTodo = create((set) => ({
  // TODO get this from localStorage
  todos: [
    {
      id: nanoid(),
      text: 'Wash the car',
      completed: false,
      archived: false,
    },
    {
      id: nanoid(),
      text: 'Do the dishes',
      completed: true,
      archived: false,
    },
    {
      id: nanoid(),
      text: 'Read newspaper',
      completed: false,
      archived: false,
    },
  ],
  toggleCompleted: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, comppleted: !todo.completed }
        }
        return todo
      }),
    })),
}))

export default useTodo
