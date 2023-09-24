import { useTodos } from '../../hooks/useTodos';

import AlertDontHaveTodo from '../alert/AlertDontHaveTodo';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const showTodos = useTodos();

  if (showTodos.length) {
    return (
      <>
        {showTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </>
    );
  } else {
    return <AlertDontHaveTodo />;
  }
};

export default TodoList;
