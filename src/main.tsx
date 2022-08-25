/* @refresh reload */
import {render} from 'solid-js/web';
import {HopeProvider} from '@hope-ui/solid';

import App from './App';

render(
  () => (
    <HopeProvider>
      <App />
    </HopeProvider>
  ),
  document.querySelector('#app')!,
);
