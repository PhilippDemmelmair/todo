import create from 'zustand'
import { nanoid } from 'nanoid'
import { persist } from 'zustand/middleware'

const defaultTask = [
  // TODO kann wahrscheinlich raus
  {
    id: nanoid(),
    task: 'write new task',
    completed: false,
    archived: false,
  },
]

// function createdAt() {
//   const time = getDate()
//   return time
// }

const useTodo = create(
  persist(
    (set) => ({
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
      //  Function to switch between completed and open tasks
      toggleCompleted: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (id === todo.id) {
              return { ...todo, completed: !todo.completed }
            }
            return todo
          }),
        })),
      // Function to switch between archived and not archived
      toggleArchived: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) => {
            console.log('toggle archived')
            if (id === todo.id) {
              return { ...todo, archived: !todo.archived }
            }
            return todo
          }),
        })),
      // Function to delete an uncompleted task
      deleteTask: (id) =>
        set((state) => ({
          todos: state.todos.filter((task) => task.id !== id),
        })),
      // Function to add new task
      addTodo: (text) =>
        set((state) => ({
          todos: [
            {
              id: nanoid(),
              text: text,
              completed: false,
              archived: false,
              createdAt: Date(),
            },
            ...state.todos,
          ],
        })),
    }),
    { name: 'persistTodoList' }
  )
)

export default useTodo
