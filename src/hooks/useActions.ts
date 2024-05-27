import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { darkThemeAction } from '../store/slice/darkThemeSlice';
import { filterAction } from '../store/slice/filterSlice';
import { folderAction } from '../store/slice/folderSlice';
import { todoAction } from '../store/slice/todoSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const rootActions = {
  ...darkThemeAction,
  ...filterAction,
  ...folderAction,
  ...todoAction,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
