import { useState } from 'react';

import { useAppSelector } from '../../hooks/useActions';
import { selectFolders } from '../../store/selectors';
import { Folder } from '../../store/slice/folderSlice';

import { Divider, Button, Menu, MenuItem, Stack } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';

interface FolderSelectButtonProps {
  toggleFolder(folderTitle: string): void;
  folderTitle: string;
}

const FolderSelectButton: React.FC<FolderSelectButtonProps> = ({
  toggleFolder,
  folderTitle,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const folders: Folder[] = useAppSelector(selectFolders);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFolderSelect = (folder: string) => {
    toggleFolder(folder);
    handleClose();
  };

  return (
    <Stack>
      {folders.length >= 1 ? (
        <Button
          id="basic-button"
          variant="outlined"
          size="small"
          color="primary"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ width: '152px' }}
        >
          <FolderIcon fontSize="small" sx={{ mr: 1 }} />
          {folderTitle ? `${folderTitle}` : 'Not Folder'}
        </Button>
      ) : null}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            handleFolderSelect('');
          }}
        >
          Not Folder
        </MenuItem>
        <Divider />
        {folders.map((folder) => {
          return (
            <MenuItem
              key={folder.title}
              onClick={() => {
                handleFolderSelect(folder.title);
              }}
            >
              {folder.title}
            </MenuItem>
          );
        })}
      </Menu>
    </Stack>
  );
};

export default FolderSelectButton;
