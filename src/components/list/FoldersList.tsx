import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { removeFolder, Folder } from '../../store/slice/folderSlice';
import { changeFolderTitle } from '../../store/slice/todoSlice';
import {
  toggleActiveFolderTitle,
  toggleActiveFilterTitle,
} from '../../store/slice/filterSlice';
import { selectFolders } from '../../store/selectors';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Alert,
  Stack,
} from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const FoldersList: React.FC = () => {
  const folders: Folder[] = useAppSelector(selectFolders);

  const dispatch = useAppDispatch();

  const deleteHandler = useCallback(
    (event: React.MouseEvent, id: number, title: string) => {
      event?.stopPropagation();
      const folderDeleteAlert = window.confirm(
        `Delete ${title.toUpperCase()} folder? Are you sure?`
      );
      if (folderDeleteAlert) {
        dispatch(removeFolder(id));
        dispatch(changeFolderTitle(title));
      }
    },
    [folders]
  );

  return (
    <>
      {folders.length > 0 ? (
        <List>
          {folders.map((folder) => {
            return (
              <ListItem key={folder.title} disablePadding>
                <ListItemButton
                  onClick={() => {
                    dispatch(toggleActiveFolderTitle(folder.title));
                    dispatch(toggleActiveFilterTitle('All'));
                  }}
                >
                  <ListItemIcon sx={{ color: 'primary.main' }}>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary={folder.title} />
                </ListItemButton>
                <Tooltip title="Delete Folder">
                  <IconButton
                    onClick={(event) =>
                      deleteHandler(event, folder.id, folder.title)
                    }
                    aria-label="delete"
                    sx={{ mr: 1 }}
                  >
                    <DeleteIcon
                      fontSize="small"
                      sx={{ color: 'primary.main' }}
                    />
                  </IconButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Stack sx={{ p: 1 }}>
          <Alert severity="info" variant="outlined">
            You don't have any folders
          </Alert>
        </Stack>
      )}
    </>
  );
};

export default FoldersList;
