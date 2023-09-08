import { createSlice } from '@reduxjs/toolkit';

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

export const { changeDarkTheme } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;
