import { useAppDispatch } from '../../hooks/hook';
import {
  toggleActiveFolderTitle,
  toggleActiveFilterTitle,
} from '../../store/slice/filterSlice';

import {
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

const MenuList = () => {
  const dispatch = useAppDispatch();

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          sx={{ mb: 1 }}
          onClick={() => {
            dispatch(toggleActiveFolderTitle('Today'));
            dispatch(toggleActiveFilterTitle('All'));
          }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <WbTwilightIcon />
          </ListItemIcon>
          <ListItemText primary="Today" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton
          sx={{ mt: 1 }}
          onClick={() => {
            dispatch(toggleActiveFolderTitle('All'));
            dispatch(toggleActiveFilterTitle('All'));
          }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="All Tasks" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            dispatch(toggleActiveFolderTitle('All'));
            dispatch(toggleActiveFilterTitle('Important'));
          }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Important" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            dispatch(toggleActiveFolderTitle('All'));
            dispatch(toggleActiveFilterTitle('Planned'));
          }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Planned" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            dispatch(toggleActiveFolderTitle('All'));
            dispatch(toggleActiveFilterTitle('Completed'));
          }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <CheckBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Completed" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default MenuList;
