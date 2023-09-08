import Alert from '@mui/material/Alert';

const AlertDontHaveTodo: React.FC = () => {
  return (
    <Alert severity="info" variant="outlined">
      You don't have any tasks in this folder
    </Alert>
  );
};

export default AlertDontHaveTodo;
