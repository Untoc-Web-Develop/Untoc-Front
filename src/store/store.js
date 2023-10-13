import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';

const reducers = combineReducers({
  userReducer,
});

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
