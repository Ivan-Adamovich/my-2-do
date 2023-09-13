import { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { toggleActiveFilterTitle } from '../../store/slice/filterSlice';
import { selectActiveFilter } from '../../store/selectors';

import { IconButton, Tooltip } from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface FiltersButtonProps {
  filter: string;
}

const FilterIcon: React.FC<FiltersButtonProps> = ({ filter }) => {
  let icon: ReactElement;
  switch (filter) {
    case 'Important':
      icon = <StarIcon />;
      break;
    case 'Planned':
      icon = <CalendarMonthIcon />;
      break;
    case 'Completed':
      icon = <CheckBoxIcon />;
      break;
    default:
      icon = <AssignmentIcon />;
      break;
  }
  return icon;
};

const FiltersButton: React.FC<FiltersButtonProps> = ({ filter }) => {
  const dispatch = useAppDispatch();
  const activeFilter: string = useAppSelector(selectActiveFilter);

  return (
    <Tooltip title={filter}>
      <IconButton
        onClick={() => dispatch(toggleActiveFilterTitle(filter))}
        size="small"
        color="primary"
        aria-label={filter}
        sx={{
          boxShadow: `${
            activeFilter === filter
              ? '0 0 10px rgba(55, 125, 255, 0.4)'
              : 'none'
          }`,
        }}
      >
        <FilterIcon filter={filter} />
      </IconButton>
    </Tooltip>
  );
};

export default FiltersButton;
