import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import 'modern-normalize';
import { store } from './redux/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
