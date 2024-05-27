import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { selectDarkTheme } from './store/selectors';
import { useAppSelector } from './hooks/useActions';

import { useEffect } from 'react';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import TodoItemPage from './pages/TodoItemPage';
import NotFoundPage from './pages/NotfoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} errorElement={<NotFoundPage />} />
      <Route
        path="/todos/:id"
        element={<TodoItemPage />}
        errorElement={<NotFoundPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

const App: React.FC = () => {
  const darkTheme: boolean = useAppSelector(selectDarkTheme);
  const appBody = document.body;

  useEffect(() => {
    if (darkTheme) {
      appBody.style.backgroundColor = '#121212';
    } else {
      appBody.style.backgroundColor = '#fff';
    }
  }, [darkTheme]);

  const myTheme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
