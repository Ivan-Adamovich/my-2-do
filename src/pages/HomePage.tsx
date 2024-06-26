import { useEffect, useState } from 'react';

import { useAppSelector } from '../hooks/useActions';
import { useElementHeight } from '../hooks/useElementHeight';

import { Container, Stack } from '@mui/material';

import TodoList from '../components/todo/TodoList';
import AppNav from '../components/layout/AppNav';
import AddTodoAccordion from '../components/accordion/AddTodoAccordion';
import TodoBanner from '../components/todo/TodoBanner';
import {
  selectActiveFilter,
  selectActiveFolder,
} from '../store/slice/filterSlice';

const Homepage: React.FC = () => {
  const activeFilter: string = useAppSelector(selectActiveFilter);
  const activeFolder: string = useAppSelector(selectActiveFolder);

  const [ref, elementHeight] = useElementHeight();
  const [accordionHeight, setAccordionHeight] = useState<number>(0);

  useEffect(() => {
    if (
      (activeFolder === 'Today' || activeFolder === 'All') &&
      activeFilter === 'All'
    ) {
      setAccordionHeight(56);
    } else {
      setAccordionHeight(0);
    }
  }, [activeFilter, activeFolder]);

  return (
    <>
      <Stack ref={ref} sx={{ position: 'fixed', width: '100%', zIndex: 2 }}>
        <AppNav />
        <Container>
          <TodoBanner />
        </Container>
      </Stack>
      <Stack
        sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 1,
          top: `${elementHeight}px`,
        }}
      >
        <Container>
          {(activeFilter === 'All' && activeFolder === 'All') ||
          activeFolder === 'Today' ? (
            <AddTodoAccordion />
          ) : null}
        </Container>
      </Stack>
      <Stack
        sx={{
          position: 'absolute',
          width: '100%',
          zIndex: -1,
          top: `${elementHeight + accordionHeight}px`,
        }}
      >
        <Container>
          <TodoList />
        </Container>
      </Stack>
    </>
  );
};

export default Homepage;
