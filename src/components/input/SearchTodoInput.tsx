import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import { changeSearchTodoTitle } from '../../store/slice/filterSlice';
import useDebounce from '../../hooks/useDebounce';

import { TextField, Stack } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchTodoInput: React.FC = () => {
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(changeSearchTodoTitle(searchTerm));
    } else {
      dispatch(changeSearchTodoTitle(''));
    }
  }, [debouncedSearchTerm]);

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <SearchIcon sx={{ color: 'primary.main' }} />
      <TextField
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
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
