import type {Component} from 'solid-js';

import {Container, Heading, Divider} from '@hope-ui/solid';

import Todos from './Todos';
import ReloadPrompt from './ReloadPrompt';

const App: Component = () => {

  return (
    <Container py="$4" px="$2">
      <Heading level="1" size="5xl" color="$primary8" textAlign="center" mb="$4">
        TODOS - PWA
      </Heading>
      <Divider mb="$4" />
      <Todos />
      <ReloadPrompt />
    </Container>
  );
}

export default App;
