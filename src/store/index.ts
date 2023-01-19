import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootSaga from './sagas';
import rootReducer, { ReduxStore } from './ducks';

const persistConfig = {
  key: 'root',
  storage,
};

export interface ReduxAction<T> {
  type: string;
  payload: T;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export const useSelector: TypedUseSelectorHook<ReduxStore> = useReduxSelector;

export { store, persistor };
