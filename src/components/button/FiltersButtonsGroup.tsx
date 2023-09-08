import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { toggleActiveFilterTitle } from '../../store/slice/filterSlice';
import { selectActiveFilter } from '../../store/selectors';

import { IconButton, Tooltip, Stack } from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const FiltersButtonsGroup = () => {
  const dispatch = useAppDispatch();
  const activeFilter: string = useAppSelector(selectActiveFilter);

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Tooltip title="All">
        <IconButton
          onClick={() => dispatch(toggleActiveFilterTitle('All'))}
          size="small"
          color="primary"
          aria-label="all"
          sx={{
            boxShadow: `${
              activeFilter === 'All'
                ? '0 0 10px rgba(55, 125, 255, 0.4)'
                : 'none'
            }`,
          }}
        >
          <AssignmentIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Important">
        <IconButton
          onClick={() => dispatch(toggleActiveFilterTitle('Important'))}
          size="small"
          color="primary"
          aria-label="important"
          sx={{
            boxShadow: `${
              activeFilter === 'Important'
                ? '0 0 10px rgba(55, 125, 255, 0.4)'
                : 'none'
            }`,
          }}
        >
          <StarIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Planned">
        <IconButton
          onClick={() => dispatch(toggleActiveFilterTitle('Planned'))}
          size="small"
          color="primary"
          aria-label="planned"
          sx={{
            boxShadow: `${
              activeFilter === 'Planned'
                ? '0 0 10px rgba(55, 125, 255, 0.4)'
                : 'none'
            }`,
          }}
        >
          <CalendarMonthIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Completed">
        <IconButton
          onClick={() => dispatch(toggleActiveFilterTitle('Completed'))}
          size="small"
          color="primary"
          aria-label="completed"
          sx={{
            boxShadow: `${
              activeFilter === 'Completed'
                ? '0 0 10px rgba(55, 125, 255, 0.4)'
                : 'none'
            }`,
          }}
        >
          <CheckBoxIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default FiltersButtonsGroup;
