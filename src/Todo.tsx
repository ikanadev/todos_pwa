import type {Component, JSX} from 'solid-js';
import type {ITodo} from './store';

import {createSignal, createEffect} from 'solid-js';
import {db} from './store';

import {Flex, Checkbox, IconButton} from '@hope-ui/solid';
import XMark from './components/icons/XMark';

const Todo: Component<{todo: ITodo}> = (props) => {
  const [isCheckLoading, setIsCheckLoading] = createSignal(false);
  const [isDeleteLoading, setIsDeleteLoading] = createSignal(false);

  const handleCheck: JSX.EventHandlerUnion<HTMLInputElement, Event> = (e) => {
    setIsCheckLoading(true);
    db.todos.update(props.todo.id, {checked: e.currentTarget.checked}).then(() => {
      setIsCheckLoading(false);
      console.log('Updated: ', props.todo.id);
    });
  };

  const handleDelete: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = () => {
    setIsDeleteLoading(true);
    db.todos.delete(props.todo.id).then(() => {
      console.log('Deleted: ', props.todo.id);
    });
  };

  createEffect(() => {
    console.log('Receiving: ', props.todo);
  });

  return (
    <Flex>
      <Checkbox
        flex={1}
        disabled={isCheckLoading()}
        checked={props.todo.checked}
        onChange={handleCheck}
        textDecoration={props.todo.checked ? 'line-through' : 'none'}
      >
        {props.todo.text}
      </Checkbox>
      <IconButton
        size="xs"
        aria-label="Delete"
        colorScheme="danger"
        icon={<XMark />}
        disabled={isDeleteLoading()}
        onClick={handleDelete}
      />
    </Flex>
  );
};

export default Todo;
