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
  return (
    <Stack mb={1}>
      <Accordion
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
          <AddTodoForm />
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default AddTodoAccordion;
