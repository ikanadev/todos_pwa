import type {Component, JSX} from 'solid-js';
import type {ITodo} from './store';

import {createSignal} from 'solid-js';

import {Flex, Checkbox, IconButton} from '@hope-ui/solid';
import XMark from './components/icons/XMark';

const Todo: Component<{todo: ITodo}> = (props) => {
  const [checked, setChecked] = createSignal(props.todo.checked);
  const [disabled, setDisabled] = createSignal(false);

  const handleCheck: JSX.EventHandlerUnion<HTMLInputElement, Event> = (e) => {
    setChecked(e.currentTarget.checked);
  };

  return (
    <Flex>
      <Checkbox
        disabled={disabled()}
        checked={checked()}
        onChange={handleCheck}
      >
        {props.todo.text}
      </Checkbox>
      <IconButton aria-label="Delete" icon={<XMark />} />
    </Flex>
  );
};

export default Todo;
