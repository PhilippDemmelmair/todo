import create from 'zustand'
import { nanoid } from 'nanoid'
import { persist } from 'zustand/middleware'

const useTodo = create(
  persist(
    (set) => ({
      todos: [],
      //  Function to switch between completed and open tasks
      toggleCompleted: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (id === todo.id) {
              if (todo.completed) {
                return { ...todo, completed: !todo.completed, completedAt: '' }
              } else {
                return {
                  ...todo,
                  completed: !todo.completed,
                  completedAt: Date(),
                }
              }
            }
            return todo
          }),
        })),
      // Function to switch between archived and not archived
      toggleArchived: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) => {
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
      addTodo: (text, description, priority, subTasks) =>
        set((state) => ({
          todos: [
            {
              id: nanoid(),
              text: text,
              description: description,
              priority: priority,
              completed: false,
              archived: false,
              createdAt: Date(),
              subTasks: subTasks,
            },
            ...state.todos,
          ],
        })),
    }),
    { name: 'persistTodoList' }
  )
)

export default useTodo
