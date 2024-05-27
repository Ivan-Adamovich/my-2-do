import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type FiltersState = {
  activeFilterTitle: string;
  activeFolderTitle: string;
  searchTodoTitle: string;
  sortMode: string;
};

const initialState: FiltersState = {
  activeFilterTitle: 'All',
  activeFolderTitle: 'Today',
  searchTodoTitle: '',
  sortMode: 'Date',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleActiveFilterTitle(state, action: PayloadAction<string>) {
      state.activeFilterTitle = action.payload;
    },
    toggleActiveFolderTitle(state, action: PayloadAction<string>) {
      state.activeFolderTitle = action.payload;
    },
    changeSearchTodoTitle(state, action: PayloadAction<string>) {
      state.searchTodoTitle = action.payload;
    },
    toggleSortMode(state, action: PayloadAction<string>) {
      state.sortMode = action.payload;
    },
  },
});

export const filterAction = filterSlice.actions;

export const selectActiveFilter = (state: RootState) =>
  state.filters.activeFilterTitle;

export const selectActiveFolder = (state: RootState) =>
  state.filters.activeFolderTitle;

export const selectSearchTodoTitle = (state: RootState) =>
  state.filters.searchTodoTitle;

export const selectSortMode = (state: RootState) => state.filters.sortMode;

export default filterSlice.reducer;
