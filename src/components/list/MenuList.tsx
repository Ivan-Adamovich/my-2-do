import { useActions } from '../../hooks/useActions';

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
  const { toggleActiveFolderTitle, toggleActiveFilterTitle } = useActions();

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          sx={{ mb: 1 }}
          onClick={() => {
            toggleActiveFolderTitle('Today');
            toggleActiveFilterTitle('All');
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
            toggleActiveFolderTitle('All');
            toggleActiveFilterTitle('All');
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
            toggleActiveFolderTitle('All');
            toggleActiveFilterTitle('Important');
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
            toggleActiveFolderTitle('All');
            toggleActiveFilterTitle('Planned');
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
            toggleActiveFolderTitle('All');
            toggleActiveFilterTitle('Completed');
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
