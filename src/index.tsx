/* @refresh reload */
import { render ,hydrate  } from 'solid-js/web';
import './index.css';
import App from './App';

render(() => <App />, document.getElementById('root') as HTMLElement);
