import { useNavigate, useLocation } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/hook';
import { changeDarkTheme } from '../../store/slice/darkThemeSlice';
import { selectDarkTheme } from '../../store/selectors';

import {
  AppBar,
  Toolbar,
  Tooltip,
  IconButton,
  Stack,
  Checkbox,
} from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import AppSidebar from './AppSidebar';

const AppNav: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const darkTheme: boolean = useAppSelector(selectDarkTheme);

  return (
    <AppBar
      position="static"
      sx={
        darkTheme
          ? { bgcolor: 'background.papier', boxShadow: 'none' }
          : { bgcolor: 'action.selected', boxShadow: 'none' }
      }
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        {location.pathname === '/' ? (
          <AppSidebar />
        ) : (
          <Tooltip title="Back">
            <IconButton
              size="small"
              color="primary"
              aria-label="back"
              sx={{ pl: 1 }}
              onClick={goBack}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </Tooltip>
        )}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={1}
        >
          <Tooltip title="Theme">
            <Checkbox
              icon={<LightModeIcon sx={{ color: 'primary.main' }} />}
              checkedIcon={<DarkModeIcon sx={{ color: 'primary.main' }} />}
              onClick={(event) => {
                event.stopPropagation();
                dispatch(changeDarkTheme());
              }}
              checked={darkTheme}
              aria-label="theme"
            />
          </Tooltip>
          <Tooltip title="Git Hub">
            <IconButton size="small" color="primary" aria-label="menu">
              <a
                href="https://github.com/Ivan-Adamovich"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon sx={{ color: 'primary.main', pt: 0.5 }} />
              </a>
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;
