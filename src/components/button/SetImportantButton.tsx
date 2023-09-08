import { Button } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface SetImportantButtonProps {
  important: boolean;
  toggleImportant(): void;
}

const SetImportantButton: React.FC<SetImportantButtonProps> = ({
  important,
  toggleImportant,
}) => {
  return (
    <Button
      onClick={toggleImportant}
      variant="outlined"
      size="small"
      color="primary"
      sx={{ width: '152px' }}
    >
      {important === true ? (
        <StarIcon fontSize="small" sx={{ mr: 1, color: 'primary.main' }} />
      ) : (
        <StarBorderIcon
          fontSize="small"
          sx={{ mr: 1, color: 'primary.main' }}
        />
      )}
      important
    </Button>
  );
};

export default SetImportantButton;
