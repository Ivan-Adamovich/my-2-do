import { useState } from 'react';

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
          boxShadow: 'none',
          pl: 1,
          pr: 2,
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
