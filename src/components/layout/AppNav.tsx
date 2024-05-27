import { useNavigate, useLocation } from 'react-router-dom';

import { useAppSelector, useActions } from '../../hooks/useActions';
import { selectDarkTheme } from '../../store/slice/darkThemeSlice';

import { mtColors } from '../../assets/myColors';

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
  const { changeDarkTheme } = useActions();
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const darkTheme: boolean = useAppSelector(selectDarkTheme);

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 'none',
        bgcolor: `${darkTheme ? mtColors.dark.bgMain : mtColors.light.bgMain}`,
      }}
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
                changeDarkTheme();
              }}
              checked={darkTheme}
              aria-label="theme"
            />
          </Tooltip>
          <Tooltip title="Git Hub">
            <IconButton size="small" color="primary" aria-label="menu">
              <a
                href="https://github.com/Ivan-Adamovich/my-2-do"
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
