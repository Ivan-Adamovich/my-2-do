import { useState, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import useDebounce from '../../hooks/useDebounce';

import { TextField, Stack } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchTodoInput: React.FC = () => {
  const { changeSearchTodoTitle } = useActions();

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      changeSearchTodoTitle(searchTerm);
    } else {
      changeSearchTodoTitle('');
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
