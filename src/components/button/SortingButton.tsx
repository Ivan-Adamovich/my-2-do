import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { toggleSortMode } from '../../store/slice/filterSlice';
import { sortTodos } from '../../store/slice/todoSlice';
import { selectSortMode } from '../../store/selectors';

import { IconButton, Tooltip } from '@mui/material';

import SwapVertIcon from '@mui/icons-material/SwapVert';

const SortingButton = () => {
  const sortMode = useAppSelector(selectSortMode);

  const dispatch = useAppDispatch();

  const toggleSortModeHeandler = useCallback(() => {
    switch (sortMode) {
      case 'Alphabet':
        dispatch(toggleSortMode('Date'));
        dispatch(sortTodos('Date'));
        break;
      case 'Date':
        dispatch(toggleSortMode('Alphabet'));
        dispatch(sortTodos('Alphabet'));
        break;
    }
  }, [sortMode]);

  return (
    <Tooltip title={`Sorting on ${sortMode}`}>
      <IconButton
        onClick={toggleSortModeHeandler}
        size="small"
        color="primary"
        aria-label="sorting"
      >
        <SwapVertIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SortingButton;
