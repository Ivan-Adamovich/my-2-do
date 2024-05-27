import { useAppDispatch } from '../../hooks/useActions';
import { toggleComplete, Todo } from '../../store/slice/todoSlice';

import { Tooltip, Checkbox } from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface ToggleCompletedButtonProps {
  todo: Todo;
}

const ToggleCompletedButton: React.FC<ToggleCompletedButtonProps> = ({
  todo,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip title="Completed">
      <Checkbox
        icon={<CheckBoxOutlineBlankIcon sx={{ color: 'primary.main' }} />}
        checkedIcon={<CheckBoxIcon sx={{ color: 'primary.main' }} />}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(toggleComplete(todo.id));
        }}
        checked={todo.completed}
        aria-label="completed"
      />
    </Tooltip>
  );
};

export default ToggleCompletedButton;
