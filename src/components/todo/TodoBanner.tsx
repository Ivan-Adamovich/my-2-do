import { useAppSelector } from '../../hooks/useActions';
import { selectActiveFolder } from '../../store/slice/filterSlice';

import { Box, Stack } from '@mui/material';

import SearchTodoInput from '../input/SearchTodoInput';
import FiltersButtonsGroup from '../button/FiltersButtonsGroup';
import TodoHeader from './TodoHeader';

const TodoBanner: React.FC = () => {
  const activeFolder: string = useAppSelector(selectActiveFolder);

  return (
    <Box
      sx={{
        pt: 2,
        pb: 2,
        minHeight: '40px',
        bgcolor: 'background.paper',
      }}
    >
      <Stack
        direction={{ xs: 'column-reverse', sm: 'row' }}
        spacing={1}
        alignItems={{ xs: 'center' }}
        justifyContent="space-between"
      >
        {activeFolder !== 'All' && activeFolder !== 'Today' ? (
          <FiltersButtonsGroup />
        ) : null}
        <TodoHeader />
        <SearchTodoInput />
      </Stack>
    </Box>
  );
};

export default TodoBanner;
