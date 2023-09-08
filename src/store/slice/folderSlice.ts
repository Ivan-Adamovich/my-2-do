import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Folder = {
  id: number;
  title: string;
};

type FoldersState = {
  folders: Folder[];
};

const storeFolders = JSON.parse(
  localStorage.getItem('folders') || '[]'
) as Folder[];

const setLocalStorageFolders = (folders: Folder[]) => {
  localStorage.setItem('folders', JSON.stringify(folders));
};

const initialState: FoldersState = {
  folders: storeFolders,
};

const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    addFolder(state, action: PayloadAction<string>) {
      state.folders.push({
        id: Date.now(),
        title: action.payload,
      });
      setLocalStorageFolders(state.folders);
    },
    removeFolder(state, action: PayloadAction<number>) {
      state.folders = state.folders.filter(
        (folder) => folder.id !== action.payload
      );
      setLocalStorageFolders(state.folders);
    },
  },
});

export const { addFolder, removeFolder } = folderSlice.actions;

export default folderSlice.reducer;
