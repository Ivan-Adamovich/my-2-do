import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../hooks/hook';
import { Todo } from '../../store/slice/todoSlice';
import { selectTodos } from '../../store/selectors';

import { Typography, Stack } from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderIcon from '@mui/icons-material/Folder';

const TodoInformation = () => {
  const { id } = useParams();
  const todos: Todo[] = useAppSelector(selectTodos);
  const todo: Todo = todos.filter((todo) => todo.id.toString() === id)[0]; // должно обновляться

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {todo.date}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
        >
          {todo.planned ? (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <CalendarMonthIcon sx={{ fontSize: 16 }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'primary.main',
                  mr: 2,
                }}
              >
                {todo.planned}
              </Typography>
            </Stack>
          ) : (
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mr: 2,
              }}
            >
              Not planned
            </Typography>
          )}
          {todo.folder ? (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <FolderIcon fontSize="small" sx={{ fontSize: 16 }} />
              <Typography variant="body2">
                {todo.folder ? `${todo.folder}` : 'Not folder'}
              </Typography>
            </Stack>
          ) : (
            <>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Not folder
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
      <Stack mb={2}>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1 }}>
          Title:
        </Typography>
        <Typography
          variant="body1"
          sx={
            todo.completed
              ? {
                  textDecoration: 'line-through',
                  color: 'text.primary',
                }
              : { textDecoration: 'none', color: 'text.primary' }
          }
        >
          {todo.title}
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1 }}>
          Description:
        </Typography>
        <Typography
          variant="body1"
          component="pre"
          paragraph
          sx={
            todo.completed
              ? {
                  textDecoration: 'line-through',
                  color: 'text.primary',
                }
              : {
                  textDecoration: 'none',
                  color: 'text.primary',
                }
          }
        >
          {todo.description
            ? `${todo.description}`
            : 'This task has no description...'}
        </Typography>
      </Stack>
    </>
  );
};

export default TodoInformation;
