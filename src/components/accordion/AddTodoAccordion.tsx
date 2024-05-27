import { useState } from 'react';

import { useAppSelector } from '../../hooks/useActions';
import { selectDarkTheme } from '../../store/selectors';

import {
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostAddIcon from '@mui/icons-material/PostAdd';

import AddTodoForm from '../form/AddTodoForm';

const AddTodoAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const darkTheme: boolean = useAppSelector(selectDarkTheme);

  const handleChange = () => {
    setExpanded((prev) => !prev);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Stack mb={1}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{
          bgcolor: `${darkTheme ? '#111' : '#fff'}`,
          backgroundImage: 'unset',
          boxShadow: 'none',
          pl: 2,
          pr: 1,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <PostAddIcon fontSize="small" sx={{ color: 'primary.main', mr: 2 }} />
          <Typography sx={{ color: 'primary.main' }}>Add new Task</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddTodoForm handleClose={handleClose} />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default AddTodoAccordion;
