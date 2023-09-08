import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { changeSearchTodoTitle } from '../../store/slice/filterSlice';
import { selectSearchTodoTitle } from '../../store/selectors';

import { TextField, Stack } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchTodoInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchTitle = useAppSelector(selectSearchTodoTitle);

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <SearchIcon sx={{ color: 'primary.main' }} />
      <TextField
        onChange={(e) => dispatch(changeSearchTodoTitle(e.target.value))}
        value={searchTitle}
        id="outlined-basic"
        label="Search the task"
        variant="outlined"
        size="small"
        color="primary"
        fullWidth
        sx={{ bgcolor: 'background.paper' }}
      />
    </Stack>
  );
};

export default SearchTodoInput;
