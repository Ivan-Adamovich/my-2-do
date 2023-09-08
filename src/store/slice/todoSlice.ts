import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  date: string;
  title: string;
  description: string;
  completed: boolean;
  important: boolean;
  folder: string;
  planned: string;
};

type TodosState = {
  list: Todo[];
};

const storeTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
const sortStoreTodos = storeTodos.sort((a, b) => (a.id < b.id ? 1 : -1));

const initialState: TodosState = {
  list: sortStoreTodos,
};

const setLocalStorageTodos = (list: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(list));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(
      state,
      action: PayloadAction<{
        title: string;
        description: string;
        important: boolean;
        folderTitle: string;
        planned: string;
      }>
    ) {
      state.list.unshift({
        id: Date.now(),
        date: new Date().toLocaleString().substr(0, 10),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
        important: action.payload.important,
        folder: action.payload.folderTitle,
        planned: action.payload.planned,
      });
      setLocalStorageTodos(state.list);
    },
    changeTodo(
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        description: string;
        folderTitle: string;
        planned: string;
      }>
    ) {
      const changedTodo = state.list.find(
        (todo) => todo.id === action.payload.id
      );
      if (changedTodo) {
        if (action.payload.title) {
          changedTodo.title = action.payload.title;
        }
        changedTodo.description = action.payload.description;
        changedTodo.folder = action.payload.folderTitle;
        changedTodo.date = new Date().toLocaleString().substr(0, 10);
        changedTodo.planned = action.payload.planned;
      }
      setLocalStorageTodos(state.list);
    },
    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
      setLocalStorageTodos(state.list);
    },
    toggleImportant(state, action: PayloadAction<number>) {
      const importantTodo = state.list.find(
        (todo) => todo.id === action.payload
      );
      if (importantTodo) {
        importantTodo.important = !importantTodo.important;
      }
      setLocalStorageTodos(state.list);
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      setLocalStorageTodos(state.list);
    },
    sortTodos(state, action: PayloadAction<string>) {
      if (action.payload === 'Alphabet') {
        state.list = state.list.sort((a: Todo, b: Todo) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
        );
        setLocalStorageTodos(state.list);
      } else if (action.payload === 'Date') {
        state.list = state.list.sort((a: Todo, b: Todo) =>
          a.id < b.id ? 1 : -1
        );
        setLocalStorageTodos(state.list);
      } else {
        return;
      }
    },
    changeFolderTitle(state, action: PayloadAction<string>) {
      state.list.forEach((todo) => {
        if (todo.folder === action.payload) {
          todo.folder = '';
          setLocalStorageTodos(state.list);
        } else {
          return;
        }
      });
    },
    removeCompletedTodoInFolder(state, action: PayloadAction<string>) {
      if (action.payload === 'All' || action.payload === 'Today') {
        state.list = state.list.filter((todo) => todo.completed === false);
      } else {
        state.list = state.list.filter(
          (todo) => todo.completed === false && todo.folder === action.payload
        );
      }
      setLocalStorageTodos(state.list);
    },
  },
});

export const {
  addTodo,
  changeTodo,
  toggleComplete,
  removeTodo,
  toggleImportant,
  sortTodos,
  changeFolderTitle,
  removeCompletedTodoInFolder,
} = todoSlice.actions;

export default todoSlice.reducer;
