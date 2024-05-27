import { useNavigate } from 'react-router-dom';

import { Todo } from '../../store/slice/todoSlice';
import { useAppSelector } from '../../hooks/useActions';
import { selectDarkTheme } from '../../store/slice/darkThemeSlice';

import { mtColors } from '../../assets/myColors';

import { Typography, Tooltip, Stack } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilePresentIcon from '@mui/icons-material/FilePresent';

import ToggleImpotantButton from '../button/ToggleImpotantButton';
import ToggleCompletedButton from '../button/ToggleCompletedButton';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const darkTheme: boolean = useAppSelector(selectDarkTheme);

  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        bgcolor: `${darkTheme ? mtColors.dark.bgMain : mtColors.light.bgMain}`,
        mb: 1,
        padding: '8px 16px 8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/todos/${todo.id}`)}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        useFlexGap
        spacing={1}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1}>
            <ToggleCompletedButton todo={todo} />
            <ToggleImpotantButton todo={todo} />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Tooltip title="Open this Task">
              <Typography
                variant="subtitle1"
                sx={{
                  textDecoration: `${todo.completed ? 'line-through' : 'none'}`,
                  color: 'text.primary',
                  overflowY: 'hidden',
                  maxHeight: '28px',
                }}
              >
                {todo.title}
              </Typography>
            </Tooltip>
            {todo.description ? (
              <FilePresentIcon
                fontSize="small"
                sx={{ color: 'primary.main', fontSize: 16, ml: 1 }}
              />
            ) : null}
          </Stack>
        </Stack>
        {todo.folder || todo.planned ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            {todo.planned !== '' ? (
              <Stack direction="row" alignItems="center" spacing={1}>
                <CalendarMonthIcon
                  sx={{ fontSize: 16, color: 'primary.main' }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'primary.main',
                  }}
                >
                  {todo.planned}
                </Typography>
              </Stack>
            ) : null}
            {todo.folder ? (
              <Stack direction="row" alignItems="center" spacing={1}>
                <FolderIcon
                  fontSize="small"
                  sx={{ fontSize: 16, color: 'primary.main' }}
                />
                <Typography variant="body2" sx={{ color: 'primary.main' }}>
                  {todo.folder}
                </Typography>
              </Stack>
            ) : null}
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default TodoItem;
