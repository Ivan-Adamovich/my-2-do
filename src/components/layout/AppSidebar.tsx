import { useState } from 'react';

import { useAppDispatch } from '../../hooks/hook';
import { changeSearchTodoTitle } from '../../store/slice/filterSlice';

import {
  Box,
  Drawer,
  Divider,
  IconButton,
  Tooltip,
  Stack,
} from '@mui/material';

import AddFolderInput from '../input/AddFolderInput';
import FoldersList from '../list/FoldersList';
import MenuList from '../list/MenuList';

import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

type Anchor = 'left';

const AppSidebar = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    dispatch(changeSearchTodoTitle(''));
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <Tooltip title="Close Menu">
        <IconButton
          onClick={toggleDrawer(anchor, false)}
          size="small"
          color="primary"
          aria-label="close"
          sx={{
            ml: 2,
            mt: 2,
          }}
        >
          <ClearIcon />
        </IconButton>
      </Tooltip>
      <MenuList />
      <Divider />
      <AddFolderInput />
      <Divider />
      <FoldersList />
    </Box>
  );

  return (
    <>
      {(['left'] as const).map((anchor) => (
        <Stack key={anchor}>
          <Tooltip title="Menu">
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              size="small"
              color="primary"
              aria-label="open"
            >
              <MenuIcon sx={{ color: 'primary.main' }} />
            </IconButton>
          </Tooltip>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Stack>
      ))}
    </>
  );
};

export default AppSidebar;
