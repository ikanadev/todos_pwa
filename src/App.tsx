import type {Component} from 'solid-js';

import {Container, Heading, Divider} from '@hope-ui/solid';

import Todos from './Todos';

const App: Component = () => {

  return (
    <Container py="$4">
      <Heading level="1" size="5xl" color="$primary8" textAlign="center" mb="$4">
        TODOS - PWA
      </Heading>
      <Divider mb="$4" />
      <Todos />
    </Container>
  );
}

export default App;
