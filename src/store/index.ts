import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './slice/todoSlice';
import folderReducer from './slice/folderSlice';
import filtersReducer from './slice/filterSlice';
import darkThemeReducer from './slice/darkThemeSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  folders: folderReducer,
  filters: filtersReducer,
  darkTheme: darkThemeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filters'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
