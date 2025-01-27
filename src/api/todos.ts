import { Todo } from '@/types/todo';

let todos: Todo[] = [
  { id: 1, title: "Learn HTML", completed: false },
  { id: 2, title: "Learn CSS", completed: false },
  { id: 3, title: "Learn JavaScript", completed: false },
  { id: 4, title: "Learn React", completed: false },
];

export const todosApi = {
  fetch: async (searchTerm = ""): Promise<Todo[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  add: async (title: string): Promise<Todo> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newTodo = { id: todos.length + 1, title, completed: false };
    todos = [...todos, newTodo];
    return newTodo;
  }
};