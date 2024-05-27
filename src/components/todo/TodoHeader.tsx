import { selectActiveFilter, selectActiveFolder } from '../../store/selectors';
import { useAppSelector } from '../../hooks/useActions';
import { useDate } from '../../hooks/useDate';
import { useTodos } from '../../hooks/useTodos';

import { Typography, Stack } from '@mui/material';

import SortingButton from '../button/SortingButton';
import DeleteAllTaskButton from '../button/DeleteAllTodoButton';

const TodoHeader = () => {
  const activeFilter: string = useAppSelector(selectActiveFilter);
  const activeFolder: string = useAppSelector(selectActiveFolder);
  const showTodos = useTodos();
  const { todayDate } = useDate();
  const { weekDay } = useDate();

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      useFlexGap
    >
      {showTodos.length > 1 ? <SortingButton /> : null}
      <Typography variant="h6" sx={{ color: 'primary.main' }}>
        {activeFolder === 'All' && activeFilter === 'All' ? 'All Tasks ' : null}
        {activeFolder === 'All' || activeFolder === 'Today'
          ? null
          : `${activeFolder} `}
        {activeFilter === 'All' ? null : `${activeFilter} `}
        {activeFolder === 'Today' ? `${weekDay}: ${todayDate}` : null}
      </Typography>
      {activeFilter === 'Completed' && showTodos.length >= 1 ? (
        <DeleteAllTaskButton />
      ) : null}
    </Stack>
  );
};

export default TodoHeader;
