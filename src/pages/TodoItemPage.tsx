import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/hook';
import { selectTodos } from '../store/selectors';
import { removeTodo, Todo } from '../store/slice/todoSlice';

import { IconButton, Container, Tooltip, Stack } from '@mui/material';

import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

import AppNav from '../components/layout/AppNav';
import ChangeTodoForm from '../components/form/ChangeTodoForm';
import TodoInformation from '../components/todo/TodoInformation';
import ToggleImpotantButton from '../components/button/ToggleImpotantButton';
import ToggleCompletedButton from '../components/button/ToggleCompletedButton';

const TodoItemPage: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const todos: Todo[] = useAppSelector(selectTodos);
  const todo: Todo = todos.filter((todo) => todo.id.toString() === id)[0];

  const [todoItem, setTodoItem] = useState<Todo | null>(todo);
  const [changeActive, setChangeActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const deleteHandler = (id: number) => {
    const todoDeleteAlert = window.confirm(`Delete this task? Are you sure?`);
    if (todoDeleteAlert) {
      navigate(-1);
      setTodoItem(null);
      dispatch(removeTodo(id));
    } else {
      return;
    }
  };

  return (
    <>
      <AppNav />
      {todoItem ? (
        <Container
          sx={{
            pt: 2,
            color: 'primary.main',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <ToggleCompletedButton todo={todo} />
              <ToggleImpotantButton todo={todo} />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}
            >
              {changeActive ? (
                <Tooltip title="Confirm">
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      setChangeActive(false);
                    }}
                    aria-label="confirm"
                  >
                    <CheckIcon sx={{ color: 'primary.main' }} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Change">
                  <IconButton
                    onClick={(event) => {
                      event.stopPropagation();
                      setChangeActive(true);
                    }}
                    aria-label="change"
                  >
                    <EditNoteIcon sx={{ color: 'primary.main' }} />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Delete">
                <IconButton
                  onClick={(event) => {
                    event.stopPropagation();
                    deleteHandler(todo.id);
                  }}
                  aria-label="delete"
                >
                  <DeleteIcon sx={{ color: 'primary.main' }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
          {changeActive ? <ChangeTodoForm /> : <TodoInformation />}
        </Container>
      ) : null}
    </>
  );
};

export default TodoItemPage;
