import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/todoSlice';
import folderReducer from './slice/folderSlice';
import filtersReducer from './slice/filterSlice';
import darkThemeReducer from './slice/darkThemeSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    folders: folderReducer,
    filters: filtersReducer,
    darkTheme: darkThemeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
