import { Container, Alert, Stack } from '@mui/material';

import AppNav from '../components/layout/AppNav';

const Notfoundpage = () => {
  return (
    <>
      <AppNav />
      <Container>
        <Stack sx={{ width: '100%', mt: 2 }} spacing={2}>
          <Alert severity="error">Error 404 Not Found this Page</Alert>
        </Stack>
      </Container>
    </>
  );
};

export default Notfoundpage;
