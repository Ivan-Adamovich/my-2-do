import { useState, useEffect, useCallback, useMemo } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/useActions';
import { changeTodo, Todo } from '../../store/slice/todoSlice';
import { selectTodos } from '../../store/selectors';

import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

import { Typography, TextField, Stack } from '@mui/material';

import FolderSelectButton from '../button/FolderSelectButton';
import PickerWithButtonField from '../button/PickerWithButtonField';
import SaveButton from '../button/SaveButton';

const ChangeTodoForm = () => {
  const { id } = useParams();
  const todos: Todo[] = useAppSelector(selectTodos);
  const todo: Todo = useMemo(() => {
    return todos.filter((todo) => todo.id.toString() === id)[0];
  }, []);
  const [title, setTitle] = useState<string>(todo.title);
  const [folderTitle, setFolderTitle] = useState<string>(todo.folder);
  const [description, setDescription] = useState<string>(todo.description);
  const [planned, setPlanned] = useState<string>('');
  const [value, setValue] = useState<Dayjs | null>(null);
  const [saved, setSaved] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todo.planned) {
      setValue(dayjs(todo.planned, 'DD.MM.YYYY'));
    }
  }, [todo]);

  const toggleFolder = useCallback(
    (folderTitle: string) => {
      setFolderTitle(folderTitle);
    },
    [folderTitle]
  );

  const handleAction = useCallback(
    (id: number) => {
      dispatch(changeTodo({ id, title, description, folderTitle, planned }));
    },
    [id, title, description, folderTitle, planned]
  );

  const plannedHandler = useCallback(
    (value: Dayjs | null) => {
      if (value !== null) {
        const date = value.format('DD.MM.YYYY');
        setPlanned(date);
      } else {
        setPlanned('');
      }
    },
    [value]
  );

  useEffect(() => {
    plannedHandler(value);
  }, [value]);

  return (
    <>
      <SaveButton
        todo={todo}
        handleAction={handleAction}
        saved={saved}
        setSaved={setSaved}
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mb={2}
      >
        <Typography
          variant="body2"
          sx={saved ? { color: 'primary.main' } : { color: 'text.secondary' }}
        >
          {todo.date}
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <PickerWithButtonField value={value} setValue={setValue} />
          <FolderSelectButton
            toggleFolder={toggleFolder}
            folderTitle={folderTitle}
          />
        </Stack>
      </Stack>
      <TextField
        className="folderForm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="outlined-multiline-static"
        label="Change title"
        variant="outlined"
        size="small"
        color="primary"
        sx={{ width: '100%', mb: 2 }}
      />
      <TextField
        className="folderForm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="outlined-multiline-static"
        label="Change description"
        variant="outlined"
        multiline
        maxRows={5}
        size="small"
        color="primary"
        sx={{ width: '100%' }}
      />
    </>
  );
};

export default ChangeTodoForm;
