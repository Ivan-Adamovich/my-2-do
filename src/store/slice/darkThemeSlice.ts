import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const userDarkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');

const initialState: boolean = userDarkMode;

const setuserDarkMode = (userDarkMode: boolean) => {
  localStorage.setItem('darkMode', JSON.stringify(userDarkMode));
};

const darkThemeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    changeDarkTheme(state) {
      state = !state;
      setuserDarkMode(state);
      return state;
    },
  },
});

export const darkThemeAction = darkThemeSlice.actions;

export const selectDarkTheme = (state: RootState) => state.darkTheme;

export default darkThemeSlice.reducer;
