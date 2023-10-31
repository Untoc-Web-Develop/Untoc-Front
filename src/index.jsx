import React from 'react';
import ReactDOM from 'react-dom/client';
import 'css/index.css';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'routes/AppRouter';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
