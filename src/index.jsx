import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import theme from 'constant/theme';
import ReactDOM from 'react-dom/client';
import 'css/index.css';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from 'routes/AppRouter';
import store from 'store/store';

const persistor = persistStore(store);

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);
