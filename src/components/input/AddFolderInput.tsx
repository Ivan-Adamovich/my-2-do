import { useState, useCallback } from 'react';

import { addFolder, Folder } from '../../store/slice/folderSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useActions';
import { selectFolders } from '../../store/selectors';

import { Button, TextField, Stack } from '@mui/material';

const AddFolderInput: React.FC = () => {
  const folders: Folder[] = useAppSelector(selectFolders);
  const [title, setTitle] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleAction = useCallback(() => {
    if (title.trim().length && folders.length < 4) {
      dispatch(addFolder(title));
      setTitle('');
    }
  }, [title]);

  const handleDownEnter = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && title.trim().length && folders.length < 4) {
        dispatch(addFolder(title));
        setTitle('');
      }
    },
    [title]
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: '16px 8px 16px 8px' }}
      onClick={(event) => {
        event?.stopPropagation();
      }}
    >
      <TextField
        className="folderForm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleDownEnter}
        id="outlined-basic"
        label="Folder name"
        variant="outlined"
        size="small"
        color="primary"
        sx={{ width: '70%' }}
      />
      <Button
        onClick={handleAction}
        variant="contained"
        size="small"
        color="primary"
        sx={{ boxShadow: 'none' }}
      >
        Add
      </Button>
    </Stack>
  );
};

export default AddFolderInput;
