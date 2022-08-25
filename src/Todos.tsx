import type {Component} from 'solid-js';

import {createSignal} from 'solid-js';
import {Input, Button, Box, Heading} from '@hope-ui/solid';

const Todos: Component = () => {
  const [text, setText] = createSignal<string>('');
  return (
    <>
      <Box d="flex" gap="$2" my="$4">
        <Input
          value={text()}
          onChange={(e) => setText(e.currentTarget.value)}
          width="auto"
          placeholder="Some todo..."
        />
        <Button>Add</Button>
      </Box>
      <Heading size="2xl">My Todos</Heading>
    </>
  );
};

export default Todos;
