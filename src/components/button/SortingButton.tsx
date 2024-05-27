import { useCallback } from 'react';

import { useActions, useAppSelector } from '../../hooks/useActions';
import { selectSortMode } from '../../store/slice/filterSlice';

import { IconButton, Tooltip } from '@mui/material';

import SwapVertIcon from '@mui/icons-material/SwapVert';

const SortingButton = () => {
  const sortMode = useAppSelector(selectSortMode);

  const { toggleSortMode, sortTodos } = useActions();

  const toggleSortModeHeandler = useCallback(() => {
    switch (sortMode) {
      case 'Alphabet':
        toggleSortMode('Date');
        sortTodos('Date');
        break;
      case 'Date':
        toggleSortMode('Alphabet');
        sortTodos('Alphabet');
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
