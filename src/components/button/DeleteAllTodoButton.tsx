import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { removeCompletedTodoInFolder } from '../../store/slice/todoSlice';
import { selectActiveFolder } from '../../store/selectors';

import { Button } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

const DeleteAllTodoButton = () => {
  const activeFolder: string = useAppSelector(selectActiveFolder);
  const dispatch = useAppDispatch();

  const deleteAllCompletedHandler = useCallback((folder: string) => {
    const allCompletedDeleteAlert = window.confirm(
      `Delete completed tasks? Are you sure?`
    );
    if (allCompletedDeleteAlert) {
      dispatch(removeCompletedTodoInFolder(folder));
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
