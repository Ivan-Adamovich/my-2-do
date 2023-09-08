import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const {
  toggleActiveFilterTitle,
  toggleActiveFolderTitle,
  changeSearchTodoTitle,
  toggleSortMode,
} = filterSlice.actions;

export default filterSlice.reducer;
