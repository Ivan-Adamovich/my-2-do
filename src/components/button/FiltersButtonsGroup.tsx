import { Stack } from '@mui/material';

import FiltersButton from './FilterButton';

const FiltersButtonsGroup = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <FiltersButton filter={'All'} />
      <FiltersButton filter={'Important'} />
      <FiltersButton filter={'Planned'} />
      <FiltersButton filter={'Completed'} />
    </Stack>
  );
};

export default FiltersButtonsGroup;
