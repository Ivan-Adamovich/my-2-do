import { useState, useLayoutEffect } from 'react';

import { Todo } from '../store/slice/todoSlice';
import { useAppSelector } from './useActions';
import {
  selectTodos,
  selectActiveFilter,
  selectActiveFolder,
  selectSearchTodoTitle,
} from '../store/selectors';
import { useDate } from './useDate';

export const useTodos = (): Todo[] => {
  const { todayDate } = useDate();

  const todos: Todo[] = useAppSelector(selectTodos);
  const [showTodos, setShowTodos] = useState<Todo[]>(todos);

  const activeFilter = useAppSelector(selectActiveFilter);
  const activeFolder = useAppSelector(selectActiveFolder);
  const searchTodoTitle = useAppSelector(selectSearchTodoTitle);

  const searchTodoOnTitle = (todos: Todo[]) => {
    if (searchTodoTitle === '') {
      setShowTodos(todos);
    } else {
      setShowTodos(
        todos.filter(
          (todo) =>
            todo.title.toLowerCase().indexOf(searchTodoTitle.toLowerCase()) !==
            -1
        )
      );
    }
  };

  const searchCompletedTodos = (todos: Todo[]): Todo[] => {
    return todos.filter((todo) => todo.completed === true);
  };

  const searchNotCompletedTodos = (todos: Todo[]): Todo[] => {
    return todos.filter((todo) => todo.completed === false);
  };

  const searchPlannedTodos = (todos: Todo[]): Todo[] => {
    return todos.filter((todo) => todo.planned !== '');
  };

  const searchImportsntTodos = (todos: Todo[]): Todo[] => {
    return todos.filter((todo) => todo.important === true);
  };

  const searchTodayTodos = (todos: Todo[]): Todo[] => {
    return todos.filter((todo) => todo.date === todayDate);
  };

  const searchTodosInFolder = (todos: Todo[]): Todo[] => {
    return todos.filter((todo) => todo.folder === activeFolder);
  };

  useLayoutEffect(() => {
    const allNotCompletedTodos = searchNotCompletedTodos(todos);
    if (activeFolder === 'All') {
      switch (activeFilter) {
        case 'Important':
          const allImportantTodos = searchImportsntTodos(allNotCompletedTodos);
          searchTodoOnTitle(allImportantTodos);
          break;
        case 'Completed':
          const allCompletedTodos = searchCompletedTodos(todos);
          searchTodoOnTitle(allCompletedTodos);
          break;
        case 'Planned':
          const allPlannedTodos = searchPlannedTodos(allNotCompletedTodos);
          searchTodoOnTitle(allPlannedTodos);
          break;
        default:
          searchTodoOnTitle(allNotCompletedTodos);
          break;
      }
    } else if (activeFolder === 'Today') {
      const todayTodos = searchTodayTodos(allNotCompletedTodos);
      searchTodoOnTitle(todayTodos);
    } else {
      const todosInFolder = searchTodosInFolder(todos);
      const allNotCompletedTodosInFolder =
        searchNotCompletedTodos(todosInFolder);
      switch (activeFilter) {
        case 'Important':
          const allImportantTodosInFolder = searchImportsntTodos(
            allNotCompletedTodosInFolder
          );
          searchTodoOnTitle(allImportantTodosInFolder);
          break;
        case 'Completed':
          const allCompletedTodosInFolder = searchCompletedTodos(todosInFolder);
          searchTodoOnTitle(allCompletedTodosInFolder);
          break;
        case 'Planned':
          const allPlannedTodosInFolder = searchPlannedTodos(
            allNotCompletedTodosInFolder
          );
          searchTodoOnTitle(allPlannedTodosInFolder);
          break;
        default:
          searchTodoOnTitle(allNotCompletedTodosInFolder);
          break;
      }
    }
  }, [activeFolder, activeFilter, todos, searchTodoTitle, todayDate]);

  return showTodos;
};
