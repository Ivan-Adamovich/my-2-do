import { useAppDispatch } from '../../hooks/hook';
import { toggleImportant, Todo } from '../../store/slice/todoSlice';

import { Tooltip, Checkbox } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface ToggleImpotantButtonProps {
  todo: Todo;
}

const ToggleImpotantButton: React.FC<ToggleImpotantButtonProps> = ({
  todo,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip title="Important">
      <Checkbox
        icon={<StarBorderIcon sx={{ color: 'primary.main' }} />}
        checkedIcon={<StarIcon sx={{ color: 'primary.main' }} />}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(toggleImportant(todo.id));
        }}
        checked={todo.important}
        aria-label="important"
      />
    </Tooltip>
  );
};

export default ToggleImpotantButton;
