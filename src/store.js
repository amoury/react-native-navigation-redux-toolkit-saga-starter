import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import counterReducer from './slices/counter';

const sagaMiddleware = createSagaMiddleware();

const devMode = process.env.NODE_ENV === 'development';
const reducers = {
  counter: counterReducer,
};

const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const store = configureStore({
  reducer: reducers,
  devTools: devMode,
  middleware,
});

sagaMiddleware.run(sagas);

export default store;
