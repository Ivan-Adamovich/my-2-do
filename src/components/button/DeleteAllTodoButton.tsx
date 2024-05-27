import { useCallback } from 'react';

import { useActions, useAppSelector } from '../../hooks/useActions';

import { Button } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { selectActiveFolder } from '../../store/slice/filterSlice';

const DeleteAllTodoButton = () => {
  const activeFolder: string = useAppSelector(selectActiveFolder);
  const { removeCompletedTodoInFolder } = useActions();

  const deleteAllCompletedHandler = useCallback((folder: string) => {
    const allCompletedDeleteAlert = window.confirm(
      `Delete completed tasks? Are you sure?`
    );
    if (allCompletedDeleteAlert) {
      removeCompletedTodoInFolder(folder);
    }
  }, []);

  return (
    <Button
      id="fade-button"
      variant="outlined"
      size="small"
      color="primary"
      sx={{ bgcolor: 'palette.background.paper', ml: 1 }}
      onClick={() => deleteAllCompletedHandler(activeFolder)}
    >
      <DeleteIcon fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />
      Clear all
    </Button>
  );
};

export default DeleteAllTodoButton;
