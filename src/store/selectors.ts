// todos
export const selectTodos = (state: any) => state.todos.list;
// filters
export const selectActiveFilter = (state: any) =>
  state.filters.activeFilterTitle;
export const selectActiveFolder = (state: any) =>
  state.filters.activeFolderTitle;
export const selectSearchTodoTitle = (state: any) =>
  state.filters.searchTodoTitle;
export const selectSortMode = (state: any) => state.filters.sortMode;
// folders
export const selectFolders = (state: any) => state.folders.folders;
// dark Theme
export const selectDarkTheme = (state: any) => state.darkTheme;
