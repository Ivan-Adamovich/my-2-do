import { useState, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useActions';
import { addTodo } from '../../store/slice/todoSlice';
import { changeSearchTodoTitle } from '../../store/slice/filterSlice';
import { selectActiveFilter, selectActiveFolder } from '../../store/selectors';

import { Dayjs } from 'dayjs';

import { TextField, Button, Stack } from '@mui/material';

import FolderSelectButton from '../button/FolderSelectButton';
import PickerWithButtonField from '../button/PickerWithButtonField';
import ImportantButton from '../button/SetImportantButton';

interface AddTodoFormProps {
  handleClose(): void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ handleClose }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [folderTitle, setFolderTitle] = useState<string>('');
  const [important, setInportant] = useState<boolean>(false);
  const [planned, setPlanned] = useState<string>('');
  const [value, setValue] = useState<Dayjs | null>(null);

  const activeFolder = useAppSelector(selectActiveFolder);
  const activeFilter = useAppSelector(selectActiveFilter);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activeFolder !== 'All' && activeFolder !== 'Today') {
      setFolderTitle(activeFolder);
    } else {
      setFolderTitle('');
    }
    if (activeFilter === 'Important') {
      setInportant(true);
    } else {
      setInportant(false);
    }
  }, [activeFolder, activeFilter]);

  const handleAction = useCallback(() => {
    if (title.trim().length) {
      dispatch(
        addTodo({ title, description, important, folderTitle, planned })
      );
      setTitle('');
      setFolderTitle('');
      setDescription('');
      setPlanned('');
      setValue(null);
      setInportant(false);
      handleClose();
    }
    dispatch(changeSearchTodoTitle(''));
  }, [title, description, important, folderTitle, planned]);

  const handleDownEnter = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && title.trim().length) {
        dispatch(
          addTodo({ title, description, important, folderTitle, planned })
        );
        setTitle('');
        setFolderTitle('');
        setDescription('');
        setPlanned('');
        setValue(null);
        setInportant(false);
        handleClose();
      }
      dispatch(changeSearchTodoTitle(''));
    },
    [title, description, important, folderTitle, planned]
  );

  const toggleFolder = useCallback((folderTitle: string) => {
    setFolderTitle(folderTitle);
  }, []);

  const toggleImportant = useCallback(() => {
    setInportant((prev: boolean) => !prev);
  }, []);

  const plannedHandler = useCallback((value: Dayjs | null) => {
    if (value !== null) {
      const date = value.format('DD.MM.YYYY');
      setPlanned(date);
    } else {
      setPlanned('');
    }
  }, []);

  useEffect(() => {
    plannedHandler(value);
  }, [value]);

  return (
    <>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleDownEnter}
        id="outlined-basic"
        label="Task name"
        variant="outlined"
        size="small"
        color="primary"
        fullWidth
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems={{ xs: 'center', sm: 'start', md: 'center' }}
        justifyContent="space-between"
        mt={2}
      >
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={2}
          alignItems={{ xs: 'start', sm: 'center' }}
          justifyContent="space-between"
        >
          <ImportantButton
            important={important}
            toggleImportant={toggleImportant}
          />
          <PickerWithButtonField value={value} setValue={setValue} />
          <FolderSelectButton
            toggleFolder={toggleFolder}
            folderTitle={folderTitle}
          />
        </Stack>
        <Button
          onClick={handleAction}
          variant="contained"
          size="small"
          color="primary"
          sx={{ boxShadow: 'none', width: '152px' }}
        >
          Add Task
        </Button>
      </Stack>
      <TextField
        className="folderForm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="outlined-multiline-static"
        label="Task description"
        variant="outlined"
        multiline
        minRows={2}
        maxRows={7}
        size="small"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      />
    </>
  );
};

export default AddTodoForm;
