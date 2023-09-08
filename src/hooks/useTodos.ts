import { useState, useEffect } from 'react';

import { Todo } from '../store/slice/todoSlice';
import { useAppSelector } from './hook';
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

  useEffect(() => {
    if (searchTodoTitle === '') {
      if (activeFolder === 'All') {
        setShowTodos(todos);
        switch (activeFilter) {
          case 'All':
            setShowTodos(todos.filter((todo) => todo.completed === false));
            break;
          case 'Important':
            setShowTodos(
              todos.filter(
                (todo) => todo.important === true && todo.completed === false
              )
            );
            break;
          case 'Completed':
            setShowTodos(todos.filter((todo) => todo.completed === true));
            break;
          case 'Planned':
            setShowTodos(todos.filter((todo) => todo.planned !== ''));
            break;
        }
      } else if (activeFolder === 'Today') {
        let todosToday = todos.filter((todo) => todo.date === todayDate);
        setShowTodos(todosToday);
        switch (activeFilter) {
          case 'All':
            setShowTodos(todosToday.filter((todo) => todo.completed === false));
            break;
          case 'Important':
            setShowTodos(
              todosToday.filter(
                (todo) => todo.important === true && todo.completed === false
              )
            );
            break;
          case 'Completed':
            setShowTodos(todosToday.filter((todo) => todo.completed === true));
            break;
          case 'Planned':
            setShowTodos(todosToday.filter((todo) => todo.planned !== ''));
            break;
        }
      } else {
        let todosInFolder = todos.filter(
          (todo) => todo.folder === activeFolder
        );
        setShowTodos(todosInFolder);
        switch (activeFilter) {
          case 'All':
            setShowTodos(
              todosInFolder.filter((todo) => todo.completed === false)
            );
            break;
          case 'Important':
            setShowTodos(
              todosInFolder.filter(
                (todo) => todo.important === true && todo.completed === false
              )
            );
            break;
          case 'Completed':
            setShowTodos(
              todosInFolder.filter((todo) => todo.completed === true)
            );
            break;
          case 'Planned':
            setShowTodos(todosInFolder.filter((todo) => todo.planned !== ''));
            break;
        }
      }
    } else {
      setShowTodos((prev) =>
        prev.filter(
          (todo) =>
            todo.title.toLowerCase().indexOf(searchTodoTitle.toLowerCase()) !==
            -1
        )
      );
    }
  }, [activeFolder, activeFilter, todos, searchTodoTitle, todayDate]);

  return showTodos;
};
