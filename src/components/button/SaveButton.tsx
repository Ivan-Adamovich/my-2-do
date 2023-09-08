import { Todo } from '../../store/slice/todoSlice';

import { Typography, Tooltip, IconButton, Stack } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';

interface SaveButtonProps {
  todo: Todo;
  handleAction(id: number): void;
  saved: boolean;
  setSaved(saved: boolean): void;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  todo,
  handleAction,
  saved,
  setSaved,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent={{ xs: 'center', sm: 'flex-start' }}
      alignItems="center"
      spacing={2}
      mb={2}
    >
      <Tooltip title="Save">
        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            handleAction(todo.id);
            setSaved(true);
          }}
          aria-label="save"
        >
          <SaveIcon sx={{ color: 'primary.main' }} />
        </IconButton>
      </Tooltip>
      {saved ? (
        <Typography variant="body2" sx={{ color: 'primary.main' }}>
          Changes saved
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Changes not saved
        </Typography>
      )}
    </Stack>
  );
};

export default SaveButton;
